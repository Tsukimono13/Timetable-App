declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  declare module '*.module.sass' {
    const classes: { readonly [key: string]: string }
    export default classes
  }
  
  declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
  }

  declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  declare module '*.gif' {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    import React from "react";
    export const ReactComponent: React.VFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }