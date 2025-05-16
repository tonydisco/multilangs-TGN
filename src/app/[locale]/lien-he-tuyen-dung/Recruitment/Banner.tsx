'use client';
import {getAttributes} from '@/apis/attributes';
import {Button} from '@/components/Common/Button';
import {PureImage} from '@/components/Common/Images';
import {SectionTitles} from '@/components/Common/Titles';
import {useCallback, useEffect, useState} from 'react';

import '@/styles/recruitmentBannerStyle.scss';

interface IRecruitmentBannerProps {
  onUpdateQuery: (query: string) => void;
  btnStatus?: boolean;
  isSearch?: boolean;
}
interface ILocation {
  displayIndex: number;
  id: string;
  value: string;
  title?: string;
}
interface ISearchStr {
  txt: string;
  location: string;
}

const RecruitmentBanner = (props: IRecruitmentBannerProps) => {
  const {onUpdateQuery, btnStatus, isSearch = true} = props;
  const [searchStr, setSearchStr] = useState<ISearchStr>({
    txt: '',
    location: ''
  });
  const [locations, setLocations] = useState<ILocation[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr((prev) => ({
      ...prev,
      txt: e.target.value
    }));
  };
  const onSearch = useCallback(() => {
    onUpdateQuery(searchStr.txt);
  }, [onUpdateQuery, searchStr]);

  const onSelectLocation = (item: IOptions) => {
    setSearchStr((prev) => ({
      ...prev,
      location: item.value
    }));
  };

  useEffect(() => {
    (async () => {
      const res = await getAttributes();
      const found = res?.attributes?.find(
        (item: any) => item.code === 'Job.Location'
      );
      if (found) {
        setLocations(found?.values);
      }
    })();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onSearch, searchStr]);

  return (
    <div className="recruitment-banner-wrapper">
      <div className="banner-inner-style">
        <SectionTitles
          title="Thế giới nhà Tuyển dụng"
          style={{
            color: 'white',
            textAlign: 'center'
          }}
        />
        {isSearch && (
          <div>
            <div className="job-action job-action-style">
              <div
                style={{
                  flex: 2,
                  width: '100%'
                }}
              >
                <input
                  style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                    outline: 'none',
                    width: '100%',
                    height: '100%',
                    padding: ' 10px 20px'
                  }}
                  placeholder="Vị trí tuyển dụng"
                  value={searchStr.txt}
                  onChange={onChange}
                />
              </div>
              <ActionBtn
                onBtn={onSearch}
                btnStatus={btnStatus}
                wrapperClass="tgn-pc-only"
                locationOptions={locations}
                id="tgn-recruitment-location-select"
                onSelect={onSelectLocation}
                searchStr={searchStr}
              />
            </div>
            <ActionBtn
              style={{
                marginTop: 20
              }}
              isHideAsset
              onBtn={onSearch}
              btnStatus={btnStatus}
              wrapperClass="tgn-mobile-only job-action-style"
              id="tgn-recruitment-location-select"
              onSelect={onSelectLocation}
              locationOptions={locations}
              searchStr={searchStr}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const ActionBtn = (props: {
  wrapperClass?: string;
  id?: string;
  isHideAsset?: boolean;
  btnStatus?: boolean;
  style?: React.CSSProperties;
  onBtn?: () => void;
  onSelect?: (item: IOptions) => void;
  locationOptions?: ILocation[];
  searchStr?: ISearchStr;
}) => {
  const {
    wrapperClass,
    style,
    isHideAsset,
    onBtn,
    btnStatus,
    locationOptions,
    onSelect,
    id,
    searchStr
  } = props;

  const [isShowBox, setIsShowBox] = useState(false);

  return (
    <div className={wrapperClass} style={{...style}}>
      <div
        style={{
          display: 'flex',
          gap: 30,
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {!isHideAsset && (
          <PureImage url="/icon/FADE-LINE.svg" style={{width: 'auto'}} />
        )}

        <div
          onClick={() => setIsShowBox((prev) => !prev)}
          style={{
            textTransform: 'capitalize',
            display: 'flex',
            gap: 40,
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            cursor: 'pointer'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 8,
              alignItems: 'center'
            }}
          >
            <PureImage url="/icon/LOCATION.svg" style={{width: 15}} />
            <div style={{whiteSpace: 'nowrap'}}>
              {searchStr?.location || 'địa điểm'}
            </div>
          </div>
          <PureImage url="/icon/ARROW.svg" style={{width: 10}} />
          {locationOptions && id && isShowBox && (
            <SelectOptionOverflow
              options={locationOptions}
              onChange={onSelect}
              id={id}
              isFocus={isShowBox}
            />
          )}
        </div>
        <Button
          btnProps={{
            content: (
              <div
                style={{
                  display: 'flex',
                  gap: 10,
                  alignItems: 'center'
                }}
              >
                <PureImage url="/icon/SEARCH-WHITE.svg" style={{width: 20}} />

                <div style={{whiteSpace: 'nowrap', fontWeight: 500}}>
                  Tìm kiếm
                </div>
              </div>
            ),
            onBtn: () => onBtn?.(),
            style: {
              width: '100%',
              maxWidth: 150
            },
            disabled: btnStatus
          }}
        />
      </div>
    </div>
  );
};

interface IOptions {
  id: string;
  title?: string;
  value: string;
  displayIndex?: number;
}

export const SelectOptionOverflow = (props: {
  options: IOptions[];
  onChange?: (item: IOptions) => void;
  id: string;
  isFocus?: boolean;
}) => {
  const {options, onChange, id, isFocus} = props;
  const [onBoxFocus, setOnBoxFocus] = useState(isFocus);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const onSelected = (item: IOptions, idx: number) => {
    setActiveIdx(idx);
    setOnBoxFocus(false);
    onChange?.(item);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const selectBox = document.getElementById(id);
    if (selectBox && !selectBox.contains(event.target as Node)) {
      setOnBoxFocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      id={id}
      className={`tgn-select-box-overflow ${onBoxFocus ? 'tgn-select-box-overflow-active' : ''}`}
    >
      {options?.map((item, idx) => {
        return (
          <div
            key={item?.id}
            onClick={() => onSelected(item, idx)}
            className={`tgn-select-item ${activeIdx === idx ? 'tgn-select-item-active' : ''}`}
          >
            <div className="d-flex align-items-center gap-2">
              <div style={{whiteSpace: 'nowrap'}}>{item.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export {ActionBtn, RecruitmentBanner};
