import React from 'react';
import Link from 'next/link';

const NotFound = (props) => {
  const { translation } = props;

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - {translation('NotFound.Page Not Found')}</h1>
      <p>{translation('NotFound.Sorry the page you are looking for does not exist')}</p>
      <Link href="/" legacyBehavior>
        {translation('NotFound.Go back to the homepage')}
      </Link>
    </div>
  );
};

export default NotFound;
