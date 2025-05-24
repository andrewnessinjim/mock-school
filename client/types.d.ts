export interface Student {
  id: number;
  name: string;
  age: number;
  class: {
    description: string;
  };
  subjects: Subject[];
  attendance: Attendance[];
}

export interface Subject {
  id: number;
  name: string;
}

export interface Attendance {
  date: string;
  status: string;
}

interface MenuItem {
  label: string;
}

interface MenuItemWithSubItems {
  label: string;
  subItems: MenuItem[];
}

export type MenuItems = (MenuItem | MenuItemWithSubItems)[];
