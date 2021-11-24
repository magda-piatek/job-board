export type TRouteData = {
  component: React.ComponentType<any> | React.ReactNode;
  props: {
    path: string;
    exact?: boolean;
    private?: boolean;
  };
};
