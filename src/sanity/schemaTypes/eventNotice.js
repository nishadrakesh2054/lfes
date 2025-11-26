const eventNotice = {
  name: "eventNotice",
  title: "Events & Notices",
  type: "document",
  icon: () => "📅",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(200),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
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
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief description of the event or notice",
      validation: (Rule) => Rule.max(500),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Event", value: "event" },
          { title: "Notice", value: "notice" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
      initialValue: "event",
    },
  ],
  preview: {
    select: {
      title: "title",
      date: "date",
      category: "category",
      media: "image",
    },
    prepare({ title, date, category, media }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })
        : "No date";
      return {
        title: title || "Untitled",
        subtitle: `${category || "event"} - ${formattedDate}`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Date (Newest First)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Date (Oldest First)",
      name: "dateAsc",
      by: [{ field: "date", direction: "asc" }],
    },
    {
      title: "Category",
      name: "categoryAsc",
      by: [{ field: "category", direction: "asc" }],
    },
  ],
};

export default eventNotice;
