import styled from 'styled-components';

export const AreaRankings = styled.div`
    margin: 20px 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    @media(max-width: 1450px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 1200px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
