/**
 * @desc 工作经历
 */
import './index.less';
import React from 'react';

function Work() {
  return (
    <div styleName="content">
      <p styleName="label">工作经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2019.09-至今</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>移动应用开发实验室</p>
            <p>没啥成就，爱好摸鱼，人称摸鱼小达人 ~ </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Work;