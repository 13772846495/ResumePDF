import React from 'react';
import './index.less';
import { useHistory, useParams } from 'react-router';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import MyButton from '@common/components/MyButton';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useSelector } from 'react-redux';
import { compilePath } from '@common/utils/router';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';

function ResumeAction() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const routerParams = useParams<{ fromPath: string, templateId: string, templateIndex: string }>();
  const history = useHistory();
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  // 返回首页
  const onBack = () => {
    if(routerParams.fromPath === ROUTER_KEY.root) {
      history.push(compilePath(ROUTER.root));
    } else if(routerParams.fromPath === ROUTER_KEY.templateList) {
      history.push(compilePath(ROUTER.templateList));
    } else {
      console.log("just here");
    }
  }
  // 导出PDF
  const onExport = () => {
    toPrintPdf(`${base?.username}_${base?.school}_${work?.job}`);
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <MyButton className="export-btn" onClick={onExport} style={{backgroundColor: currentTheme?.backgroundColor}}>
        导出PDF
      </MyButton>
    </div>
  );
}
export default ResumeAction;