import {getLocalizedPath} from '@/i18n/getLocalizePath';
import Link from 'next/link';
import React from 'react';

type LinkByLocaleProps = React.ComponentProps<typeof Link> & {
  locale: string;
  href: string | {pathname: string; query?: any} | URL;
  children?: React.ReactNode;
  className?: string;
};

const LocaleLink: React.FC<LinkByLocaleProps> = ({locale, href, ...props}) => {
  const hrefString = typeof href === 'string' ? href : (href?.pathname ?? '');

  return (
    <Link href={getLocalizedPath(hrefString, locale)} {...props}>
      {props.children}
    </Link>
  );
};

export default LocaleLink;
