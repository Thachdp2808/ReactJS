export enum TabType {
  Home = 1,
  Clothes = 2,
  Shoes = 3,
  Accessories = 4,
  Account = 5,
  Cart = 6,
  Favorite = 7,
}
export enum SubTab {
  Information = 1,
  AddressBook = 2,
  Orders = 3,
  Favorite = 4,
}

export const itemsPerPage = 4;
export const passions = [
  {
    img: '/passion1.png',
    title: 'Front-End Developer',
    skills: '(Sass, Bootstrap, Tailwind)',
  },
  {
    img: '/passion2.png',
    title: 'Back-End Developer',
    skills: '(NodeJS, Laravel, Codeigniter)',
  },
  {
    img: '/passion3.png',
    title: 'UI/UX Designer',
    skills: '(Figma, Zeplin, Adobe XD)',
  },
];

export const portfolio = [
  {
    img: '/portfolio1.png',
    alt: 'Portfolio 1',
  },
  {
    img: '/portfolio2.png',
    alt: 'Portfolio 2',
  },
  {
    img: '/portfolio3.png',
    alt: 'Portfolio 3',
  },
];

export const contactMe = [
  {
    img: '/github.png',
    alt: 'Portfolio 1',
    title: 'Github',
  },
  {
    img: '/instagram.png',
    alt: 'Portfolio 2',
    title: 'Instagram',
  },
  {
    img: '/email.png',
    alt: 'Portfolio 3',
    title: 'Email',
  },
  {
    img: '/call.png',
    alt: 'Portfolio 3',
    title: 'Telp',
  },
];
