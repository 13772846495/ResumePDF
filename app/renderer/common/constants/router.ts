/**
 * @description 路径页面信息维护
 */
const ROUTER = {
  root: '/',
  resume: '/resume',
  templateList: '/templateList',
};

export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume',
  templateList: '/templateList',
};

export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://www.baidu.com/',
    key: 'intro',
    text: '介绍',
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历',
  },
  {
    url: ROUTER.templateList,
    key: ROUTER_KEY.templateList,
    text: '模板',
  },
  {
    url: 'https://github.com/13772846495/ResumePDF',
    key: 'code',
    text: '源码',
  },
];
