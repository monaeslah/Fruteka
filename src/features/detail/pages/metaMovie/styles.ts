// features/detail/components/MovieMeta/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 0;
    flex-wrap: wrap;
    gap: 0.5rem;
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
`;

export const Rating = styled.span`
    font-size: 1.25rem;
    font-weight: bold;
    color: #f5c518;
`;
