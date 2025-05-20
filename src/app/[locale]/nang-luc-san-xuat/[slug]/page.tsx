import ChildHero from '@/components/Common/ChildHero';
import {TitleInCard} from '@/components/Common/Titles';

import {PureImage} from '@/components/Common/Images';
import {BaseSlider} from '@/components/Common/Sliders';
import NotFoundPage from '@/components/NotFoundPage';
import {IPageDefaultProps} from '@/models/interface';
import '@/styles/childPage.scss';
import {getPage} from '@/apis/pages';
import parse from 'html-react-parser';
import {Fragment} from 'react';
import {v4 as uuidv4} from 'uuid';
import {getFactories} from '@/apis/factories';

const ChildCard = (props: {
  title?: string;
  blocks?: string[];
  imgUrl: string;
  className?: string;
}) => {
  const {title, blocks, imgUrl, className = ''} = props;
  return (
    <div className={`child-page-img-slider-wrapper ${className}`}>
      <div className="child-page-img-slider">
        <PureImage url={imgUrl} mode={imgUrl ? 'cover' : 'contain'} />
      </div>
      {title && (
        <div className="child-page-list-content">
          <TitleInCard title={title} />
          {blocks && (
            <div className="child-page-list-blocks">
              {blocks?.map((block, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: block
                  }}
                ></div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Page = async ({params}: Readonly<IPageDefaultProps>) => {
  const {slug, locale} = await params;
  const {data} = await getChildPageDetail(slug);
  const factories = await getFactories();
  if (!data) {
    return <NotFoundPage />;
  }
  const content = data.contents.find((x: any) => x.language == locale);
  const css = data.stylesheets.map((x: any) => x.content).join('');
  return (
    <section className="wrapper-for-lastchild">
      <style>{css}</style>
      <ChildHero title={data.title} imageUrl={data.featuredImageUrl} />
      <>
        {content.blocks?.map((block: any) => {
          const html = parse(block.content, {
            replace: (domNode: any) => {
              if (domNode?.attribs?.['data-auto-block-code']) {
                const blockCode = domNode.attribs['data-auto-block-code'];
                const arr = blockCode.split('](');
                const code = arr[0].replace('[', '');
                const pars = arr[1].replace(')', '').split(',');
                if (code === 'FACTORIES') {
                  const cat = pars[0];
                  const layout = pars.length > 1 ? pars[1] : '';
                  const items = factories.posts.filter((c) => {
                    return (
                      cat.length == 0 ||
                      c.categories.find((x: any) => x.name === cat)
                    );
                  });
                  return items.length ? (
                    layout == 'grid' ? (
                      <div>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                          {items?.map((slide, index) => {
                            return (
                              <div key={index} className="col mb-4">
                                <ChildCard
                                  title={slide.title}
                                  imgUrl={slide.featuredImageUrl}
                                  blocks={
                                    slide.contents
                                      .find((x) => x.language === locale)
                                      ?.blocks?.map((x) => x.content) ?? [
                                      slide.contents.find(
                                        (x) => x.language === locale
                                      )?.excerpt ?? ''
                                    ]
                                  }
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <BaseSlider
                        total={items.length}
                        renderList={items.map((slide, index) => {
                          return (
                            <div key={index}>
                              <div className="child-page-img-slider-margin">
                                <ChildCard
                                  title={
                                    layout === 'no-title' ? '' : slide.title
                                  }
                                  imgUrl={slide.featuredImageUrl}
                                  blocks={
                                    slide.contents
                                      .find((x) => x.language === locale)
                                      ?.blocks?.map((x) => x.content) ?? [
                                      slide.contents.find(
                                        (x) => x.language === locale
                                      )?.excerpt ?? ''
                                    ]
                                  }
                                />
                              </div>
                            </div>
                          );
                        })}
                        slidesToShow={2}
                      />
                    )
                  ) : (
                    domNode
                  );
                }
                return domNode;
              }
              return domNode;
            }
          });
          return <Fragment key={uuidv4()}>{html}</Fragment>;
        })}
      </>
    </section>
  );
};

export default Page;

const getChildPageDetail = async (slug: string) => {
  const pageContent = await getPage(slug);
  return {
    data: pageContent
  };
};
