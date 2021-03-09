import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { Navbar as NavbarOriginal, Nav, Icon } from 'rsuite';
import { Icon } from 'rsuite';

export function Navbar() {
  return (
    <Wrapper>
      <Logo>Movies</Logo>
      <Item>
        <Link to="/">
          <Icon icon="home" style={{ paddingRight: 5 }} />
          Home
        </Link>
      </Item>
      <Item>
        <Link to="/about">
          <Icon icon="star" style={{ paddingRight: 5 }} />
          About
        </Link>
      </Item>
    </Wrapper>
    // <NavbarOriginal>
    //   <NavbarOriginal.Header>
    //     <Wrapper>
    //       <Logo>Movies</Logo>
    //     </Wrapper>
    //   </NavbarOriginal.Header>
    //   <NavbarOriginal.Body>
    //     <Nav>
    //       <Link to="/">
    //         <Nav.Item componentClass="div" icon={<Icon icon="home" />}>
    //           Home
    //         </Nav.Item>
    //       </Link>
    //       <Link to="/about">
    //         <Nav.Item componentClass="div" icon={<Icon icon="home" />}>
    //           About
    //         </Nav.Item>
    //       </Link>
    //     </Nav>
    //   </NavbarOriginal.Body>
    // </NavbarOriginal>
  );
}

const Wrapper = styled.nav`
  width: 100vw;
  height: 3.5rem;
  background-color: #1a1d24;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.6);
    padding: 1.2rem 10px;
  }

  a:hover {
    color: rgba(255, 255, 255, 0.9);
    background-color: #292c33;
  }
`;

// const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
// `;

const Logo = styled.p`
  padding: 0 16px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.6);
`;
