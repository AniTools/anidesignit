import { config, fields, collection, singleton } from '@keystatic/core';

/* Covers and gallery shots currently live on Firebase Storage and Cloudinary,
   so every image field accepts either an existing URL or a fresh upload rather
   than forcing a migration. Uploads land in public/images/ and are referenced
   from the site root. */
const imageField = (label: string) =>
  fields.conditional(
    fields.select({
      label: `${label} source`,
      options: [
        { label: 'Upload an image', value: 'upload' },
        { label: 'Link to an image URL', value: 'url' },
      ],
      defaultValue: 'url',
    }),
    {
      upload: fields.image({
        label,
        directory: 'public/images/projects',
        publicPath: '/images/projects/',
        validation: { isRequired: false },
      }),
      url: fields.url({ label: `${label} URL`, validation: { isRequired: false } }),
    }
  );

export default config({
  // `local` reads and writes the files in this project directly — no account,
  // no network, nothing to pay for. To edit from any browser after deploying,
  // push this project to GitHub and swap in:
  //   storage: { kind: 'github', repo: 'your-user/your-repo' }
  storage: { kind: 'local' },

  ui: {
    brand: { name: 'AniDesignIt' },
    navigation: {
      Content: ['projects', 'services'],
      Settings: ['siteCopy'],
    },
  },

  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'name',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      columns: ['name', 'year'],
      entryLayout: 'form',
      schema: {
        name: fields.slug({
          name: { label: 'Project name', validation: { isRequired: true } },
          slug: {
            label: 'URL slug',
            description: 'The address this case study lives at, e.g. /work/marquess-coffee',
          },
        }),
        order: fields.integer({
          label: 'Order',
          description: 'Lower numbers show first in My Work.',
          defaultValue: 100,
        }),
        year: fields.text({ label: 'Year', validation: { isRequired: true } }),
        role: fields.text({ label: 'Your role', validation: { isRequired: true } }),
        client: fields.text({ label: 'Client', validation: { isRequired: true } }),
        subtitle: fields.text({
          label: 'Subtitle',
          description: 'One coral italic line under the title on the case study page.',
          validation: { isRequired: true },
        }),
        summary: fields.text({
          label: 'Summary',
          description: 'The lead paragraph. Also shown beside the project in My Work.',
          multiline: true,
          validation: { isRequired: true },
        }),
        tools: fields.array(fields.text({ label: 'Tool' }), {
          label: 'Tools',
          itemLabel: (props) => props.value,
        }),
        heroImage: imageField('Cover image'),
        gallery: fields.array(imageField('Gallery image'), {
          label: 'Gallery',
          itemLabel: (props) =>
            props.value.discriminant === 'url'
              ? String(props.value.value ?? 'Image URL')
              : String(props.value.value ?? 'Uploaded image'),
        }),
        liveUrl: fields.url({
          label: 'Live project link',
          description: 'Shown as “View live project” in the sidebar. Leave empty to hide.',
          validation: { isRequired: false },
        }),
        links: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            href: fields.url({ label: 'Link' }),
          }),
          {
            label: 'Extra links',
            description: 'Figma files, brand books, demo videos.',
            itemLabel: (props) => props.fields.label.value || 'Link',
          }
        ),
        keyLesson: fields.text({
          label: 'Key lesson',
          description: 'The closing takeaway callout. Leave empty to hide it.',
          multiline: true,
        }),
        /* The body of the case study. Each top-level heading becomes one of the
           numbered coral chapters on the page — the numbering is automatic, so
           write “The Problem”, not “01 The Problem”. */
        content: fields.markdoc({ label: 'Case study' }),
        testimonial: fields.object(
          {
            quote: fields.text({ label: 'Quote', multiline: true }),
            author: fields.text({ label: 'Author' }),
          },
          { label: 'Testimonial', description: 'Leave the quote empty to hide this block.' }
        ),
      },
    }),

    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { data: 'json' },
      columns: ['title'],
      entryLayout: 'form',
      schema: {
        title: fields.slug({ name: { label: 'Service', validation: { isRequired: true } } }),
        order: fields.integer({ label: 'Order', defaultValue: 100 }),
        icon: fields.select({
          label: 'Icon',
          options: [
            { label: 'Compass', value: 'compass' },
            { label: 'Palette', value: 'palette' },
            { label: 'Layout', value: 'layout' },
            { label: 'Monitor', value: 'monitor' },
            { label: 'Code', value: 'code' },
            { label: 'Play', value: 'play' },
            { label: 'Pen tool', value: 'pen-tool' },
            { label: 'Sparkles', value: 'sparkles' },
          ],
          defaultValue: 'compass',
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
      },
    }),
  },

  singletons: {
    siteCopy: singleton({
      label: 'Site copy & contact',
      path: 'src/content/site/copy',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Your name' }),
        role: fields.text({ label: 'Role line', description: 'The coral eyebrow above your name.' }),
        heroSubtitle: fields.text({ label: 'Hero subtitle', multiline: true }),
        heroBody: fields.text({ label: 'Hero body', multiline: true }),

        aboutHeading: fields.text({ label: 'About heading' }),
        aboutSubtitle: fields.text({ label: 'About subtitle' }),
        aboutBody: fields.array(fields.text({ label: 'Paragraph', multiline: true }), {
          label: 'About paragraphs',
          itemLabel: (props) => (props.value || '').slice(0, 48) + '…',
        }),
        aboutTools: fields.array(fields.text({ label: 'Tool' }), {
          label: 'About tool chips',
          itemLabel: (props) => props.value,
        }),
        portrait: fields.url({ label: 'Portrait image URL' }),
        resume: fields.file({
          label: 'Resume (PDF)',
          description: 'Shown as a download button in About Me. Leave empty to hide it.',
          directory: 'public/files',
          publicPath: '/files/',
          validation: { isRequired: false },
        }),
        clients: fields.array(
          fields.object({
            name: fields.text({ label: 'Name', validation: { isRequired: true } }),
            logo: imageField('Logo'),
            href: fields.url({ label: 'Link', validation: { isRequired: false } }),
          }),
          {
            label: "Clients & brands you've worked with",
            description: 'The logo row in About Me. Leave empty to hide the whole section.',
            itemLabel: (props) => props.fields.name.value || 'Client',
          }
        ),
        funFactHeading: fields.text({
          label: 'Fun fact heading',
          description: 'e.g. "When I\'m not designing?" Leave empty to hide this callout.',
        }),
        funFactBody: fields.text({ label: 'Fun fact body', multiline: true }),

        servicesEyebrow: fields.text({ label: 'Services eyebrow' }),
        servicesSubtitle: fields.text({ label: 'Services subtitle' }),

        contactHeading: fields.text({ label: 'Contact heading' }),
        contactBody: fields.text({ label: 'Contact body', multiline: true }),
        email: fields.text({ label: 'Email' }),
        phone: fields.text({ label: 'Phone' }),
        location: fields.text({ label: 'Location' }),
        booking: fields.url({ label: 'Booking link' }),

        social: fields.array(
          fields.object({
            label: fields.text({ label: 'Label' }),
            icon: fields.select({
              label: 'Icon',
              options: [
                { label: 'Instagram', value: 'instagram' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'GitHub', value: 'github' },
                { label: 'YouTube', value: 'youtube' },
              ],
              defaultValue: 'instagram',
            }),
            href: fields.url({ label: 'Link' }),
          }),
          { label: 'Social links', itemLabel: (props) => props.fields.label.value || 'Link' }
        ),

        lottieHero: fields.url({ label: 'Hero Lottie URL' }),
        lottieAbout: fields.url({ label: 'About Lottie URL' }),
        lottieContact: fields.url({ label: 'Contact Lottie URL' }),
      },
    }),
  },
});
