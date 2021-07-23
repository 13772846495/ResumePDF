/**
 * @description 求职意向
 */
import React from 'react';
import { useSelector } from 'react-redux';
import '../../../styles/template-one.less';

function Job() {
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const cityList = (work && work?.cityList) || [];

  return (
    <div styleName="container">
      <p styleName="title">求职意向 Work</p>
      <ul styleName="content">
        {work?.job && <li>职位：{work?.job}</li>}
        {work?.city && cityList?.length > 0 &&
          cityList.map((city: string, index: number) => {
            return (
              <span key={index}>
                {city}
                {index !== cityList.length - 1 && <span>｜</span>}
              </span>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Job;