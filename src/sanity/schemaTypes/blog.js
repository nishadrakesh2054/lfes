const blog = {
  name: "blog",
  title: "Blog/News",
  type: "document",
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
        list: [
          { title: "School News", value: "school-news" },
          { title: "Events & Activities", value: "events-activities" },
          { title: "Student Achievements", value: "student-achievements" },
          { title: "Alumni Stories", value: "alumni-stories" },
          { title: "Academic Updates", value: "academic-updates" },
          { title: "Workshops & Seminars", value: "workshops-seminars" },
          { title: "Sports & Athletics", value: "sports-athletics" },
          { title: "Arts & Culture", value: "arts-culture" },
          { title: "Community Service", value: "community-service" },
          { title: "Parent Resources", value: "parent-resources" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "image",
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      };
    },
  },
};

export default blog;
