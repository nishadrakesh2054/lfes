const testimonial = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  icon: () => "💬",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(100),
    },
    {
      name: "position",
      title: "Position/Role",
      type: "string",
      description: "e.g., Student, Parent, Alumnus, Teacher",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "content",
      title: "Testimonial Content",
      type: "text",
      description: "The testimonial quote or review",
      validation: (Rule) => Rule.required().min(10),
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Anonymous",
        subtitle: subtitle || "No position",
      };
    },
  },
  orderings: [
    {
      title: "Name (A-Z)",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
    {
      title: "Newest First",
      name: "createdAtDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
};

export default testimonial;
