import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: rgba(240, 240, 240, 1);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 320px ) {
      width: 100%;
    }
  a {
    margin-top: 2rem;
    outline: none;
    font-size: 1rem;
    text-transform: uppercase;
    // padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: rgba(51, 51, 51, 1);
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: 968px}) {
      font-size: 1.2rem;
      text-align: center;
    }
    &:hover {
      color: rgba(224, 23, 131, 1);
    }
  }
`;