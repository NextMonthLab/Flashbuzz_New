import { Helmet } from "react-helmet-async";

interface PageMetaProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
}

const DEFAULT_OG_IMAGE = "https://flashbuzz.tv/og-image.png";

export function PageMeta({ title, description, ogImage, canonical }: PageMetaProps) {
  const image = ogImage ?? DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
