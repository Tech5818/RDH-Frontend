import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <Container></Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 20vh;
  background: ${({ theme }) => theme.color.light_grey};
`;
