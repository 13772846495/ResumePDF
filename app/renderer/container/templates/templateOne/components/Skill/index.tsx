/**
 * @description 技能
 */
import React from 'react';
import './index.less';

function Skill() {
  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        <li styleName="item">熟悉 React，了解并使用 Hooks 特性</li>
        <li styleName="item">了解数据库，会基础的前后端结合开发</li>
        <li styleName="item">了解 Vscode</li>
        <li styleName="item">了解 Webpack 编译原理</li>
      </ul>
    </div>
  );
}

export default Skill;