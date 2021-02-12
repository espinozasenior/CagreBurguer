import styled, { keyframes } from "styled-components";
const keyframesRotate = keyframes`
    from {
        transform:rotate(-360deg);
    }
`

export default styled.div`
    width:40px;
    height:40px;
    border-radius:100%;
    margin:auto;
    border:3px solid rgba(0,0,0,.08);
    border-left:3px solid var(--primary-color);
    animation:${keyframesRotate} .5s infinite linear;
`