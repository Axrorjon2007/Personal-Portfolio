import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 5px 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  transition: all ease-in-out 400ms;
  margin-right: 60px;
  &:hover {
    color: #5730E2;
  }
  &.active {
    color: #5730E2;
  }
`;
