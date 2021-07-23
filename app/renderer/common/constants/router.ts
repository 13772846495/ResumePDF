/**
 * @description 路径页面信息维护
 */
const ROUTER = {
  root: '/',
  resume: '/resume'
};

export default ROUTER;

export const ROUTER_KEY = {
  root: 'root',
  resume: 'resume'
};

export const ROUTER_ENTRY: TSRouter.Item[] = [
  {
    url: 'https://www.baidu.com/',
    key: 'intro',
    text: '介绍'
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历'
  },
  {
    url: 'https://www.baidu.com/',
    key: 'code',
    text: '源码'
  },
];
