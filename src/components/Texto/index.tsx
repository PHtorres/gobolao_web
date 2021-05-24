import { FC } from "react";
import { Container } from './styles';

const Texto: FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default Texto;