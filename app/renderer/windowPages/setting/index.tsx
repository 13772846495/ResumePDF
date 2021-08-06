
import { getAppPath } from '@common/utils/appPath';
import fileAction from '@common/utils/file';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';
import { ipcRenderer } from 'electron';
import React, { useEffect, useState } from 'react';
import './index.less';


function Setting() {
  const [resumeSavePath, setResumeSavePath] = useState('');
  const readGlobalConfigFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  useEffect(() => {
    readGlobalConfigFile().then((value: { [key: string]: any} ) => {
      if(value?.resumeSavePath) {
        setResumeSavePath(value?.resumeSavePath);
      } else {
        getAppPath().then((appPath: string) => {
          fileAction
            .hasFile(`${appPath}resumeCache`)
            .catch(() => {
              fileAction.mkdirDir(`${appPath}resumeCache`);
            })
          setResumeSavePath(`${appPath}resumeCache`);
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
        })
      }
    })
  }, [])

  const onChangePath = () => {
    ipcRenderer.send('open-save-resume-path', '');
    ipcRenderer.on('reply-save-resume-path', (event, arg: string[]) => {
      if(arg) {
        if(arg.length > 0) {
          setResumeSavePath(arg[0]);
          updateGlobalConfigFile('resumeSavePath', arg[0]);
        }
      } else {
        console.log("自定义存储路径失败！");
      }
    })
  }

  return (
  <div styleName="container">
    <p styleName="label">修改简历数据储存路径</p>
    <div styleName="input">
  <div styleName="value">{resumeSavePath || '当前存储路径为'}</div>
      <div styleName="update-btn" onClick={onChangePath}>更改路径</div>
    </div>
  </div>);
}

export default Setting;