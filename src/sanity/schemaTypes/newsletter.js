const newsletter = {
  name: "newsletter",
  title: "Newsletter Subscriptions",
  type: "document",
  icon: () => "📬",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "subscribedAt",
      title: "Subscribed At",
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
          { title: "Active", value: "active" },
          { title: "Unsubscribed", value: "unsubscribed" },
          { title: "Bounced", value: "bounced" },
        ],
        layout: "radio",
      },
      initialValue: "active",
    },
    {
      name: "source",
      title: "Source",
      type: "string",
      description: "Where the subscription came from (e.g., footer, homepage)",
      initialValue: "footer",
    },
  ],
  preview: {
    select: {
      title: "email",
      subtitle: "subscribedAt",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || "No email",
        subtitle: `${subtitle ? new Date(subtitle).toLocaleDateString() : "No date"} - ${status || "active"}`,
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "subscribedAtDesc",
      by: [{ field: "subscribedAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "subscribedAtAsc",
      by: [{ field: "subscribedAt", direction: "asc" }],
    },
    {
      title: "Status",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
  ],
};

export default newsletter;
