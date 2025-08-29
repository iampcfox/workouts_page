interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: '强风轨迹',
  siteUrl: '/',
  logo: 'https://store.xmgeek.top/d/Qiniu-GD/%E4%B8%AA%E4%BA%BA%E8%B5%84%E6%96%99/%E5%B8%B8%E7%94%A8%E5%9B%BE%E7%89%87%E5%92%8C%E5%A3%81%E7%BA%B8/%E5%A4%B4%E5%83%8F%E5%92%8C%E8%A1%A8%E6%83%85/%E5%A4%B4%E5%83%8F%202.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://me.xmgeek.top',
    },
    {
      name: 'About',
      url: 'https://github.com/ben-29/workouts_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
