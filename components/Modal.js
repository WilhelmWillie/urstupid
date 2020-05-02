import { useEffect } from "react";
import styled from "styled-components";

const Modal = ({ showModal, closeModal, children, width }) => {
  // Prevent scrolling when modal is shown
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showModal]);

  return showModal ? (
    <FullScreenWrapper>
      <Background onClick={closeModal} />

      <ModalBody width={width}>
        <Close onClick={closeModal}>✖️</Close>

        {children}
      </ModalBody>
    </FullScreenWrapper>
  ) : (
    null
  );
}

const FullScreenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  transition: 0.1s all;
`;

const ModalBody = styled.div`
  background: #FFFFFF;
  border-radius: 12px;
  z-index: 5;
  padding: 36px;
  text-align: left;
  max-height: 80vh;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    padding: 24px;
    max-height: 60vh;
    max-width: 70vw;
  }

  ${({width}) => width && `width: ${width}px;`}
`;

const Close = styled.a`
  display: block;
  text-align: right;
  margin-top: -12px;
  margin-right: -12px;
  cursor: pointer;
  font-size: 18px;
`;

export default Modal;