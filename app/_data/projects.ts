import { StaticImageData } from 'next/image';
import slugify from 'slugify';

import miataskImg from '@images/projects/miatask.jpg';
import labaredaImg from '@images/projects/labareda.jpg';
import portfolio_01Img from '@images/projects/portfolio-01.jpg';
import miaplayImg from '@images/projects/miaplay.jpg';
import mialogImg from '@images/projects/mialog.jpg';
import miamood_02Img from '@images/projects/miamood-02.jpg';
import miamood_01Img from '@images/projects/miamood-01.jpg';
import bluedexImg from '@images/projects/bluedex.jpg';
import bluesimsImg from '@images/projects/bluesims.jpg';
import paralifeImg from '@images/projects/paralife.gif';

export type Project = {
  title: string;
  slug: string;
  img: StaticImageData;
  bg_url: string;
  tags: string[];
  links: ProjectLinks;
  blur_data_url?: string;
  isFeatured?: boolean;
  featuredOrder?: number;
};

export type ProjectLinks = {
  live_demo_url: string;
  github_single_url?: string;
  github_front_url?: string;
  github_back_url?: string;
};

export const projects: Project[] = [
  {
    title: 'MiaTask',
    img: miataskImg,
    bg_url: '/images/projects/miatask_bg.jpg',
    tags: ['React', 'Next.js', 'TypeScript'],
    links: {
      live_demo_url: 'https://miatask.camilasalles.dev/',
      github_single_url: 'https://github.com/miaslls/MiaTask#readme',
    },
    isFeatured: true,
  },
  {
    title: 'Labareda',
    img: labaredaImg,
    bg_url: '/images/projects/labareda_bg.jpg',
    tags: ['React', 'NestJS', 'TypeScript'],
    links: {
      live_demo_url: 'https://www.drinksnbbq.com.br/cardapio',
    },
    isFeatured: true,
  },
  {
    title: 'MiaPlay',
    img: miaplayImg,
    bg_url: '/images/projects/miaplay_bg.jpg',
    tags: ['React', 'NestJS', 'TypeScript'],
    links: {
      live_demo_url: 'https://miaplay.camilasalles.dev/',
      github_front_url: 'https://github.com/miaslls/MiaPlay#readme',
      github_back_url: 'https://github.com/miaslls/MiaPlay-server#readme',
    },
    isFeatured: true,
  },
  {
    title: 'MiaLog',
    img: mialogImg,
    bg_url: '/images/projects/mialog.jpg',
    tags: ['HTML', 'CSS'],
    links: {
      live_demo_url: 'https://mialog.camilasalles.dev/',
      github_single_url: 'https://github.com/miaslls/MiaLog#readme',
    },
    isFeatured: true,
  },
  {
    title: 'MiaMood 2.0',
    img: miamood_02Img,
    bg_url: '/images/projects/miamood-02_bg.jpg',
    tags: ['React', 'Node.js', 'Express'],
    links: {
      live_demo_url: 'https://miamood-02.camilasalles.dev/',
      github_front_url: 'https://github.com/miaslls/MiaMood#readme',
      github_back_url: 'https://github.com/miaslls/MiaMood-server#readme',
    },
    isFeatured: true,
    featuredOrder: 1,
  },
  {
    title: 'Portfolio 1.0',
    img: portfolio_01Img,
    bg_url: '/images/projects/portfolio-01_bg.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live_demo_url: 'https://portfolio-01.camilasalles.dev/',
      github_single_url: 'https://github.com/miaslls/PORTFOLIO#readme',
    },
  },
  {
    title: 'MiaMood',
    img: miamood_01Img,
    bg_url: '/images/projects/miamood-01_bg.jpg',
    tags: ['Node.js', 'Express', 'EJS'],
    links: {
      live_demo_url: 'https://miamood-01.camilasalles.dev',
      github_single_url:
        'https://github.com/miaslls/MiaMood-MoodTracker#readme',
    },
    isFeatured: true,
    featuredOrder: 1,
  },
  {
    title: 'BlueDex',
    img: bluedexImg,
    bg_url: '/images/projects/bluedex_bg.png',
    tags: ['Node.js', 'Express', 'EJS'],
    links: {
      live_demo_url: 'https://bluedex.camilasalles.dev/',
      github_single_url: 'https://github.com/miaslls/BLUEdex#readme',
    },
  },
  {
    title: 'BlueSims',
    img: bluesimsImg,
    bg_url: '/images/projects/bluesims_bg.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live_demo_url: 'https://bluesims.camilasalles.dev/',
      github_single_url: 'https://github.com/miaslls/BLUEsims#readme',
    },
  },
  {
    title: 'Paralife',
    img: paralifeImg,
    bg_url: '/images/projects/paralife_bg.png',
    tags: ['Node.js'],
    links: {
      live_demo_url: 'https://replit.com/@miaslls/Paralife-Demo?v=1',
      github_single_url: 'https://github.com/miaslls/Paralife#readme',
    },
    blur_data_url:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUTb+DwACSAFz8vYdngAAAABJRU5ErkJggg==',
  },
].map((project) => ({
  ...project,
  slug: slugify(project.title, { lower: true }),
}));

export const featuredProjects = projects
  .filter((project) => project.isFeatured)
  .sort((a, b) => (a.featuredOrder || 0) - (b.featuredOrder || 0));

export const latestProjects = projects.slice(0, 5);
