import React from 'react';

const TableComponent = (props: {
  tableHeader: {
    title: string;
    width: string;
    key: string;
  }[];
  tableData: {
    [key: string]: any;
  }[];
}) => {
  const {tableHeader, tableData} = props;
  return (
    <table style={{borderCollapse: 'collapse', width: '100%'}}>
      <thead>
        <tr>
          {tableHeader.map((item, index) => (
            <th className="p-2" key={index}>
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item: any, index) => (
          <tr key={index}>
            {tableHeader.map((header, headerIndex) => (
              <td key={headerIndex} className="p-2">
                {item[header.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableHeader_2 = [
  {
    title: 'Bê tông',
    width: '35%',
    key: 'betong'
  },
  {
    title: 'Xi măng PCB40, cường độ 80MPa',
    width: '65%',
    key: 'xiMang'
  }
];
const tableHeader_1 = [
  {
    title: 'STT',
    width: '5%',
    key: 'stt'
  },
  {
    title: 'Tên vật tư',
    width: '25%',
    key: 'tenVatTu'
  },
  {
    title: 'ĐVT',
    width: '10%',
    key: 'dvt'
  },
  {
    title: 'Độ sụt (cm)',
    width: '10%',
    key: 'doSut'
  },
  {
    title: 'Cường độ chịu nén (Mpa)',
    width: '15%',
    key: 'cuongDo'
  },
  {
    title: 'Cấp độ bền (B)',
    width: '15%',
    key: 'capDoBenB'
  },
  {
    title: 'Cấp độ bền (C)',
    width: '15%',
    key: 'capDoBenC'
  }
];

const tableData_2 = [
  {
    betong: 'Thép dự ứng lực',
    xiMang: 'TCVN 6284-3:1997 (ISO 6394/3:1991)'
  },
  {
    betong: 'Thép đai',
    xiMang: 'TCVN 6288:1997 (ISO 10544:1992)'
  },
  {
    betong: 'Thép tấm',
    xiMang: 'XCT34 SS400 hoặc JIS 3101:2000'
  }
];
const tableData_1 = [
  {
    stt: 1,
    tenVatTu: 'Bê tông xi măng M100',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 9.63,
    capDoBenB: 'B7.5',
    capDoBenC: 'C8/10'
  },
  {
    stt: 2,
    tenVatTu: 'Bê tông xi măng M150',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 16.05,
    capDoBenB: 'B12.5',
    capDoBenC: 'C12/15'
  },
  {
    stt: 3,
    tenVatTu: 'Bê tông xi măng M200',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 19.27,
    capDoBenB: 'B15',
    capDoBenC: 'C16/20'
  },
  {
    stt: 4,
    tenVatTu: 'Bê tông xi măng M250',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 25.69,
    capDoBenB: 'B20',
    capDoBenC: 'C20/25'
  },
  {
    stt: 5,
    tenVatTu: 'Bê tông xi măng M300',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 28.9,
    capDoBenB: 'B22.5',
    capDoBenC: 'C25/30'
  },
  {
    stt: 6,
    tenVatTu: 'Bê tông xi măng M350',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 35.52,
    capDoBenB: 'B27.5',
    capDoBenC: 'C30/37'
  },
  {
    stt: 7,
    tenVatTu: 'Bê tông xi măng M400',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 38.53,
    capDoBenB: 'B30',
    capDoBenC: 'C35/45'
  },
  {
    stt: 8,
    tenVatTu: 'Bê tông xi măng M450',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 44.95,
    capDoBenB: 'B35',
    capDoBenC: 'C40/50'
  },
  {
    stt: 9,
    tenVatTu: 'Bê tông xi măng M500',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 51.37,
    capDoBenB: 'B40',
    capDoBenC: 'C45/55'
  },
  {
    stt: 10,
    tenVatTu: 'Bê tông xi măng M600',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 57.8,
    capDoBenB: 'B45',
    capDoBenC: 'C50/60'
  },
  {
    stt: 11,
    tenVatTu: 'Bê tông xi măng M700',
    dvt: 'm³',
    doSut: '10∓2',
    cuongDo: 70.64,
    capDoBenB: 'B55',
    capDoBenC: 'C55/67'
  },
  {
    stt: 12,
    tenVatTu: 'Bê tông xi măng M600',
    dvt: 'm³',
    doSut: 'xòe',
    cuongDo: '60∓10',
    capDoBenB: '',
    capDoBenC: ''
  },
  {
    stt: 13,
    tenVatTu: 'Bê tông xi măng M600',
    dvt: 'm³',
    doSut: 'xòe',
    cuongDo: '60∓10',
    capDoBenB: '',
    capDoBenC: ''
  }
];

export {TableComponent, tableHeader_1, tableData_1, tableHeader_2, tableData_2};
