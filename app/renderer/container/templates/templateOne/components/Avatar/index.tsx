/**
 * @description 头像
 */
import React from 'react';
import './index.less';
import AvatarImage from '@assets/pic.jpg'

function Avatar() {
  return (
    <div styleName="box">
      <div styleName="avatar">
        <img src={AvatarImage} />
      </div>
    </div>
  );
}

export default Avatar;