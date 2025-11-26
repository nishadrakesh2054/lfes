const admissionApplication = {
  name: "admissionApplication",
  title: "Admission Applications",
  type: "document",
  icon: () => "📝",
  fields: [
    // Student Information
    {
      name: "studentName",
      title: "Student Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "dateOfBirth",
      title: "Date of Birth",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gender",
      title: "Gender",
      type: "string",
      options: {
        list: [
          { title: "Male", value: "male" },
          { title: "Female", value: "female" },
          { title: "Other", value: "other" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "currentSchool",
      title: "Current School",
      type: "text",
      description: "School name, address, district, country",
      validation: (Rule) => Rule.required().min(5),
    },
    {
      name: "gradeApplied",
      title: "Grade / Level Applied For",
      type: "string",
      options: {
        list: [
          { title: "Progressive Wings", value: "Progressive Wings " },
          { title: "Primary School", value: "Primary School" },
          { title: "Middle School", value: "Middle School" },
          { title: "High School", value: "High School" },
          { title: "Senior High School", value: "Senior High School" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    // Father's Information
    {
      name: "fatherName",
      title: "Father's Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "fatherOccupation",
      title: "Father's Occupation",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fatherContact",
      title: "Father's Contact Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // Mother's Information
    {
      name: "motherName",
      title: "Mother's Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "motherOccupation",
      title: "Mother's Occupation",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "motherContact",
      title: "Mother's Contact Number",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    // Contact & Address
    {
      name: "correspondenceEmail",
      title: "Email for Correspondence",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    },
    {
      name: "localAddress",
      title: "Local Address",
      type: "text",
      description: "Street, Area, District, Country",
    },
    // Reference
    {
      name: "heardFrom",
      title: "How did you come to know about LFES?",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          {
            title: "Friends / Relatives / Siblings",
            value: "Friends / Relatives / Siblings",
          },
          { title: "Social Media", value: "Social Media" },
          { title: "Online News Portals", value: "Online News Portals" },
          { title: "TV", value: "TV" },
          { title: "Newspaper", value: "Newspaper" },
          { title: "Others", value: "Others" },
        ],
      },
    },
    // Metadata
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
          { title: "Under Review", value: "under-review" },
          { title: "Accepted", value: "accepted" },
          { title: "Rejected", value: "rejected" },
          { title: "Waitlisted", value: "waitlisted" },
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
        "Internal notes about this application (not visible to applicant)",
    },
  ],
  preview: {
    select: {
      title: "studentName",
      subtitle: "gradeApplied",
      status: "status",
      date: "submittedAt",
    },
    prepare({ title, subtitle, status, date }) {
      return {
        title: title || "Anonymous",
        subtitle: `${subtitle || "No grade"} - ${status || "new"} - ${
          date ? new Date(date).toLocaleDateString() : "N/A"
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
    {
      title: "Status",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
    {
      title: "Grade Applied",
      name: "gradeAppliedAsc",
      by: [{ field: "gradeApplied", direction: "asc" }],
    },
  ],
};

export default admissionApplication;
