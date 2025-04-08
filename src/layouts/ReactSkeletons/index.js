'use client';
import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Index = ({ loop, count, height }) => {
  const dataArray = loop || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [reactSkeleton, setReactSkeleton] = useState(dataArray);
  const counts = count || 4;
  const heights = height || '25';

  return (
    <Fragment>
      {reactSkeleton?.map((item, i) => (
        <div key={i}>
          <Skeleton count={counts} height={heights + 'px'} />
        </div>
      ))}
    </Fragment>
  );
};

Index.propTypes = {
  loop: PropTypes.any,
  count: PropTypes.any,
  height: PropTypes.any
};

export default Index;
