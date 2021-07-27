import { compile } from 'path-to-regexp';
/**
 * @description 快速填充 url 字符串的参数值
 * @param {string} route - 接口路径
 * @param {object} params - 参数
 * @returns {string}
 */

export function compilePath(route: string, params?: { [key: string]: any }) {
  const toPath = compile(route, { encode: encodeURIComponent });
  return toPath(params);
}

/**
 * @description 判断是否属于外部连接
 * @param {string} url - 链接
 * @returns {boolean}
 */
export function isHttpOrHttps(url: string): boolean {
  const RegRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return RegRule.test(url.toLocaleLowerCase());
}