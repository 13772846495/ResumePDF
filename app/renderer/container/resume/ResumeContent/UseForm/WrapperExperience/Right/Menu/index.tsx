import React from 'react';
import './index.less';
import { AdapterExperienceType } from '../../adapter';

export interface IProps {
  /**
   * @description 是否在编辑
   */
  isEdit: boolean;
  /**
   * @description 当前的条目
   */
  currentItem: AdapterExperienceType;
  /**
   * @description 点击取消
   */
  onCancelEditValue: () => void;
  /**
   * @description 点击保存
   */
  onSaveEditValue: () => void;
  /**
   * @description 点击编辑
   */
  onChangeEditStatus: () => void;
}

function Menu({ isEdit, currentItem, onCancelEditValue, onSaveEditValue, onChangeEditStatus}: IProps) {
  return (
    <div styleName="menu">
      <div styleName="left">
        <div styleName="title">{currentItem?.title}</div>
      </div>
      <div styleName="right">
        {isEdit && (
          <>
            <div styleName="btn cancel" onClick={onCancelEditValue}>
              取消
            </div>
            <div styleName="btn save" onClick={onSaveEditValue}>
              保存
            </div>
          </>
        )}
        {!isEdit && (
          <div styleName="btn cancel" onClick={onChangeEditStatus}>
            编辑
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;