import MyButton from '@common/components/MyButton';
import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { compilePath } from '@common/utils/router';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';

function Footer() {
  const history = useHistory();
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);

  const onMadeResume = () => {
    history.push(compilePath(ROUTER.resume, {
      fromPath: ROUTER_KEY.templateList,
      templateId: selectTemplate?.templateId,
      templateIndex: selectTemplate?.templateIndex,
    }));
  };

  return (
    <div styleName="footer">
      <MyButton size="middle" className="use-btn" onClick={onMadeResume}>
        以此模板前往制作简历
      </MyButton>
    </div>
  );
}

export default Footer;
