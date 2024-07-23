import styled from "styled-components";
import Background from '../../assets/fundo1.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;

    height: 100vh;
`;

export const Img = styled.img`
    margin-top: 30px;

`

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    margin-left: 25px;
`;

export const Input = styled.input`
    display: inline-flex;
    padding: 15px 20px 15px 25px;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 209px;
    margin-bottom: 34px;
    
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;


    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Button = styled.button`
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.80);
    margin-top: 140px;

    width: 342px;
    height: 74px;
    flex-shrink: 0;
    border: none;
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
`
