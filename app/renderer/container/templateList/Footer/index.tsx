import MyButton from '@common/components/MyButton';
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { compilePath } from '@common/utils/router';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';

function Footer() {
  const history = useHistory();
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();

  const onMadeResume = () => {
    history.push(
      compilePath(ROUTER.resume, {
        fromPath: ROUTER_KEY.templateList,
        templateId: selectTemplate?.templateId,
        templateIndex: selectTemplate?.templateIndex,
      })
    );
  };

  return (
    <div styleName="footer">
      <MyButton
        size="middle"
        className="use-btn"
        onClick={onMadeResume}
        style={
          {
            backgroundColor: currentTheme?.backgroundColor,
            color: currentTheme?.fontColor
          }
        }
      >
        以此模板前往制作简历
      </MyButton>
    </div>
  );
}

export default Footer;
