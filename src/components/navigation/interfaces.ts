export type SideNavigationMenuItem = {
  index: number;
  disabled?: boolean;
  icon?: string;
  label: string;
  subMenu?: Array<SideNavigationMenuItem>;
};
