import { Button } from "@style/common/Button";
import Typograhpy from "@style/common/Typograhpy";
import styled from "styled-components";

export const HeaderButtons = () => {
  return (
    <>
      <Container>
        <Button
          background="black"
          color="white"
          radius={20}
          padding="10px 25px"
        >
          <Typograhpy.Menu>로그인</Typograhpy.Menu>
        </Button>
      </Container>
    </>
  );
};

const Container = styled.div`
  flex: 1;
  padding: 10px 30px;
  display: flex;
  justify-content: flex-end;
`;
