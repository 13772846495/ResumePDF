import useThemeActionHooks from '@src/hooks/useThemeActionHooks';
import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function MyTheme() {
  const themeList: TSTheme.Item[] = useSelector((state: any) => state.themeModel.themeList);
  const [currentTheme, setCurrentTheme] = useThemeActionHooks.useGetCurrentTheme();

  return (
    <div styleName="box">
      { themeList &&
        themeList.length > 0 &&
        [...themeList].map((theme: TSTheme.Item, index: number) => {
          return (<span key={index}
            style={{backgroundColor: theme.backgroundColor}}
            styleName={`${currentTheme.id === theme.id ? 'active' : ''}`}
            onClick={() => {
              setCurrentTheme && setCurrentTheme(theme, true);
            }}
          />);
        })
      }
    </div>
  );
}

export default MyTheme;
