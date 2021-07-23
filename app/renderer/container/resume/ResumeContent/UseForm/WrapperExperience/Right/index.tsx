import React from 'react';
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox';

interface IProps {
  children: React.ReactNode
}

function Right({ children }: IProps) {
  const getChild = () => {
    const menuElement = (children as any)[0];
    const formElement = (children as any)[1][0];
    return [
      React.cloneElement(menuElement, {
        ...(children as any)[0],
        key: 'menuElement',
      }),
      React.cloneElement(formElement, {
        ...(children as any)[1][0],
        key: 'formElement',
      }),
    ];
  }
  return (
    <>
      <div className="header">{getChild()[0]}</div>
      <div className="content">
        <MyScrollBox maxHeight={360}>{getChild()[1]}</MyScrollBox>
      </div>
    </>
  );
}

export default Right;