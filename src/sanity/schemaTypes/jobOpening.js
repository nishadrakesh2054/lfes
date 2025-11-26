const jobOpening = {
  name: "jobOpening",
  title: "Job Openings",
  type: "document",
  icon: () => "💼",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "department",
      title: "Department",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "Full-time" },
          { title: "Part-time", value: "Part-time" },
          { title: "Contract", value: "Contract" },
          { title: "Internship", value: "Internship" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "postedDate",
      title: "Posted Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    },
    {
      name: "description",
      title: "Short Description",
      type: "text",
      validation: (Rule) => Rule.required().min(20),
    },
    {
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet points outlining key requirements",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Open", value: "open" },
          { title: "Closed", value: "closed" },
        ],
        layout: "radio",
      },
      initialValue: "open",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "department",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || "Untitled Role",
        subtitle: `${subtitle || "No department"} • ${
          status === "open" ? "Open" : "Closed"
        }`,
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "postedDateDesc",
      by: [{ field: "postedDate", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "postedDateAsc",
      by: [{ field: "postedDate", direction: "asc" }],
    },
  ],
};

export default jobOpening;
