import { Helmet } from "react-helmet-async";

export default function SEO({
  title,
  description,
  url,
  image,
  type = "website",
  noIndex = false,
}) {
  const siteName = "Trans Mau Farms";
  const siteUrl = "https://www.transmaufarms.com";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  const fullUrl = `${siteUrl}${url || ""}`;

  const imageUrl = image
    ? `${siteUrl}${image}`
    : `${siteUrl}/images/logo.jpeg`;

  const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#organization`,
  name: "Trans Mau Farms",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.jpeg`,
  image: imageUrl,
  description:
    "Certified fruit seedlings, commercial orchards, honey production, beekeeping services, azolla production and farmer training.",
  telephone: "+254722358564",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Olenguruone",
    addressRegion: "Nakuru County",
    addressCountry: "KE"
  },
  areaServed: "Kenya",
  sameAs: [
    "https://www.facebook.com/YourFacebookPage",
    "https://www.instagram.com/YourInstagramPage"
  ]
  };

  return (
    <Helmet>
   
      {/* Basic SEO */}
      
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={imageUrl}
      />

      {/* Theme */}
      <meta
        name="theme-color"
        content="#2E7D32"
      />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

    </Helmet>
  );
}