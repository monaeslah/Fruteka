import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: rgb(0, 0, 0);
    color: #f0f4f8;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const PosterWrapper = styled.div`
    flex: 0 0 auto;
    width: 100%;
    max-width: 300px;
    position: relative;
    aspect-ratio: 2 / 3;
    border-radius: 10px;
    overflow: hidden;
    margin: 0 auto;
`;

export const Content = styled.div`
    flex: 1;
    padding: 0 1rem;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

export const Overview = styled.p`
    font-size: 1rem;
    line-height: 1.6;
`;
