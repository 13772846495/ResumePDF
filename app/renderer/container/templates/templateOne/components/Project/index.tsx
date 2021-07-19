/**
 * @description 项目经历
 */
import React from 'react';
import './index.less';

function Project() {
  return (
    <div styleName="content">
      <p styleName="label">项目经历 Project</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>
              <span>2021.07 - 2021.08</span>
            </p>
          </div>
          <div styleName="right">
            <p>
              <span>学习制作 visResumeMook 可视化简历平台 - 前端工程师</span>
            </p>
          </div>
          <div styleName="text">
            <ul styleName="item-box">
              <li styleName="item-content">
                <span>通过学习 Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版</span>
              </li>
              <li styleName="item-content">
                <span>支持导出 PDF 简历文档</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Project;