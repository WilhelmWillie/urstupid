import styled from 'styled-components';

import Container from  "../styles/container";

const Form = () => {
  return (
    <Container>
      <FormCard>
        <form>
          <h2>who is stupid</h2>

          <input type="text" placeholder="ur friend's name" />

          <Space />

          <h2>why are they stupid</h2>

          <textarea rows={3} placeholder="because they just are" />

          <button type="submit">let them know</button>
        </form>
      </FormCard>
    </Container>
  )
}

const FormCard = styled.div`
  background: ${({theme}) => theme.colors.white};
  padding: 32px;
  box-sizing: border-box;
  box-shadow: 1px 2px 6px 0 rgba(0,0,0,0.29);
  border-radius: 6px;
  margin-top: -32px;

  input[type=text], textarea {
    width: 100%;
    margin-top: 16px;
  }

  button {
    display: block;
    margin-top: 24px;
    margin-left: auto;
  }
`;

// lmao sometimes you just gotta do it 🤷🏻‍♂️
const Space = styled.div`
  height: 32px;
`;

export default Form;