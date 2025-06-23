import styled from 'styled-components';
interface ContainerProps {
    background: string;
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 0;
    gap: 1rem;
    background-color: rgb(0, 0, 0);
    @media (min-width: 768px) {
    background-image: url(${(props) => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
   
    align-items: flex-start;
    color: rgb(255, 255, 255);
 height: 100vh;
 overflow: hidden;

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
    @media (min-width: 768px) {
        margin: 0;
    }
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    flex: 1;
    justify-content: space-between;
    padding: 0 1rem;
    color: #898989;
`;
export const MainContent= styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width:40%;
    margin-left: auto;
    margin-top: 7rem;
        margin-right: 3rem;
    @media (min-width: 768px) {
        align-items: flex-start;
        gap: 2rem;
    }
        `
export const Title = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: rgb(255, 255, 255);
`;

export const Overview = styled.p`
    font-size: 1rem;
    line-height: 1.6;
    @media (min-width: 768px) {
        color: rgb(255, 255, 255);
    }
`;
export const BackLink = styled.button`
    all: unset;
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-size: 1rem;
    margin: 0 auto;
    margin-bottom: 1rem;
    text-decoration: underline;
    align-self: flex-start;
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
    @media (min-width: 768px) {
        display: none;
    }
`;
