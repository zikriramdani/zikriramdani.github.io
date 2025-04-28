'use client';

import React, { Fragment, useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

import Headers from '@/app/generate-pdf/components/Headers';
import Intros from '@/app/generate-pdf/components/intros';
import Skills from '@/app/generate-pdf/components/skills';
import Experiences from '@/app/generate-pdf/components/experiences';
import Certificates from '@/app/generate-pdf/components/certificates';
import Educations from '@/app/generate-pdf/components/educations';

import { useTranslation } from 'react-i18next';
import { useSearchParams, useRouter } from 'next/navigation';

const GeneratePdfPage = () => {
  const { t } = useTranslation('translation');
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const generatePDF = () => {
    const input = document.querySelector('.generate-pdf');

    setIsLoading(true);

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');

      const pageWidth = 210;
      const pageHeight = 297;

      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);

      const scaleFactor = Math.min(pageHeight / imgHeight, 1);
      const imgX = (pageWidth - imgWidth * scaleFactor) / 2;
      const imgY = (pageHeight - imgHeight * scaleFactor) / 2;

      doc.addImage(imgData, 'PNG', imgX, imgY, imgWidth * scaleFactor, imgHeight * scaleFactor);

      doc.save('CV Zikri Ramdani ( zikriramdani dot github dot io ).pdf');

      setIsLoading(false);

      setTimeout(() => {
        router.push('/');
      }, 0);
    });
  };

  useEffect(() => {
    if (searchParams.get('autoGenerate') === 'true') {
      setTimeout(() => {
        generatePDF();
      }, 500);
    }
  }, [searchParams]);

  return (
    <Fragment>
      {isLoading ? (
        <div
          style={{
            height: '100%',
            width: '100%',
            textAlign: 'center',
            alignContent: 'center'
          }}
        >
          <h1>{t('harap_tunggu')}</h1>
        </div>
      ) : (
        <div className="generate-pdf">
          <Headers translation={t} />
          <Intros translation={t} />
          <Educations translation={t} generatePDF={false} />
          <Skills translation={t} />
          <Experiences translation={t} generatePDF={false} />
          <Certificates translation={t} />
        </div>
      )}
    </Fragment>
  );
};

export default GeneratePdfPage;
