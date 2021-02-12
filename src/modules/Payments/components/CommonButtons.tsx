import styled from "styled-components";

const BaseButton = styled.button`
    outline:none !important;
    width:100%;
    padding:10px;
`

export const PaymentButtonBase = styled(BaseButton)`
    background-color:var(--primary-color);
    color:white;
`

export const CancelPaymentButtonBase = styled(BaseButton)`
    border:2px solid var(--text-message-color-neutral);
    color:var(--text-message-color-neutral);
`
