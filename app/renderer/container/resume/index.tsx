import React from 'react';
import './index.less'
import fileAction from '@common/utils/file';

function Resume() {
  fileAction.read('./index.tsx', 'utf8').then((data) => {
    alert(data);
  });

  return (
    <div styleName="container">
      这是简历模块
    </div>
  );
}

export default Resume;