const jobApplication = {
  name: "jobApplication",
  title: "Job Applications",
  type: "document",
  icon: () => "📝",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2),
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
      name: "positionOfInterest",
      title: "Position of Interest",
      type: "string",
      description: "The position the candidate is applying for",
    },
    {
      name: "coverLetter",
      title: "Cover Letter / Message",
      type: "text",
    },
    {
      name: "resume",
      title: "Resume/CV",
      type: "file",
      options: {
        accept: ".pdf,.doc,.docx",
      },
    },
    {
      name: "source",
      title: "Submission Source",
      type: "string",
      description: "Where this application came from",
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
      title: "Application Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Review", value: "in_review" },
          { title: "Shortlisted", value: "shortlisted" },
          { title: "Rejected", value: "rejected" },
        ],
        layout: "radio",
      },
      initialValue: "new",
    },
    {
      name: "notes",
      title: "Internal Notes",
      type: "text",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "positionOfInterest",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      return {
        title: title || "Unnamed Candidate",
        subtitle: `${subtitle || "General Application"} • ${
          status ? status.replace("_", " ") : "new"
        }`,
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
  ],
};

export default jobApplication;
