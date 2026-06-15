'use client';

import { useMemo, useState } from 'react';
import { urlFor } from '../sanity/lib/image';

const WHATSAPP_NUMBER = '919982666712';

export type GalleryDesign = {
  _id: string;
  name: string;
  tag: string;
  categories: string[];
  description: string;
  mainImage: {
    asset: { _ref: string };
    alt?: string;
  };
};

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'mandir', label: 'Mandir' },
  { value: 'sofa', label: 'Sofa Wall' },
  { value: 'staircase', label: 'Staircase' },
  { value: 'botanical', label: 'Botanical' },
  { value: 'jali', label: 'Jali Screen' },
  { value: 'cladding', label: 'Cladding' },
  { value: 'texture', label: 'Texture' },
];

function buildWhatsappLink(name: string, tag: string) {
  const msg = `Hi Stone Emotions! I'm interested in the "${name}" design (${tag}) shown on your website. Could you share material options, sizing and pricing?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export default function GalleryGrid({ designs }: { designs: GalleryDesign[] }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState<GalleryDesign | null>(null);

  const visible = useMemo(() => {
    if (activeFilter === 'all') return designs;
    return designs.filter((d) => d.categories?.includes(activeFilter));
  }, [designs, activeFilter]);

  return (
    <>
      <div className="filter-bar">
        <div className="filter-inner">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              className={`filter-chip ${activeFilter === f.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="masonry">
        {visible.length === 0 && (
          <p style={{ color: 'var(--ink-soft)', padding: '40px 0' }}>
            No designs in this category yet.
          </p>
        )}
        {visible.map((d) => (
          <div className="pin-card" key={d._id} onClick={() => setSelected(d)}>
            <div className="pin-img-wrap">
              <img
                src={urlFor(d.mainImage).width(700).quality(80).url()}
                alt={d.mainImage?.alt || d.name}
                loading="lazy"
              />
            </div>
            <div className="pin-overlay">
              <span className="pin-cat">{d.tag}</span>
              <h3>{d.name}</h3>
              <a
                className="pin-enquire"
                href={buildWhatsappLink(d.name, d.tag)}
                target="_blank"
                rel="noopener"
                onClick={(e) => e.stopPropagation()}
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`lightbox ${selected ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
      >
        {selected && (
          <div className="lightbox-inner">
            <button className="lightbox-close" onClick={() => setSelected(null)}>
              ✕
            </button>
            <div className="lightbox-img">
              <img
                src={urlFor(selected.mainImage).width(1200).quality(85).url()}
                alt={selected.mainImage?.alt || selected.name}
              />
            </div>
            <div className="lightbox-content">
              <span className="pin-cat">{selected.tag}</span>
              <h2>{selected.name}</h2>
              <p>{selected.description}</p>
              <a
                className="lightbox-whatsapp"
                href={buildWhatsappLink(selected.name, selected.tag)}
                target="_blank"
                rel="noopener"
              >
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
