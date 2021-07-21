/**
 * @description 简单介绍
 * @name 
 */
import React from 'react';
import './index.less';
import { useSelector } from 'react-redux';

function Synopsis() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);
  const evaluationList: string[] = useSelector((state: any) => state.resumeModel.evaluationList);

  return (
    <div styleName="content">
      {base?.username && <p styleName="name">刘泓吉</p>}
      {work.job && <p styleName="job">前端工程师</p>}
      {evaluation && <p styleName="summary">{evaluationList?.join('，')}</p>}
    </div>
  );
}

export default Synopsis;