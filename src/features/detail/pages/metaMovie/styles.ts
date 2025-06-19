import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    flex-wrap: wrap;
    gap: 0.5rem;
    @media (min-width: 768px) {
        flex-direction: column;
    }
`;

export const MetaGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

export const Tag = styled.span`
    color: #898989;
    font-size: 0.875rem;
    padding: 0.2rem 0.6rem;
    border-radius: 6px;
    @media (min-width: 768px) {
        color: #d4d4d4;
        font-size: 0.75rem;
        padding: 0.25rem 0.75rem;
        border: 1px solid #444;
        background-color: rgba(255, 255, 255, 0.05);
        font-weight: 500;
    }
    }
`;

export const Rating = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    color: #f5c518;
`;
export const IMDbTag = styled.span`
    display: none;

    @media (min-width: 768px) {
        display: inline-flex;
        align-items: center;
        background-color: #f5c518;
        color: #000;
        font-weight: bold;
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border-radius: 4px;
        margin-right: 0.5rem;
    }
`;
