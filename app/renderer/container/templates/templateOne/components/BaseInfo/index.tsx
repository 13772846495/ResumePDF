/**
 * @description 基本信息
 */
import React from 'react';
import '../../../styles/template-one.less';

function BaseInfo() {
  return (
    <div styleName="container">
      <p styleName="title">基本信息 Basic</p>
      <ul styleName="content">
        <li>院校：西安邮电大学</li>
        <li>专业：计算机科学与技术</li>
        <li>学历：本科</li>
        <li>学年：2019.09 - 2023.07</li>
        <li>籍贯：陕西 · 汉中</li>
      </ul>
    </div>
  );
}

export default BaseInfo;