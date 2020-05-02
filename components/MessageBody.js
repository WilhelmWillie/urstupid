import styled from 'styled-components';
import Container from "../styles/container";

const MessageBody = ({ message }) => {
  return (
    <Background>
      <Container>
        <BodyContainer>
          <h2>ur stupid!</h2>

          <h3>why are u stupid? because…</h3>

          <p>{message}</p>
        </BodyContainer>
      </Container>
    </Background>
  )
}

const Background = styled.div`
  padding: 20vh 0;
  text-align: center;
`;

const BodyContainer = styled.div`
  border: 1px solid ${({theme}) => theme.colors.accent};
  color: ${({theme}) => theme.colors.accent};
  padding: 64px 32px;

  h2, h3 {
    color: ${({theme}) => theme.colors.accent};
  }

  h2 {
    font-size: 64px;
    font-weight: 700;
    line-height: 80px;
    margin-bottom: 16px;
  }

  h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 24px;
  }
`;

export default MessageBody;