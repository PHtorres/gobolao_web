import { FC } from "react";
import { Container } from './styles';

const TextoDestaque: FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default TextoDestaque;