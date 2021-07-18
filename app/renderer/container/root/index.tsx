import React, { useEffect } from 'react';
import './index.less';
import { useHistory } from 'react-router';
import Logo from '@assets/logo.png';
import { shell } from 'electron';
import { ROUTER_KEY, ROUTER_ENTRY } from '@common/constants/router';
import { isHttpOrHttps } from '@src/common/utils/router';
import { useSelector, useDispatch } from 'react-redux';


function Root() {
  const History = useHistory();
  const appName = useSelector((state: any) => state.globalModel.appName);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("3s后修改！！！");
  //     dispatch({
  //       type: 'globalModel/setStore',
  //       payload: {
  //         key: 'appName',
  //         values: 'visResumeMook',
  //       },
  //     });
  //   }, 3000);
  // }, []);

  // useEffect(() => {
  //   alert('appName = '+ appName);
  // }, [appName]);

  const onRouterToLink = (router: TSRouter.Item) => {
    if( isHttpOrHttps(router.url) ) {
      shell.openExternal(router.url);
    } else {
      History.push(router.url);
    }
  }
  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo}/>
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台, 让你的简历更加出众 ~</div>
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