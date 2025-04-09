'use client';
import React, { Fragment } from 'react';
import Headers from '@/layouts/Headers';

import Intros from '@/app/homes/components/intros';
import Skills from '@/app/homes/components/skills';
import Experiences from '@/app/homes/components/experiences';
import Certificates from '@/app/homes/components/certificates';
import Educations from '@/app/homes/components/educations';
import Portfolios from '@/app/homes/components/portfolios';

import { useTranslation } from 'react-i18next';

const Page = () => {
  const { t } = useTranslation('translation');

  return (
    <Fragment>
      <div
        className="c-main-container js-main-container"
        data-aos-easing="ease-out-back"
        data-aos-duration="1000"
        data-aos-delay="0"
      >
        <Headers translation={t} generatePDF={false} />
        <Intros translation={t} />
        <Skills translation={t} />
        <Experiences translation={t} />
        <Certificates translation={t} />
        <Educations translation={t} />
        <Portfolios translation={t} />
      </div>
    </Fragment>
  );
};

export default Page;
