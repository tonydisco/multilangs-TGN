import React from 'react';

const TableComponent = () => {
  return (
    <table style={{borderCollapse: 'collapse', width: '100%'}}>
      <thead>
        <tr>
          <th className="p-2">STT</th>
          <th className="p-2">Tên vật tư</th>
          <th className="p-2">ĐVT</th>
          <th className="p-2">Độ sụt (cm)</th>
          <th className="p-2">Cường độ chịu nén (Mpa)</th>
          <th className="p-2">Cấp độ bền (B)</th>
          <th className="p-2">Cấp độ bền (C)</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.stt}>
            <td className="p-2">{row.stt}</td>
            <td className="p-2">{row.tenVatTu}</td>
            <td className="p-2">{row.dvt}</td>
            <td className="p-2">{row.doSut}</td>
            <td className="p-2">{row.cuongDo}</td>
            <td className="p-2">{row.capDoBenB}</td>
            <td className="p-2">{row.capDoBenC}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;

const tableData = [
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
