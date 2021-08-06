import React, { useState } from 'react';
import './index.less';
import { useHistory, useParams } from 'react-router';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import MyButton from '@common/components/MyButton';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import { useSelector } from 'react-redux';
import { compilePath } from '@common/utils/router';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';
import { intToDateString } from '@common/utils/time';
import { createUID } from '@common/utils';
import fileAction from '@common/utils/file';
import { getAppPath } from '@common/utils/appPath';
import MyModal from '@common/components/MyModal';
import useClickAway from '@common/hook/useClickAway';

function ResumeAction() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const routerParams = useParams<{ fromPath: string, templateId: string, templateIndex: string }>();
  const history = useHistory();
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();
  const { ref, componentVisible, setComponentVisible } = useClickAway(false);
  // const [showModal, setShowModal] = useState(false);
  const resume = useSelector((state: any) => state.resumeModel);

  const readGlobalConfigFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

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
    setComponentVisible(false);
    readGlobalConfigFile().then((value: { [key: string]: any} ) => {
      if(value?.resumeSavePath) {
        saveResumeJson(value?.resumeSavePath);
      } else {
        getAppPath().then((appPath: string) => {
          saveResumeJson(`${appPath}resumeCache`);
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
        })
      }
    })
  };

  // 存储数据json
  const saveResumeJson = (resumeSavePath: string) => {
    const date = intToDateString(new Date().valueOf(), '_');
    const prefix = `${date}_${base?.username}_${base?.school}_${work?.job}_${createUID()}.json`;
    if(resumeSavePath && resumeSavePath.search('resumeCache') > -1) {
      fileAction?.write(`${resumeSavePath}/${prefix}`, resume, 'utf8');
    } else {
      fileAction
        ?.mkdirDir(`${resumeSavePath}/resumeCache`)
        .then((path) => {
          if(path){
            fileAction?.write(`${path}/${prefix}`, resume, 'utf8');
          }
        })
        .catch(() => {
          console.log("创建文件夹失败！");
        });
    }
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <MyButton className="export-btn" onClick={() => setComponentVisible(true)} style={{backgroundColor: currentTheme?.backgroundColor}}>
        导出PDF
      </MyButton>
      {componentVisible && (
        <MyModal.Confirm
          eleRef={ref}
          title="确定要打印简历吗？"
          description="请确保信息的正确，目前仅支持单页打印哦～"
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setComponentVisible(false),
            },
            submitBtn: {
              isShow: true,
              callback: onExport,
            },
          }}
        />
      )}
    </div>
  );
}
export default ResumeAction;