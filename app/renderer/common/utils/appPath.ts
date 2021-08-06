import { ipcRenderer } from 'electron';

export function getAppPath() {
  /**
   * @description 获取项目绝对路径
   * @returns {Promise<string>}
   */
  return new Promise(
    (resolve: (value: string) => void, reject: (value: Error) => void) => {
      ipcRenderer.send('get-root-path', '123');
      ipcRenderer.on('reply-root-path', (event, arg: string) => {
        if(arg) {
          resolve(arg);
        } else {
          reject(new Error('项目路径错误！'));
        }
      });
    }
  );
}