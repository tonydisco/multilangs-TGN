'use client';
import React from 'react';
import FieldOfBusiness from './FieldOfBusiness';
import FieldOfProduction from './FieldOfProduction';
import FieldOfExtraction from './FieldOfExtraction';
import {useAppContext} from '@/Providers';

const FieldOfConstruction = () => {
  const {locale} = useAppContext();
  console.log('====================================');
  console.log({locale});
  console.log('====================================');

  return (
    <>
      <FieldOfProduction />
      <FieldOfBusiness />
      <FieldOfExtraction />
    </>
  );
};

export default FieldOfConstruction;
