import styled from 'styled-components'

import CloseIcon from '@material-ui/icons/Close';

import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const SidebarContainer = styled.aside`
position : 'fixed';
z-index : 999;
width: 100%;
    height :100%;
    background: #0000 ;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease ease-in-out;
    /* opacity: ${({ isOpen }) => (isOpen ? '100%' : '0' )} ; */
    /* top : ${({ isOpen }) => (isOpen ? '0' : '-100')}; */
    /* top:0; */

`;

export const ClosetheIcon = styled(CloseIcon)`
    color : '#fff';
    font-size : 'large';
`

export const Icon = styled.div`
position: absolute;
   top: 1.2rem;
   right: 1.5rem;
   background: transparent;
   font-size: 2rem;
   cursor: pointer;
   outline: none;
`


export const SidebarWrapper = styled.div `
color : '#fff'
`

export const SidebarMenu = styled.ul`
    display : 'grid';
    grid-template-columns : 1fr;
    grid-template-rows : repeat(6 , 80px);
    text-align : center;

    @media screen and (max-width : 400px) {
        grid-template-rows : repeat(6 , 60px);
    }

`

export const SidebarLink = styled(LinkS)`

display: flex;
    align-items: center;
    justify-content: center;
    font-size:1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    &.hover{
        color :'#014554';
        transition : 0.2s ease-in-out;

    }

    
`

export const SidebarBtn = styled.div`
display :'flex';
justify-content: center;
`

export const SidebarBtnLink = styled(LinkR)`

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
`

