import { useState, useRef } from "react";

import styled from 'styled-components';

import Container from  "../styles/container";
import Modal from "./Modal";

const Form = () => {
  const [showModal, setShowModal] = useState(true);
  const [link, setLink] = useState(null);
  const [error, setError] = useState(null);

  const linkInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetName = e.currentTarget.targetName.value;
    const fromName = e.currentTarget.fromName.value;
    const message = e.currentTarget.message.value;

    // Validate
    if (!targetName || targetName.length === 0) {
      setError("please fill out the 'who is stupid' field");
      return;
    }

    if (!fromName || fromName.length === 0) {
      setError("please fill out the 'whats ur name' field");
      return;
    }

    if (!message || message.length === 0) {
      setError("please fill out the 'message' field");
      return;
    }

    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }

  const copyLink = () => {
    if (linkInput.current) {
      const linkInputElement = linkInput.current;

      linkInputElement.select();
      linkInputElement.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
  }

  return (
    <>
      <Container>
        <FormCard>
          <form onSubmit={handleSubmit}>
            <h2>who is stupid</h2>
            <span>64 characters max</span>
            <input name="targetName" type="text" placeholder="ur friend's name" maxLength="64" required />

            <Space />

            <h2>whats ur name</h2>
            <span>64 characters max</span>
            <input name="fromName" type="text" placeholder="ur name" maxLength="64" required />

            <Space />

            <h2>why are they stupid</h2>
            <span>280 characters max</span>
            <textarea name="message" rows={3} placeholder="because they just are" maxLength="280" required />

            <button type="submit">let them know</button>
          </form>
        </FormCard>
      </Container>

      <Modal showModal={showModal} closeModal={closeModal} width={600}>
        <LinkShareModalBody>
          <h2>let em know!</h2>

          <p>share this link to ur friends to send them a message</p>

          <CopyLink>
            <input type="text" value="https://urstup.id/XYZABC" onClick={(e) => e.currentTarget.select()} ref={linkInput} />
            <button onClick={copyLink}>copy</button>
          </CopyLink>
        </LinkShareModalBody>
      </Modal>
    </>
  )
}

const FormCard = styled.div`
  background: ${({theme}) => theme.colors.white};
  padding: 32px;
  box-sizing: border-box;
  box-shadow: 1px 2px 6px 0 rgba(0,0,0,0.29);
  border-radius: 6px;
  margin-top: -32px;

  span {
    font-size: 12px;
  }

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

const LinkShareModalBody = styled.div`
  h2 {
    margin-bottom: 16px;
  }

  p {
    font-size: 24px;
  }
`;

const CopyLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  input {
    flex-grow: 1;
    margin-right: 16px;
    font-size: 22px;
  }
`;

export default Form;