import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROOT from '@common/constants/router';
import MyButton from '@common/components/MyButton';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useSelector } from 'react-redux';

function ResumeAction() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  const history = useHistory();
  // 返回首页
  const onBack = () => history.push(ROOT.root);
  // 导出PDF
  const onExport = () => {
    toPrintPdf(`${base?.username}_${base?.school}_${work?.job}`);
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <MyButton className="export-btn" onClick={onExport}>
        导出PDF
      </MyButton>
    </div>
  );
}
export default ResumeAction;