import type { ColorKeys } from "../../types/ColorTypes";
import styled from "styled-components";

interface TypograhpyProps {
  color: ColorKeys;
  align?: "center" | "left" | "right";
}

const Base = styled.p<TypograhpyProps>`
  color: ${({ color, theme }) => theme.color[color]};
  font-family: "Pretendard";
  text-align: ${({ align }) => align};
`;

const Menu = styled(Base)`
  font-size: 18px;
  font-weight: 800;
`;

const LargeTitle = styled(Base)`
  font-size: 80px;
  font-weight: 600;
`;

const SubTitle = styled(Base)`
  font-size: 32px;
  font-weight: 600;
`;

const Typograhpy = {
  Menu,
  LargeTitle,
  SubTitle,
};

export default Typograhpy;
