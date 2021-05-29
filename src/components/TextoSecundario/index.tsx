import { FC } from "react";
import { Container } from './styles';

const TextoSecundario: FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default TextoSecundario;