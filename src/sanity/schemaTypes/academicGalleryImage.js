const academicCategories = [
  { title: "ECA", value: "eca" },
  { title: "Progressive Wing", value: "progressive-wing" },
  { title: "Primary School", value: "primary-school" },
  { title: "Middle School", value: "middle-school" },
  { title: "High School", value: "high-school" },
];

const academicGalleryImage = {
  name: "academicGalleryImage",
  title: "Academic Gallery Images",
  type: "document",
  icon: () => "📸",
  fields: [
    {
      name: "title",
      title: "Internal Title",
      type: "string",
      readOnly: true,
      hidden: true,
      initialValue: () => `Academic Image ${new Date().toISOString()}`,
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: academicCategories,
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
    prepare({ subtitle, media }) {
      return {
        title: subtitle || "Academic Gallery Image",
        subtitle: subtitle || "No category",
        media,
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
};

export default academicGalleryImage;
