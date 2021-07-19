/**
 * @description 简单介绍
 */
import React from 'react';
import './index.less';

function Synopsis() {
  return (
    <div styleName="content">
      <p styleName="name">刘泓吉</p>
      <p styleName="job">前端工程师</p>
      <p styleName="summary">
        {[
          '目前是西安邮电大学在校二年级学生',
          '有幸加入到移动应用开发实验室进行前端方面的学习',
          '了解一定程度的html、css、javascript、koa + MongoDB、React的操作',
        ].join('，')}
      </p>
    </div>
  );
}

export default Synopsis;