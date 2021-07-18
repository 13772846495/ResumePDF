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
    url: 'https://juejin.cn/book/6950646725295996940/section/6962938228357726241',
    key: 'intro',
    text: '介绍'
  },
  {
    url: ROUTER.resume,
    key: ROUTER_KEY.resume,
    text: '简历'
  },
  {
    url: 'https://juejin.cn/book/6950646725295996940/section/6962938228357726241',
    key: 'code',
    text: '源码'
  },
];
