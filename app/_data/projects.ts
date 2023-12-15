import { StaticImageData } from 'next/image';
import slugify from 'slugify';

import miataskImg from '@images/projects/miatask.jpg';
import labaredaImg from '@images/projects/labareda.png';
import miaplayImg from '@images/projects/miaplay.jpg';
import mialogImg from '@images/projects/mialog.jpg';
import miamood_02Img from '@images/projects/miamood-02.jpg';
import miamood_01Img from '@images/projects/miamood-01.jpg';
import bluedexImg from '@images/projects/bluedex.jpg';
import bluesimsImg from '@images/projects/bluesims.jpg';
import paralifeImg from '@images/projects/paralife.gif';

export type Project = {
  number: number;
  title: string;
  slug: string;
  img: StaticImageData;
  bg_url: string;
  tags: string[];
  links: {
    live_demo_url: string;
    github_single_url?: string;
    github_front_url?: string;
    github_back_url?: string;
  };
  isFeatured?: boolean;
  blur_data_url?: string;
};

export type ProjectLinks = Project['links'];

export const projects: Project[] = [
  // # 10 - PORTFOLIO 2.0

  {
    number: 9,
    title: 'MiaTask',
    img: miataskImg,
    bg_url: '/images/projects/miatask.jpg',
    tags: ['React', 'Next.js', 'TypeScript'],
    links: {
      live_demo_url: 'https://miatask.vercel.app/',
      github_single_url: 'https://github.com/miaslls/MiaTask#readme',
    },
  },
  {
    number: 8,
    title: 'Labareda',
    img: labaredaImg,
    bg_url: '/images/projects/labareda.png',
    tags: ['React', 'NestJS', 'TypeScript'],
    links: {
      live_demo_url: 'https://www.drinksnbbq.com.br/',
    },
  },

  // #7 - PORTFOLIO

  {
    number: 6,
    title: 'MiaPlay',
    img: miaplayImg,
    bg_url: '/images/projects/miaplay.jpg',
    tags: ['React', 'NestJS', 'TypeScript'],
    links: {
      live_demo_url: 'https://miaplay.vercel.app/',
      github_front_url: 'https://github.com/miaslls/MiaPlay#readme',
      github_back_url: 'https://github.com/miaslls/MiaPlay-server#readme',
    },
  },
  {
    number: 5,
    title: 'MiaLog',
    img: mialogImg,
    bg_url: '/images/projects/mialog.jpg',
    tags: ['HTML', 'CSS'],
    links: {
      live_demo_url: 'https://miaslls.github.io/MiaLog/',
      github_single_url: 'https://github.com/miaslls/MiaLog#readme',
    },
  },

  // TODO: continue replacing project media 🔼

  {
    number: 4,
    title: 'MiaMood 2.0',
    img: miamood_02Img,
    bg_url: '/images/projects/miamood-02.jpg',
    tags: ['React', 'Node.js', 'Express'],
    links: {
      live_demo_url: 'https://miamood-02.vercel.app/',
      github_front_url: 'https://github.com/miaslls/MiaMood#readme',
      github_back_url: 'https://github.com/miaslls/MiaMood-server#readme',
    },
    isFeatured: true,
  },
  {
    number: 3,
    title: 'MiaMood',
    img: miamood_01Img,
    bg_url: '/images/projects/miamood-01.jpg',
    tags: ['Node.js', 'Express', 'EJS'],
    links: {
      live_demo_url: 'https://miamood-02.vercel.app/',
      github_single_url:
        'https://github.com/miaslls/MiaMood-MoodTracker#readme',
    },
    isFeatured: true,
  },
  {
    number: 2,
    title: 'BlueDex',
    img: bluedexImg,
    bg_url: '/images/projects/bluedex_bg.png',
    tags: ['Node.js', 'Express', 'EJS'],
    links: {
      live_demo_url: 'https://bluedex.fly.dev/',
      github_single_url: 'https://github.com/miaslls/BLUEdex#readme',
    },
    isFeatured: true,
  },
  {
    number: 1,
    title: 'BlueSims',
    img: bluesimsImg,
    bg_url: '/images/projects/bluesims_bg.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live_demo_url: 'https://miaslls.github.io/BLUEsims/',
      github_single_url: 'https://github.com/miaslls/BLUEsims#readme',
    },
    isFeatured: true,
  },
  {
    number: 0,
    title: 'Paralife',
    img: paralifeImg,
    bg_url: '/images/projects/paralife_bg.png',
    tags: ['Node.js'],
    links: {
      live_demo_url: 'https://replit.com/@miaslls/Paralife-Demo?v=1',
      github_single_url: 'https://github.com/miaslls/Paralife#readme',
    },
    isFeatured: true,
    blur_data_url:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUTb+DwACSAFz8vYdngAAAABJRU5ErkJggg==',
  },
].map((project) => ({
  ...project,
  slug: slugify(project.title, { lower: true }),
}));

export const featuredProjects = projects.filter(
  (project) => project.isFeatured
);
