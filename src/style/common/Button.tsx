import styled from "styled-components";
import type { ColorKeys } from "../../types/ColorTypes";
import { ReactNode } from "react";

interface ButtonProps {
  background?: ColorKeys;
  children?: ReactNode;
  padding?: string;
  color?: ColorKeys;
  full?: boolean;
  radius?: number;
}

export const Button = (props: ButtonProps) => {
  return (
    <>
      <Container
        $background={props.background}
        $color={props.color}
        $padding={props.padding}
        $full={props.full}
        $radius={props.radius}
      >
        {props.children}
      </Container>
    </>
  );
};

interface ButtonStyle {
  $background?: ColorKeys;
  $children?: ReactNode;
  $padding?: string;
  $color?: ColorKeys;
  $full?: boolean;
  $radius?: number;
}

const Container = styled.button<ButtonStyle>`
  background-color: ${({ theme, $background }) => theme.color[$background!]};
  color: ${({ theme, $color }) => theme.color[$color!]};
  padding: ${({ $padding }) => $padding};
  width: ${({ $full }) => ($full ? "100%" : "auto")};
  border-radius: ${({ $radius }) => `${$radius}px`};

  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
