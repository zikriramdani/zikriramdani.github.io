import React,{ useState, useEffect } from "react";

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ReactSkeletons = ({loop, count, height}) => {
  const dataArray = loop || [1,2,3,4,5,6,7,8,9,10,11,12];
  const [reactSkeleton, setReactSkeleton] = useState(dataArray);
  const counts = count || 4;
  const heights = height || "25"

  return (
    <>
      {reactSkeleton?.map((item, i) => (
        <div key={i} >
          <Skeleton count={counts} height={heights + "px"} />
        </div>
      ))}
    </>
  );
};

export default ReactSkeletons;