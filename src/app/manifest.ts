import {MetadataRoute} from 'next';
import {getTranslations} from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations();

  return {
    name: t('ManifestName'),
    start_url: '/',
    theme_color: '#101E33'
  };
}
