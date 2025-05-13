import {ReactNode} from 'react';
import {HeroView} from './Hero';

type Props = {
  children?: ReactNode;
  title?: ReactNode;
  css?: string;
  className?: string;
};

export default function PageLayout({
  children,
  title,
  className,
  css
}: Readonly<Props>) {
  return (
    <div
      className={`wrapper-overflow wrapper-for-lastchild ${className ?? ''}`}
    >
      {css?.length && <style>{css}</style>}
      <HeroView title={title} />
      {children}
    </div>
  );
}
