'use client';
import React, { useEffect } from 'react';

import Link from 'next/link';

export default function Index({ error, reset, translation }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - {translation('Error.Brum')}</h1>
      <a href="/" style={{ cursor: 'pointer' }}>
        {translation('Error.Try again')}
      </a>
    </div>
  );
}
