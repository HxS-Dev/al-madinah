import React from 'react';
import Link from 'next/link';
import type { Metadata } from "next";
import SubscribeSection from '@/app/components/SubscribeSection';
import AdmissionsClient from '@/app/components/AdmissionsClient';

export const metadata: Metadata = {
  title: "Admissions | Al-Madinah Institute",
  description: "Join Al-Madinah Institute - Learn about our simple 3-step admission process for Islamic education programs in Crawley, West Sussex.",
};

const AdmissionsPage = () => {
  return (
    <main>
      <AdmissionsClient />
      <SubscribeSection />
    </main>
  );
};

export default AdmissionsPage;