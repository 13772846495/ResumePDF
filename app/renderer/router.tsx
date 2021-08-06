import React, { useEffect } from 'react';
import { HashRouter, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';
import TemplateList from '@src/container/templateList';
import ROUTER from '@common/constants/router';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import useReadDirAssetsTemplateHooks from './hooks/useReadDirAssetsTemplateHooks';
import useThemeActionHooks from './hooks/useThemeActionHooks';

function Router() {
  const readDirAssetsTemplateHooks = useReadDirAssetsTemplateHooks();
  const initThemeConfig = useThemeActionHooks.useInitThemeConfig();

  useEffect(() => {
    readDirAssetsTemplateHooks();
    initThemeConfig();
  }, [])

  return (
    <HashRouter>
      <CacheSwitch>
        <CacheRoute path={ROUTER.root} exact component={Root} />
        <CacheRoute path={ROUTER.resume} exact component={Resume} />
        <CacheRoute path={ROUTER.templateList} exact component={TemplateList} />
      </CacheSwitch>
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}

export default Router;