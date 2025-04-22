import {useTranslations} from 'next-intl';

export function useMenu() {
  const t = useTranslations();

  const menus = [
    {name: t('HeaderNavHome'), path: '/'},
    {name: t('HeaderNavAboutUs'), path: '/gioi-thieu'},
    {name: t('HeaderNavBusinessAreas'), path: '/linh-vuc-hoat-dong'},
    {name: t('HeaderNavProductionCapacity'), path: '/nang-luc-san-xuat'},
    {name: t('HeaderNavProducts'), path: '/san-pham'},
    {name: t('HeaderNavProjects'), path: '/du-an'},
    {name: t('HeaderNavNews'), path: '/tin-tuc'},
    {name: t('HeaderNavContactRecruitment'), path: '/lien-he-tuyen-dung'}
  ];

  return {menus};
}
