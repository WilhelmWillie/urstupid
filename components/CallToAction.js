import styled from 'styled-components';
import Container from "../styles/container";

const CallToAction = ({ children, friendName }) => {
  return (
    <Background>
      <Container>
        <p>want to get back at {friendName}? send them a urstup.id message</p>

        <a href="/" className="button">get back at em</a>
      </Container>

      {children}
    </Background>
  )
}

const Background = styled.div`
  background: ${({theme}) => theme.colors.dark};
  padding: 132px 0 32px;
  text-align: center;

  h1 {
    margin-bottom: 16px;
  }

  p {
    color: ${({theme}) => theme.colors.white};
  }

  a.button  {
    display: inline-block;
    margin-top: 32px;
    text-decoration: none;
    border: 2px solid ${({theme}) => theme.colors.white};
    background: transparent;
  }
`;

export default CallToAction;