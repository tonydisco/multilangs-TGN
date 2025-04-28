import {getAlbum} from '@/apis/album';
import {
  Construction,
  Introduce,
  News,
  Partners,
  ProductionCapacity,
  Products,
  Projects
} from '@/components/Opening';
import PageLayout from '@/components/PageLayout';
import {albums} from '@/utils/config';

export default async function IndexPage() {
  const customerData = await getAlbum(albums.Customers);
  return (
    <PageLayout>
      <section className="tgn-opening-section">
        <Introduce />
        <Construction />
        <ProductionCapacity />
        <Projects />
        <Products />
        <News />
        <Partners masterData={customerData} />
      </section>
    </PageLayout>
  );
}
