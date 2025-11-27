const heroSlide = {
  name: "heroSlide",
  title: "Hero Slides",
  type: "document",
  icon: () => "🖼️",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(120),
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(160),
    },
    {
      name: "image",
      title: "Background Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.min(1),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "image",
      order: "order",
    },
    prepare({ title, subtitle, media, order }) {
      return {
        title: title || "Hero Slide",
        subtitle: `#${order || 1} · ${subtitle || "No subtitle"}`,
        media,
      };
    },
  },
};

export default heroSlide;
