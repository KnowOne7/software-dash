export interface ActionItem {
  id: string;
  label: string;
  icon: string;
  type: 'modal' | 'offcanvas' | 'link' | 'function' | 'none';
  targetId?: string;
  href?: string;
  onClick?: (recordKey: string) => void;
  className?: string;
}
