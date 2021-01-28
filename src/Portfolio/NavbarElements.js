import styled from 'styled-components'

import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
background-color: transparent;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
/* font-family: "Agustina Regular"; */
  font-weight: bold;
  padding: 0 10px;
`

export const MobileIcon = styled.div `
    display : none;

    @media screen and (max-width : 768px){
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100% , 60% );
        font-size: 1.8rem;
        cursor: pointer;
        color : #fff;
    }
`


export const NavMenu = styled.ul `
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width : 768px) {
    display: none;
}

`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS) `
color : #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 50%;
cursor: pointer;
margin-top : 20px;

&.active {
    border-bottom : 3px solid #01bf71;
}

`;


export const NavBtn = styled.nav`
display: flex;
align-items: center;
padding-left : 20px;


@media screen and (max-width : 760px) {
    display: none;
}
`;



export const NavBtnLink = styled(LinkR)`

border-radius: 50px;
background: #E8BD0D;
white-space:  nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;


&.hover {
    transition: all 0.2s ease-in-out;
   background: #fff;
   color : '010606'
}
`;
