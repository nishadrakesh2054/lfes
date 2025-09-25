export type ITeamDT = {
  id: number;
  name: string;
  title: string;
  image: string;
  socials: { id: number; iconCls: string; link: string }[];
  bgClr?: string;
};

export type AluminiDT = {
  id: number;
  name: string;
  title: string;
  desc: string;
  image: string;

};
