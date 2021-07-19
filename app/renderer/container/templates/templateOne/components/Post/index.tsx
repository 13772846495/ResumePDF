/**
 * @desc 在校经历
 */
import './index.less';
import React from 'react';

function Post() {
  return (
    <div styleName="content">
      <p styleName="label">在校经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2019.09-2021.07</p>
            <p>摸鱼部会长</p>
          </div>
          <div styleName="right">
            <p>309小社会</p>
            <p>
              计划、组织、协调全宿舍学生组织的集体摸鱼项目，团结同学，互帮互助，共同摸鱼！
            </p>
          </div>
        </li>
        <li styleName="flex">
          <div styleName="left">
            <p>2019.09-2021.07</p>
            <p>摸鱼宗师</p>
          </div>
          <div styleName="right">
            <p>西安邮电大学移动应用开发实验室</p>
            <p>
              成为一名资深摸鱼专业户
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Post;