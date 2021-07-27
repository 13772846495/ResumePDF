import MyScrollBox from '@common/components/MyScrollBox';
import React from 'react';
import './index.less';
import UseIcon from '@assets/icon/use.png'
import MyButton from '@common/components/MyButton';
import { useDispatch, useSelector } from 'react-redux';

function Navigation() {
  const dispatch = useDispatch();
  const HEADER_HEIGHT = 92;
  const height = document.body.clientHeight;

  const templateList: TSTemplate.Item[] = useSelector((state: any) => state.templateModel.templateList);
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);

  const onChangeTemplate = (template: TSTemplate.Item) => {
    dispatch({
      type: 'templateModel/setStore',
      payload: {
        key: 'selectTemplate',
        values: template,
      }
    })
  }

  return (
    <div styleName="navigation">
      <MyScrollBox maxHeight={height - HEADER_HEIGHT}>
        { templateList &&
          templateList.length > 0 &&
          templateList.map((template: TSTemplate.Item) => {
            return (
              <div styleName="template" key={template?.templateId}>
                <img src={template?.templateCover} styleName="cover"/>
                <div styleName="mask">
                  { selectTemplate?.templateId === template?.templateId && (
                    <img src={UseIcon} styleName="use"/>
                  )}
                  { selectTemplate?.templateId !== template?.templateId && (
                    <MyButton size="middle" className="view-btn" onClick={() => {onChangeTemplate(template)}}>
                      预览模板
                    </MyButton>
                  )}
                </div>
              </div>
            );
          })
        }
      </MyScrollBox>
    </div>
  );
}

export default Navigation;
