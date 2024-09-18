import { ColorKeys } from "../../types/ColorTypes";
import styled from "styled-components";

interface StackProps {
  full?: boolean;
  justify?: "flex-end" | "center" | "space-between";
  align?: "flex-end" | "center";
  spacing?: number;
  padding?: string;
  background?: ColorKeys;
}

const Stack = styled.div<StackProps>`
  display: flex;
  ${({ full }) => full && "width: 100%"};
  ${({ spacing }) => spacing && `gap: ${spacing}px`};
  padding: ${({ padding }) => padding};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
  background-color: ${({ theme, background }) => theme.color[background!]};
`;

export const HStack = styled(Stack)`
  flex-direction: row;
`;

export const VStack = styled(Stack)`
  flex-direction: column;
`;
