import React from 'react';
import './index.less'
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import { TemplateOne } from '../templates';
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';

function Resume() {
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  return (
      <div styleName="container" style={{backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor}}>
        <div styleName="header">
          <ResumeAction />
        </div>
        <div styleName="content">
          <ResumeContent />
        </div>
        <div styleName="toolbar">
          <ResumeToolbar />
        </div>
      </div>
  );
}

export default Resume;