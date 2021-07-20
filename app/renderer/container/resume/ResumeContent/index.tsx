import React from 'react';
import * as useTemplate from './useTemplate';
import MyScrollBox from '@common/components/MyScrollBox';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 96;
  const height = document.body.clientHeight;

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <useTemplate.TemplateOne />
    </MyScrollBox>
  );
}
export default ResumeContent;