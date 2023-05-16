import React from 'react';

import { ContainerItens as Container} from  './styles';

function ContainerItens({children,isRed}){

    return <Container isRed={isRed}>{children}</Container>
}

export default ContainerItens