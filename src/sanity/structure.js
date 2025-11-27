const groupedSections = [
  {
    title: "Homepage",
    items: [
      { schemaType: "heroSlide", title: "Hero Slides" },
      { schemaType: "popupNotice", title: "Popup Notices" },
      { schemaType: "testimonial", title: "Testimonials" },
    ],
  },
  {
    title: "News & Events",
    items: [
      { schemaType: "eventNotice", title: "Events & Notices" },
      { schemaType: "blog", title: "Blog Posts" },
      { schemaType: "newsletter", title: "Newsletters" },
    ],
  },
  {
    title: "Admissions & Outreach",
    items: [
      { schemaType: "admissionApplication", title: "Admission Applications" },
      { schemaType: "contact", title: "Contact Inquiries" },
    ],
  },
  {
    title: "Media Galleries",
    items: [
      { schemaType: "galleryImage", title: "General Gallery" },
      { schemaType: "academicGalleryImage", title: "Academic Gallery" },
    ],
  },
  {
    title: "Careers",
    items: [
      { schemaType: "jobOpening", title: "Job Openings" },
      { schemaType: "jobApplication", title: "Job Applications" },
    ],
  },
];

const groupedTypeNames = groupedSections.flatMap((section) =>
  section.items.map((item) => item.schemaType)
);

const isUngroupedType = (listItem) =>
  !groupedTypeNames.includes(listItem.getId());

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("Content")
    .items([
      ...groupedSections.map((section) =>
        S.listItem()
          .title(section.title)
          .child(
            S.list()
              .title(section.title)
              .items(
                section.items.map((item) =>
                  S.documentTypeListItem(item.schemaType).title(item.title)
                )
              )
          )
      ),
      S.divider(),
      ...S.documentTypeListItems().filter(isUngroupedType),
    ]);
