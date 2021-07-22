export interface IRecommendSkill {
  uid: string;
  label: string;
  styles: {
    bg: string;
    font: string;
  };
}

const colors = [
  {
    // 绿色
    bg: '#f0f8ec',
    font: '#78c74f',
  },
  {
    // 灰色
    bg: '#f4f4f4',
    font: '#a3a7ab',
  },
  {
    // 橙色
    bg: '#fdf6ec',
    font: '#f0c588',
  },
  {
    // 蓝色
    bg: '#ecf5ff',
    font: '#67afff',
  },
  {
    // 红色
    bg: '#fef0ef',
    font: '#f88c8b',
  },
];

function getRandomNumber() {
  return Math.floor((Math.random() * 5));
}

import { createUID } from '../utils';

const RecommendSkill: IRecommendSkill[] = [
  {
    uid: createUID(),
    label: 'Vue.js',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '数据双向绑定原理',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'React.js',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'VScode',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Angular.js',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Webpack',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'React Hooks',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '开源',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '了解 MYSQL',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '微信小程序',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Taro',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '微信公众号开发',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Babel',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'TypeScript',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Electron',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Server',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'ESLint',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '跨域解决',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '自动化测试',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Linux',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Git',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '设计模式',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Redis',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '数据库优化',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '正则表达式',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '具备良好的网络基础知识',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: '数据存储',
    styles: colors[getRandomNumber()],
  },
  {
    uid: createUID(),
    label: 'Echarts',
    styles: colors[getRandomNumber()],
  },
];

export default RecommendSkill;
