import React from 'react';
import './index.less'
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import { TemplateOne } from '../templates';

function Resume() {
  getAppPath().then((rootPath: string) => {
    // console.log("应用程序的目录路径为: ", rootPath);
    // console.log("文件读取，内容数据为:");
    fileAction
    .read(`${rootPath}app/renderer/container/resume/index.tsx`, 'utf-8')
    .then((data) => {
      // console.log(data);
    });
  });

  return (
      <TemplateOne />
  );
}

export default Resume;