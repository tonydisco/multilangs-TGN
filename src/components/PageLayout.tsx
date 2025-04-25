import {ReactNode} from 'react';
import {HeroView} from './Hero';

type Props = {
  children?: ReactNode;
  title?: ReactNode;
  className?: string;
};

export default function PageLayout({
  children,
  title,
  className
}: Readonly<Props>) {
  return (
    <div className={`wrapper-overflow ${className ?? ''}`}>
      <HeroView title={title} />
      {children}
    </div>
  );
}
