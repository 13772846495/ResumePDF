/**
 * @description 工作经历(Form)
 */
import React from 'react';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';
import { useSelector } from 'react-redux';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';
import MyModal from '@common/components/MyModal';
import Wrapper from '../WrapperExperience';
import Form from './Form';

interface IProps {
  onClose: () => void;
}


function WorkExperience({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);
  const updateDataList = (newDataList: AdapterExperienceType[]) => {
    updateResumeHook<AdapterExperienceType[]>('workExperience', newDataList);
  }

  return (
    <MyModal.Dialog
      title="工作经历"
      config={{
        cancelBtn: {
          callback: onClose,
        }
      }}
      width={ 960 }
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.work(workExperience)} updateDataList={updateDataList}>
        <Form />
      </Wrapper>
    </MyModal.Dialog>
  );
}

export default WorkExperience;
