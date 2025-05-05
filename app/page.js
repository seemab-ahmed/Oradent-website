import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>OraDent Dental Clinic | Islamabad</title>
        <meta
          name="description"
          content="OraDent Dental Clinic in Islamabad offers expert dental care, including cosmetic dentistry, implants, and orthodontics. Book your appointment today."
        />
        <meta
          name="keywords"
          content="Dentist Islamabad, OraDent Dental Clinic, dental implants, cosmetic dentistry, orthodontics, teeth whitening"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="OraDent Dental Clinic | Islamabad" />
        <meta
          property="og:description"
          content="Expert dental care in Islamabad. Services include cosmetic dentistry, implants, and orthodontics."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oradentdentalclinic.com" />
        <meta property="og:image" content="https://oradentdentalclinic.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="OraDent Dental Clinic | Islamabad" />
        <meta
          name="twitter:description"
          content="Expert dental care in Islamabad. Services include cosmetic dentistry, implants, and orthodontics."
        />
        <meta name="twitter:image" content="https://oradentdentalclinic.com/twitter-image.jpg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Dentist",
              name: "OraDent Dental Clinic",
              image: "https://oradentdentalclinic.com/logo.png",
              "@id": "https://oradentdentalclinic.com",
              url: "https://oradentdentalclinic.com",
              telephone: "+92 324 9134745",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Office No. 7, Pakland Business Center, I-8 Markaz",
                addressLocality: "Islamabad",
                postalCode: "44000",
                addressCountry: "PK",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "11:00",
                  closes: "21:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "14:00",
                  closes: "20:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/OraDentDentalClinic",
                "https://www.instagram.com/OraDentDentalClinic",
              ],
            }),
          }}
        />
      </Head>
      {/* Page content */}
    </>
  );
}
