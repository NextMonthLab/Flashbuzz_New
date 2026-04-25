import { Helmet } from "react-helmet-async";

const SITE_URL = "https://flashbuzz.tv";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface PageMetaProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}

export function PageMeta({ title, description, ogImage, canonical }: PageMetaProps) {
  const image = ogImage ?? DEFAULT_OG_IMAGE;
  const canonicalUrl = canonical ?? SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default PageMeta;
