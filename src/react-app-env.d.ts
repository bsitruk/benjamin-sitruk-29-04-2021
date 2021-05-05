/// <reference types="react-scripts" />

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "react-headroom" {
  const Headroom: React.ComponentClass<{ wrapperStyle?: any }>;
  export default Headroom;
}
