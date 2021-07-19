export interface ListMap {
  title: string;
  icon: React.ReactNode;
  to: string;
}

interface OwnProps {
  open: boolean;
  onClick(): void;
}

export type IProps = OwnProps;
