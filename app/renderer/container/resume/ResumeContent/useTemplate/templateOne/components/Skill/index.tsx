/**
 * @description 技能
 */
import React from 'react';
import { useSelector } from 'react-redux';
import './index.less';

function Skill() {
  const skill: string = useSelector((state: any) => state.resumeModel.skill);
  const skillList: string[] = useSelector((state: any) => state.resumeModel.skillList);

  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        { skill && skillList?.length > 0 &&
          skillList?.map((value: string, index: number) => {
            return (
            <li styleName="item" key={index}>
              {value}
            </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default Skill;