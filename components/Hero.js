import styled from 'styled-components';
import Container from "../styles/container";

import Logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <Background>
      <Container>
        <a href="/"><LogoImg src={Logo} alt="urstup.id logo" /></a>

        <p>a friendly way to remind ur friends what they are</p>
      </Container>
    </Background>
  )
}

const Background = styled.div`
  background-image: linear-gradient(141deg, #4AADCC 0%, #24749D 100%);
  padding: 80px 0;
  text-align: center;

  p {
    color: ${({theme}) => theme.colors.white};
  }
`;

const LogoImg = styled.img`
  max-width: 280px;
  width: 100%;
  margin: 0 auto 24px;
  display: block;
`;

export default Hero;