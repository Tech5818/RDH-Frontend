import { VStack } from "@style/common/Stack";
import Typograhpy from "@style/common/Typograhpy";
import { Banner } from "@style/layout/Banner";
import styled from "styled-components";

export const HomePage = () => {
  return (
    <>
      <Container>
        <Banner />
        <VStack justify="center" align="center" padding="200px 0">
          <Typograhpy.SubTitle color="black">
            RDH는 도로 데이터들의 분석과 시각화
            <br />
            뿐만 아니라 관련 데이터 추출까지 가능한 플랫폼입니다.
            <br />
            도로 데이터가 필요하다면 RDH와 함께하여
            <br />
            쉽고 빠르게 데이터를 얻어보세요.
          </Typograhpy.SubTitle>
        </VStack>
      </Container>
    </>
  );
};

const Container = styled.div``;
