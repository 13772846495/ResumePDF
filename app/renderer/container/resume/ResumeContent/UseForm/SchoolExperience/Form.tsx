import React from 'react';
import './index.less';
import MyInput from '@common/components/MyInput';
import { AdapterExperienceType } from '../WrapperExperience/adapter';

interface IProps {
  isDisable?: boolean;
  currentItem?: AdapterExperienceType;
  onChangeCurrentItem?: (newItem: AdapterExperienceType) => void;
}

function Form({ isDisable, currentItem, onChangeCurrentItem}: IProps) {
  const onChangeValue = (key: string, value: string) => {
    let newItem = { ... currentItem, [key]: value};
    onChangeCurrentItem && onChangeCurrentItem(newItem);
  }
  return (
    <div styleName="wrapper">
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>部门 ：
        </div>
        <div styleName="right">
          <MyInput
            onChange={(e) => onChangeValue('title', e.target.value)}
            value={currentItem?.title}
            placeholder="请输入你所在的部门"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>职位 ：
        </div>
        <div styleName="right">
          <MyInput
            onChange={(e) => onChangeValue('post', e.target.value)}
            value={currentItem?.post}
            placeholder="在部门中担任什么职位"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
          <span styleName="require">*</span>时间 ：
        </div>
        <div styleName="right">
          <MyInput
            onChange={(e) => onChangeValue('beginTime', e.target.value)}
            value={currentItem?.beginTime}
            placeholder="2019.09.01"
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
          <span styleName="line">-</span>
          <MyInput
            onChange={(e) => onChangeValue('endTime', e.target.value)}
            value={currentItem?.endTime}
            placeholder="2019.09.01"
            allowClear={!isDisable}
            style={{ width: 290 }}
            disabled={isDisable}
          />
        </div>
      </div>
      <div styleName="flex">
        <div styleName="left">
        <span styleName="require">*</span>内容 ：
        </div>
        <div styleName="right">
          <MyInput
            onChange={(e) => onChangeValue('content', e.target.value)}
            value={currentItem?.content}
            placeholder="你在任职期间主要工作是什么呢？"
            allowClear={!isDisable}
            disabled={isDisable}
          />
        </div>
      </div>
    </div>
  );
}

export default Form;
