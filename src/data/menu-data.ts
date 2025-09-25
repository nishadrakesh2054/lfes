import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
  {
    id: 1,
    title: "HOME",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "ABOUT LFES", link: "/about" },
      { id: 3, title: "VISIT SCHOOL", link: "/school-tour" },
      { id: 3, title: "SCHOOL FACILITIES", link: "/facilities" },

      { id: 4, title: "MISSION & VALUES", link: "/university-mission" },
      { id: 7, title: "TEAM", link: "/" },
      { id: 8, title: "CURRICULUM", link: "/" },
      { id: 2, title: "FOUNDER's MESSAGE", link: "/message" },
    ],
  },
  {
    id: 2,
    title: "ACADEMICS",
    link: "#",
    dropdown_menus: [
      { id: 3, title: "KINDERGARTEN SCHOOL", link: "/kindergarten" },
      { id: 4, title: "ELEMENTARY SCHOOL", link: "/elementary-school" },
      { id: 5, title: "MIDDLE SCHOOL", link: "/middle-school" },
      { id: 2, title: "SENIOR SCHOOL", link: "/senior-school" },
    ],
  },
  {
    id: 3,
    title: "ADMISSIONS",
    link: "#",
    dropdown_menus: [
      {
        id: 1,
        title: "ADMISSION PROCEDURE ",
        link: "/university-apply",
      },

      {
        id: 3,
        title: "APPLICATION FORM",
        link: "/university-application-form",
      },
    ],
  },

  {
    id: 5,
    title: "ECA & NEWS",
    link: "#",
    dropdown_menus: [
      { id: 1, title: "ECA", link: "/" },
      { id: 2, title: "ALUMINI", link: "/alumini" },
      { id: 3, title: "NEWS", link: "/blog-list" },
      { id: 4, title: "EVENTS", link: "/event" },

      //   { id: 5, title: "Blog Details", link: "/blog-details/1" },
    ],
  },
];

export default menu_data;

// menu data 2
export const menu_data_2: IMenuDT2[] = [];
