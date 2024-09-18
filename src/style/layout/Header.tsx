import { Logo } from "@style/common/Logo";
import { GNB } from "@style/layout/GNB";
import { HeaderButtons } from "@style/layout/HeaderButtons";
import styled from "styled-components";

export const Header = () => {
  return (
    <>
      <Container>
        <HeaderBox>
          <GNB />
          <Logo />
          <HeaderButtons />
        </HeaderBox>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  padding: 20px;
  width: 100%;
`;

const HeaderBox = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 2px 10px -5px #000;
  border-radius: 20px;
  min-height: 60px;
`;
