import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    title: "HOME",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "ABOUT LFES", link: "/about" },
      { id: 3, title: "SCHOOL FACILITIES", link: "/facilities" },
      { id: 5, title: "FOUNDER's MESSAGE", link: "/message" },
    ],
  },
  {
    id: 2,
    title: "ACADEMICS",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "PROGRESSIVE WING", link: "/progressive" },
      { id: 2, title: "PRIMARY SCHOOL", link: "/primary-school" },
      { id: 3, title: "MIDDLE SCHOOL", link: "/middle-school" },
      { id: 4, title: "HIGH SCHOOL", link: "/high-school" },
      { id: 5, title: "SENIOR HIGH SCHOOL", link: "/senior-high-school" },
    ],
  },
  {
    id: 3,
    title: "ADMISSIONS",
    link: "/admission",
  },

  {
    id: 5,
    title: "ECA & NEWS",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "ECA", link: "/eca" },
      { id: 2, title: "ALUMINI", link: "/alumini" },
      { id: 3, title: "NEWS", link: "/blog-list" },
      { id: 4, title: "EVENTS", link: "/event" },
    ],
  },

  {
    id: 6,
    title: "RESOURCES",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "GALLERY", link: "/gallery" },
      { id: 2, title: "CAREER", link: "/career" },
      { id: 3, title: "CONTACT", link: "/contact" },
    ],
  },
];

export default menu_data;

// menu data 2
export const menu_data_2: IMenuDT2[] = [];
