/**
 * @desc 判断是否属于外部连接
 * @param {string} url - 链接
 */

export function isHttpOrHttps(url: string): boolean {
  const RegRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return RegRule.test(url.toLocaleLowerCase());
}