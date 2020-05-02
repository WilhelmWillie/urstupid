import styled from "styled-components";

import Container from  "../styles/container";

const Footer = ({ isDark }) => {
  return (
    <FooterContainer isDark={isDark}>
      <p>
        made for fun. pls use lightly and responsibly.
      </p>

      <p>
        ✨🥺🚀
      </p>
    </FooterContainer>
  )
}

const FooterContainer = styled(Container)`
  margin-top: 100px;
  margin-bottom: 64px;

  p {
    max-width: 260px;
    width: 80%;
    margin: 32px auto;
    text-align: center;
  }

  ${({isDark, theme}) => isDark && `
    color: ${theme.colors.white};
  `}
`;

export default Footer;