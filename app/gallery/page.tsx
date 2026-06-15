import { client } from '../../sanity/lib/client';
import GalleryGrid, { type GalleryDesign } from '../../components/GalleryGrid';

export const revalidate = 60; // re-fetch from Sanity at most once a minute

const QUERY = `*[_type == "galleryItem"] | order(orderRank asc, _createdAt asc) {
  _id,
  name,
  tag,
  categories,
  description,
  mainImage
}`;

export const metadata = {
  title: 'Gallery — Stone Emotions | Browse & Enquire on Natural Stone Wall Designs',
  description:
    "Browse Stone Emotions' carved stone wall designs — mandir backdrops, sofa walls, peacock motifs, lotus reliefs and more. Tap any design to enquire instantly on WhatsApp.",
};

export default async function GalleryPage() {
  const designs: GalleryDesign[] = await client.fetch(QUERY);

  return (
    <>
      <header className="page-header">
        <span className="eyebrow">Gallery</span>
        <h1>Designs, ready to enquire about.</h1>
        <p>
          Browse carved stone wall designs — mandir backdrops, sofa walls,
          jali screens and feature walls. Tap any design to see details and
          enquire on WhatsApp.
        </p>
      </header>

      <GalleryGrid designs={designs} />
    </>
  );
}
