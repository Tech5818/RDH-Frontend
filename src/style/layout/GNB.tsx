import Typograhpy from "@style/common/Typograhpy";
import styled from "styled-components";

export const GNB = () => {
  return (
    <>
      <Container>
        <Typograhpy.Menu color={"black"}>홈</Typograhpy.Menu>
        <Typograhpy.Menu color={"black"}>소개</Typograhpy.Menu>
        <Typograhpy.Menu color={"black"}>분석</Typograhpy.Menu>
        <Typograhpy.Menu color={"black"}>시각화</Typograhpy.Menu>
      </Container>
    </>
  );
};

const Container = styled.div`
  flex: 1;
  display: flex;
  gap: 60px;
  padding: 10px 30px;
`;
