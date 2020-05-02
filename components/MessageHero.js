import styled from 'styled-components';
import Container from "../styles/container";

const MessageHero = ({ targetName, fromName }) => {
  const scrollToBody = () => {
    const message = document.querySelector("#message-body");
    window.scrollTo({
      top: message.offsetTop,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <Background>
      <Container>
        <h1>hey {targetName}!</h1>

        <p>ur friend {fromName} wants to tell u something</p>

        <button onClick={scrollToBody}>see message</button>
      </Container>
    </Background>
  )
}

const Background = styled.div`
  background-image: linear-gradient(141deg, #4AADCC 0%, #24749D 100%);
  padding: 35vh 0;
  text-align: center;

  h1 {
    margin-bottom: 16px;
  }

  p {
    color: ${({theme}) => theme.colors.white};
  }

  button  {
    border: 2px solid ${({theme}) => theme.colors.white};
    background: transparent;
    margin-top: 32px;
  }
`;

export default MessageHero;