import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  nodes: {
    // Body images go through Astro's pipeline instead of hot-linking originals.
    image: {
      attributes: {
        src: { type: String, required: true },
        alt: { type: String },
        title: { type: String },
      },
      render: component('./src/components/ProseImage.astro'),
    },
  },
  tags: {
    YouTube: {
      selfClosing: true,
      attributes: {
        id: { type: String, required: true },
        title: { type: String, required: true },
      },
      render: component('./src/components/YouTube.astro'),
    },
  },
});
