import React, { useEffect } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.png';
import { shell } from 'electron';
import { ROUTER_KEY, ROUTER_ENTRY } from '@common/constants/router';
import { compilePath, isHttpOrHttps } from '@src/common/utils/router';
import { useSelector } from 'react-redux';
import MyTheme from '@common/components/MyTheme';
import useThemeActionHooks from '@src/hooks/useThemeActionHooks';


function Root() {
  const history = useHistory();
  const selectTemplate: TSTemplate.Item = useSelector((state: any) => state.templateModel.selectTemplate);
  const [currentTheme] = useThemeActionHooks.useGetCurrentTheme();

  const onRouterToLink = (router: TSRouter.Item) => {
    if( isHttpOrHttps(router.url) ) {
      shell.openExternal(router.url);
    } else {
      if(router.key !== ROUTER_KEY.resume) {
        history.push(compilePath(router.url));
      } else {
        history.push(
          compilePath(router.url, {
          fromPath: ROUTER_KEY.root,
          templateId: selectTemplate?.templateId,
          templateIndex: selectTemplate?.templateIndex,
          })
        );
      }
    }
  }
  return (
    <div styleName="root" style={{backgroundColor: currentTheme?.backgroundColor, color: currentTheme?.fontColor}}>
      <div styleName="container">
        <img src={Logo}/>
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
        <div styleName="theme">
          <MyTheme />
        </div>
        <div styleName="action">
          {
            ROUTER_ENTRY.map((router: TSRouter.Item) => {
              return(
                <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                  {router.text}
                </div>
              );
            })
          }
        </div>
      </div>
      <div styleName="footer">
        <p>
          Designed By GB.
        </p>
      </div>
    </div>
  );
}

export default Root;