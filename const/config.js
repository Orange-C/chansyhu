export const NAV_CONFIG = [
  {
    path: '/',
    label: 'home',
  },
  {
    path: '/portfolio',
    label: 'portfolio',
    children: [
      {
        path: '/wedding',
        label: 'wedding',
      },
      {
        path: '/elopement',
        label: 'elopement',
      },
      {
        path: '/engagement',
        label: 'engagement',
      },
    ],
  },
  // {
  //   path: '/documentary',
  //   label: 'documentary',
  // },
  {
    path: '/contact',
    label: 'contact',
  },
];

export const CATEGORY = [
  {
    name: 'wedding',
    imgSrc: '/index-carousel-1.jpg',
  },
  {
    name: 'elopement',
    imgSrc: '/index-carousel-2.jpg',
  },
  {
    name: 'engagement',
    imgSrc: '/index-carousel-3.jpg',
  },
];

export const WEDDING_PROJECT = [
  {
    name: 'wedding example 1',
    path: 'wedding-example-2',
    imgSrc: '/index-carousel-2.jpg',
  },
  {
    name: 'wedding example 2',
    path: 'wedding-example-2',
    imgSrc: '/index-carousel-2.jpg',
  },
  {
    name: 'wedding example 3',
    path: 'wedding-example-3',
    imgSrc: '/index-carousel-3.jpg',
  },
];
