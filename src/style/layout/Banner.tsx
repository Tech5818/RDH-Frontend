import styled from "styled-components";
import BannerPicture from "@assets/images/banner.jpg";
import Typograhpy from "@style/common/Typograhpy";

export const Banner = () => {
  return (
    <>
      <Container>
        <Slogan>
          <Typograhpy.LargeTitle color={"black"} align="center">
            도로 데이터들의 모든것
            <br />
            RDH와 함께
          </Typograhpy.LargeTitle>
        </Slogan>
        ``
      </Container>
    </>
  );
};

const Container = styled.div`
  background: url(${BannerPicture}) no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slogan = styled.div`
  margin-bottom: 450px;
  align-items: center;
`;
