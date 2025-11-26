const categoryOptions = [
  { title: "Progressive Wing", value: "progressive-wing" },
  { title: "Primary School", value: "primary-school" },
  { title: "Middle School", value: "middle-school" },
  { title: "Secondary School", value: "secondary-school" },
  { title: "Events & Activities", value: "events" },
  { title: "Facilities", value: "facilities" },
];

const galleryImage = {
  name: "galleryImage",
  title: "Gallery Images",
  type: "document",
  icon: () => "🖼️",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: categoryOptions,
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
    {
      name: "driveLink",
      title: "Google Drive Link",
      type: "url",
      description:
        "Optional link to the album or original photo on Google Drive",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
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

export default galleryImage;
