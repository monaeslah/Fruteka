import styled from 'styled-components';

export const Container = styled.div`
    display: none;
    margin-bottom: 1rem;
    margin-left: 3rem;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;

        background: transparent;
        color: #fff;
        font-size: 0.9rem;
    }
`;

export const Row = styled.div`
    display: flex;
    gap: 1rem;
`;

export const Label = styled.span`
    font-weight: bold;
    width: 100px;
    color: #d4d4d4;
`;

export const Value = styled.span`
    color: #ffffff;
`;
