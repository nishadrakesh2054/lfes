const contact = {
  name: "contact",
  title: "Contact Form Submissions",
  type: "document",
  icon: () => "📧",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required().min(10),
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Progress", value: "in-progress" },
          { title: "Replied", value: "replied" },
          { title: "Resolved", value: "resolved" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    },
    {
      name: "notes",
      title: "Internal Notes",
      type: "text",
      description:
        "Internal notes about this contact submission (not visible to user)",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "email",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || "Anonymous",
        subtitle: `${subtitle || "No email"} - ${status || "new"}`,
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "submittedAtAsc",
      by: [{ field: "submittedAt", direction: "asc" }],
    },
    {
      title: "Status",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
  ],
};

export default contact;
