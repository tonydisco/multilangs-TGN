import React from 'react';
import FieldOfBusiness from './FieldOfBusiness';
import FieldOfProduction from './FieldOfProduction';
import FieldOfExtraction from './FieldOfExtraction';

const FieldOfConstruction = () => {
  return (
    <>
      <FieldOfProduction />
      <FieldOfBusiness />
      <FieldOfExtraction />
    </>
  );
};

export default FieldOfConstruction;
