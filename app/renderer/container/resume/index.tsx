import React from 'react';
import './index.less'
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import { TemplateOne } from '../templates';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';

function Resume() {
  return (
      <div styleName="container">
        {/* <div styleName="header">
          <ResumeAction />
        </div>
        <div styleName="content">
          <ResumeContent />
        </div> */}
        <TemplateOne />
        <div styleName="toolbar">
          <ResumeToolbar />
        </div>
      </div>
  );
}

export default Resume;