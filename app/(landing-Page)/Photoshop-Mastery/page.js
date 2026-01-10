import React from 'react'
import PhotoshopClient from './photoshop';

const Photoshop = () => {
  return (
    <>
        <PhotoshopClient />
    </>
  )
}

export default Photoshop

export const metadata = {
  title: "Photoshop Mastery: The Complete A – Z Guide from Core Basics to Advanced",
  openGraph: {
    title: "Photoshop Mastery: The Complete A – Z Guide from Core Basics to Advanced",
    url: "https://lgskit.com/Photoshop-Mastery",
    siteName: "LGS Kit",
    images: [
      {
        url: "https://lgskit.com/gallery/photoshop-feature.jpg",
        width: 1200,
        height: 630,
        alt: "Photoshop Mastery: The Complete A – Z Guide from Core Basics to Advanced",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photoshop Mastery: The Complete A – Z Guide from Core Basics to Advanced",
    images: ["https://lgskit.com/gallery/photoshop-feature.jpg"],
  },
};