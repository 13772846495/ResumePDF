/**
 * @description 编辑简历-模块管理
 */
import React,{ useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';
import {onAddToolbar, onDeleteToolbar} from './utils';
import { useDispatch } from 'react-redux';

function ResumeToolbar() {
  const height = document.body.clientHeight;

  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if(RESUME_TOOLBAR_LIST.length > 0) {
      let addToolbarList1: TSResume.SliderItem[] = [];
      let unAddToolbarList1: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((s: TSResume.SliderItem) => {
        if(s.require)
          addToolbarList1.push(s);
        else
          unAddToolbarList1.push(s);
      })
      setAddToolbarList(addToolbarList1);
      setUnAddToolbarList(unAddToolbarList1);
      changeResumeToolbarKeys(addToolbarList1.map((s: TSResume.SliderItem) => s.key));
    }
  }, []);

  const changeResumeToolbarKeys = (moduleKeys: string[]) => {
    if(moduleKeys.length > 0) {
      dispatch({
        type: 'templateModel/setStore',
        payload: {
          key: 'resumeToolbarKeys',
          values: moduleKeys,
        },
      })
    }
  };

  // 添加模块
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onAddToolbar(addToolbarList, moduleToolbar);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onDeleteToolbar(unAddToolbarList, moduleToolbar);
    setUnAddToolbarList(nextUnAddSliderList);
    changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
  };

  // 删除模块
  const onDeleteSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleToolbar);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onAddToolbar(unAddToolbarList, moduleToolbar);
    setUnAddToolbarList(nextUnAddSliderList);
    changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
  };

  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        {!!addToolbarList.length && (
          <div styleName="module">
              <div styleName="title un-first">
                  <span styleName="line" />
                  已添加模块
              </div>
              <div styleName="content">
                {
                  addToolbarList &&
                  addToolbarList.map((toolbar: TSResume.SliderItem) => {
                    return (
                      <div styleName="box" key={toolbar.key}>
                        <div styleName="info">
                        <div styleName="info">
                          <i styleName="icon"></i>
                          <div styleName="text">
                            <div styleName="name">{toolbar.name}</div>
                            <div styleName="summary">{toolbar.summary}</div>
                          </div>
                          {toolbar.require && <div styleName="tips">必选项</div>}
                          {!toolbar.require && (
                            <div styleName="action">
                              <i styleName="edit" onClick={(e: React.MouseEvent) => {}} />
                              <i
                                styleName="delete"
                                onClick={(e: React.MouseEvent) => {
                                  onDeleteSliderAction(toolbar);
                                }}
                              />
                            </div>
                          )}
                        </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          )
        }
        {!!unAddToolbarList.length && (
          <div styleName="module">
              <div styleName="title un-first">
                  <span styleName="line" />
                  未添加模块
              </div>
              <div styleName="content">
                {
                  unAddToolbarList.map((toolbar: TSResume.SliderItem) => {
                    return (
                      <div styleName="box" key={toolbar.key} onClick={() => onAddSliderAction(toolbar)}>
                        <div styleName="info">
                        <div styleName="info">
                          <img styleName="icon"/>
                          <div styleName="text">
                            <div styleName="name">{toolbar.name}</div>
                            <div styleName="summary">{toolbar.summary}</div>
                          </div>
                        </div>
                        </div>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          )
        }
      </MyScrollBox>
    </div>
  );
}
export default ResumeToolbar;