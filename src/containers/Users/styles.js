import styled from "styled-components";
import Background from '../../assets/fundo2.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;

    height: 100vh;
    min-height: 100vh;
`;

export const Img = styled.img`
    margin-top: 30px;

`

export const User = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;

    width: 342px;
    height: 58px;

    p{
        color: #FFF;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    button{
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }
`
export const Button = styled.button`
    border-radius: 14px;
    background-color: transparent;
    margin-top: 140px;

    width: 342px;
    height: 74px;
    flex-shrink: 0;
    border: 1px solid #FFF;
    outline: none;
    cursor: pointer;


    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 13px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
    
    img{
        transform: rotate(180deg);
    }
`


