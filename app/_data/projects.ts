import { StaticImageData } from 'next/image';
import slugify from 'slugify';

import miataskImg from '@images/projects/miatask.jpg';
import labaredaImg from '@images/projects/labareda.png';
import miaplayImg from '@images/projects/miaplay.jpg';
import mialogImg from '@images/projects/mialog.jpg';
import miamoodImg from '@images/projects/miamood.jpg';
import miamood_mtImg from '@images/projects/miamood-mt.png';
import bluedexImg from '@images/projects/bluedex.gif';
import bluesimsImg from '@images/projects/bluesims.jpg';
import paralifeImg from '@images/projects/paralife.gif';

export type Project = {
  title: string;
  slug: string;
  img: StaticImageData;
  bg_img: StaticImageData;
  tags: string[];
  links: {
    live_demo_url: string;
    github_single_url?: string;
    github_front_url?: string;
    github_back_url?: string;
  };
  isFeatured?: boolean;
};

export type ProjectLinks = Project['links'];

export const projects: Project[] = [
  {
    title: 'MiaTask',
    img: miataskImg,
    bg_img: miataskImg,
    tags: ['React', 'Next.js', 'TypeScript'],
    links: {
      live_demo_url: 'https://miatask.vercel.app/',
      github_single_url: 'https://github.com/miaslls/MiaTask#readme',
    },
  },
  {
    title: 'Labareda drinks & BBQ',
    img: labaredaImg,
    bg_img: labaredaImg,
    tags: ['React', 'NestJS', 'TypeScript'],
    links: {
      live_demo_url: 'https://www.drinksnbbq.com.br/',
    },
    isFeatured: true,
  },
  {
    title: 'MiaPlay',
    img: miaplayImg,
    bg_img: miaplayImg,
    tags: ['React', 'NestJS', 'TypeScript'],
    links: {
      live_demo_url: 'https://miaplay.vercel.app/',
      github_front_url: 'https://github.com/miaslls/MiaPlay#readme',
      github_back_url: 'https://github.com/miaslls/MiaPlay-server#readme',
    },
  },
  {
    title: 'MiaLog',
    img: mialogImg,
    bg_img: mialogImg,
    tags: ['HTML', 'CSS'],
    links: {
      live_demo_url: 'https://miaslls.github.io/MiaLog/',
      github_single_url: 'https://github.com/miaslls/MiaLog#readme',
    },
    isFeatured: true,
  },
  {
    title: 'MiaMood 2.0',
    img: miamoodImg,
    bg_img: miamoodImg,
    tags: ['React', 'Node.js', 'Express'],
    links: {
      live_demo_url: 'https://miamood-02.vercel.app/',
      github_front_url: 'https://github.com/miaslls/MiaMood#readme',
      github_back_url: 'https://github.com/miaslls/MiaMood-server#readme',
    },
    isFeatured: true,
  },
  {
    title: 'MiaMood - Mood Tracker',
    img: miamood_mtImg,
    bg_img: miamood_mtImg,
    tags: ['Node.js', 'Express', 'EJS'],
    links: {
      live_demo_url: 'https://miamood-02.vercel.app/',
      github_single_url:
        'https://github.com/miaslls/MiaMood-MoodTracker#readme',
    },
  },
  {
    title: 'BlueDex',
    img: bluedexImg,
    bg_img: bluedexImg,
    tags: ['Node.js', 'Express', 'EJS'],
    links: {
      live_demo_url: 'https://bluedex.fly.dev/',
      github_single_url: 'https://github.com/miaslls/BLUEdex#readme',
    },
  },
  {
    title: 'BlueSims',
    img: bluesimsImg,
    bg_img: bluesimsImg,
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      live_demo_url: 'https://miaslls.github.io/BLUEsims/',
      github_single_url: 'https://github.com/miaslls/BLUEsims#readme',
    },
  },
  {
    title: 'Paralife',
    img: paralifeImg,
    bg_img: paralifeImg,
    tags: ['Node.js'],
    links: {
      live_demo_url: 'https://replit.com/@miaslls/Paralife-Demo?v=1',
      github_single_url: 'https://github.com/miaslls/Paralife#readme',
    },
  },
].map((project) => ({
  ...project,
  slug: slugify(project.title, { lower: true }),
}));

export const featuredProjects = projects.filter(
  (project) => project.isFeatured
);
