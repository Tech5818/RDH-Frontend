import styled from "styled-components";
import LogoPicture from "@assets/icons/Logo.svg";

export const Logo = () => {
  return (
    <>
      <Image src={LogoPicture} />
    </>
  );
};

const Image = styled.img``;
