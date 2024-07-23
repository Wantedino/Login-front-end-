import React from "react";
import { ContainerItens as Container } from "./styles";

function ContainerItens({children, isBlur}){
    return <Container isBlue={isBlur}>{children}</Container>

}

export default ContainerItens