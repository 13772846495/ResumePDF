/**
 * @description 缺省空组件
 */
import React from 'react';
import './index.less';
export type SizeType = 'small' | 'big';

interface IEmptyProps {
  /**
   * @description 图片路径
   */
  imgSrc: string;
  /**
   * @description 图片尺寸
   */
  size?: SizeType;
  /**
   * @description 提示信息
   */
  label?: string;
  /**
   * @description 图片样式
   */
  style?: React.CSSProperties;
}

function MyEmpty({ imgSrc, size = 'small', label, style }: IEmptyProps) {
  return (
    <div styleName="empty">
      <img src={imgSrc} style={style} styleName={`img-${size}`} />
      { label &&
        <p styleName="label">
          {label}
        </p>}
    </div>
  );
}

export default MyEmpty;
