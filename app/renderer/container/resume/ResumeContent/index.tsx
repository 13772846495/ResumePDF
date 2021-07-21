import React, { useEffect, useState } from 'react';
import * as useTemplate from './useTemplate';
import MyScrollBox from '@common/components/MyScrollBox';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@common/messager';
import { RESUME_TOOLBAR_MAPS } from '@common/constants/resume';

import PersonalForm from './UseForm/Personal';
import EducationForm from './UseForm/Education';
import CertificateForm from './UseForm/Certificate';
import EvaluationForm from './UseForm/Evaluation';
import WorkForm from './UseForm/Work';
import ContactForm from './UseForm/Contact';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 96;
  const height = document.body.clientHeight;
  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    }
  }, []);

  /**
   * @description 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    Messager.receive(e, (data: any) => {
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  }

  return (
    <MyScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <useTemplate.TemplateOne />
      {
        showFormModal && (
          <>
            {formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm onClose={onClose}/>}
            {formName === RESUME_TOOLBAR_MAPS.education && <EducationForm onClose={onClose}/>}
            {formName === RESUME_TOOLBAR_MAPS.certificate && <CertificateForm onClose={onClose}/>}
            {formName === RESUME_TOOLBAR_MAPS.evaluation && <EvaluationForm onClose={onClose}/>}
            {formName === RESUME_TOOLBAR_MAPS.workPrefer && <WorkForm onClose={onClose}/>}
            {formName === RESUME_TOOLBAR_MAPS.contact && <ContactForm onClose={onClose}/>}
          </>
        )
      }
    </MyScrollBox>
  );
}
export default ResumeContent;