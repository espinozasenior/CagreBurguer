import React, { FC } from 'react'
import ReactDOM from "react-dom"
import styled from 'styled-components';
import useChangeScrollingBody from '../../../shared/hooks/useChangeScrollingBody';

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, .6);
  position:fixed;
  left:0;
  top:0;
  display:flex;
  width:100%;
  height:100%;
`;

const Body = styled.section<{w?:string}>`
    background:white;
    margin:auto;
    width:${props => props.w || "350px"};
    padding:10px;
    border-radius:10px;
    display:inline-block;
    box-shadow:0 10px 20px rgba(0,0,0,.3);
    @media screen and (min-width:600px) {
      &::-webkit-scrollbar {
        width:10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color:#d6d6d6;
      }
    }
`;

const RootModal : FC<{w?:string}> = ({children,w}) => {
    const open = false;
    useChangeScrollingBody(open);
    const content = (
        <Backdrop role="alert">
            <Body w={w}>{children}</Body>
        </Backdrop>
    )

    return ReactDOM.createPortal(content,document.getElementById('root-portal') as HTMLDivElement);
}

export default RootModal
