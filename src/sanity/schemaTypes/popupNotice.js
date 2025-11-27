const popupNotice = {
  name: "popupNotice",
  title: "Popup Notice",
  type: "document",
  icon: () => "🔔",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
          description: "Alternative text for the image",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
 
    {
      name: "isActive",
      title: "Active",
      type: "boolean",
      description: "Show this popup notice",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      media: "image",
      isActive: "isActive",
    },
    prepare({ media, isActive }) {
      return {
        title: "Popup Notice",
        subtitle: isActive ? "Active" : "Inactive",
        media: media,
      };
    },
  },
};

export default popupNotice;
