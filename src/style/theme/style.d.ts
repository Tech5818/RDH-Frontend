import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      black: string;
      white: string;
      light_grey: string;
    };
  }
}
