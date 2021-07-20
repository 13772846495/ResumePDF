/**
 * @description 编辑简历-模块管理
 */
import React,{ useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';
import {onAddToolbar, onDeleteToolbar} from './utils';

function ResumeToolbar() {
  const height = document.body.clientHeight;

  const [addToolbalList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbalList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);

  useEffect(() => {
    if(RESUME_TOOLBAR_LIST.length > 0) {
      let addToolbalList1: TSResume.SliderItem[] = [];
      let unAddToolbalList1: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((s: TSResume.SliderItem) => {
        if(s.require)
          addToolbalList1.push(s);
        else
          unAddToolbalList1.push(s);
      })
      setAddToolbarList(addToolbalList1);
      setUnAddToolbarList(unAddToolbalList1);
    }
  }, []);

  // 添加模块
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onAddToolbar(addToolbalList, moduleToolbar);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onDeleteToolbar(unAddToolbalList, moduleToolbar);
    setUnAddToolbarList(nextUnAddSliderList);
  };

  // 删除模块
  const onDeleteSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onDeleteToolbar(addToolbalList, moduleToolbar);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onAddToolbar(unAddToolbalList, moduleToolbar);
    setUnAddToolbarList(nextUnAddSliderList);
  };

  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        {addToolbalList.length && (
          <div styleName="module">
              <div styleName="title un-first">
                  <span styleName="line" />
                  已添加模块
              </div>
              <div styleName="content">
                {
                  addToolbalList &&
                  addToolbalList.map((toolbar: TSResume.SliderItem) => {
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
        {unAddToolbalList.length && (
          <div styleName="module">
              <div styleName="title un-first">
                  <span styleName="line" />
                  未添加模块
              </div>
              <div styleName="content">
                {
                  unAddToolbalList.map((toolbar: TSResume.SliderItem) => {
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