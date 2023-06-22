import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgba(173 ,216 ,230,.5);
  font-size: 18px;
  width:15rem;
  margin-left: auto;
  right:0;
  z-index:70;
  height:0;
  overflow:visible;
  border: 1px solid rgba(0,0,0,0.2);
  @media (min-width: 768px) {
    display: flex;
    margin: unset;
    width:unset;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
    z-index: 99;
  }
`;

export const NavLink = styled(Link)`
  color: blue;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  background-color:lightblue;
  border-radius:4px;
  z-index:99;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    margin: 5px;
    right: .7rem;
    font-size: 2.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  list-style-type: none;
  background-color:rgba(173 ,216 ,230,.9);
  display: none;
  padding:18px;
  padding-right:0;
  flex-direction: column;
  border-radius:4px;
  z-index:98!important;
  position:relative;
  @media (min-width: 768px) {
    padding:0px;
    display: flex !important;
    flex-direction: row;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: RGBA(150,190,255);
  padding: 10px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  min-width:60px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  margin-left: 24px;
  &.active {
  background: #ffff;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
  
    @media (max-width: 768px) {
    display: flex;
    justify-content:right;
    padding-right: 16px;
    font-size: 1.5rem;
    margin:5px;
    margin-right: 4.5rem;
    margin-top:5px;
  }
`;


