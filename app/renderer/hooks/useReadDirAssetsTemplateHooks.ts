import { createUID } from '@common/utils';
import { getAppPath } from '@common/utils/appPath';
import fileAction from '@common/utils/file';
import { useDispatch } from 'react-redux';

export default function () {
  const dispatch = useDispatch();
  return () => {
    // 1. 先获取应用地址
    getAppPath().then((appPath: string) => {
      // 2. 从assets读取模版图片信息，构造模版列表
      fileAction
      .readDir(`${appPath}assets/template`)
      .then(async (files: string[]) => {
        // 3. 构造模版列表
        if(files.length > 0) {
          let templateList: TSTemplate.Item[] = [];
          for (let index = 0; index < files.length; index++) {
            const base64URL = await fileAction.read(`${appPath}assets/template/${files[index]}`, 'base64');
            templateList.push({
              templateName: files[index],
              templateIndex: index,
              templateId: createUID(),
              templateCover: `data:image/png;base64,${base64URL}`,
            });
          }
          // 4. 存入到 redux 中，并默认选中第一条
          dispatch({
            type: 'templateModel/setStoreList',
            payload: [
              {
                key: 'templateList',
                values: templateList,
              }, {
                key: 'selectTemplate',
                values: templateList[0],
              },
            ],
          });
        }
      })
      .catch((err: NodeJS.ErrnoException) => {
        throw new Error(err.message);
      });
    });
  };
}