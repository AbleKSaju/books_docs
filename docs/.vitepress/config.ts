import { defineConfig } from 'vitepress';
import sidebar from './sidebar';

const tagline = 'Free, Modern Desktop Accounting';

export default defineConfig({
  lang: 'en-US',
  title: ' ',
  description: tagline,
  titleTemplate: tagline,

  themeConfig: {
    logo: '/logo.svg',
    nav: nav(),

    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/frappe/books' },
      {
        icon: 'youtube',
        link: 'https://www.youtube.com/channel/UCbaNaml6jBSIACQwc9Nz_0g',
      },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Frappe Technologies Pvt. Ltd.',
    },
  },
});

function nav() {
  return [
    {
      text: 'Releases',
      link: 'https://github.com/frappe/books/releases',
    },
  ];
}
