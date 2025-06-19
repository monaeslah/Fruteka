import { Container, MetaGroup, Tag, Rating, IMDbTag } from './styles';

interface MovieMetaProps {
    releaseDate: string;
    runtime: number;
    rating: number;
    certification?: string;
}

export const MovieMeta = ({ releaseDate, runtime, rating, certification }: MovieMetaProps) => {
    const year = releaseDate?.slice(0, 4) || '—';
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return (
        <Container>
            <MetaGroup>
                <Tag>{year}</Tag>
                {certification && <Tag>{certification}</Tag>}
                <Tag>{`${hours}h ${minutes}m`}</Tag>
            </MetaGroup>
            <Rating>
                {' '}
                <IMDbTag>IMDb</IMDbTag>
                {rating.toFixed(1)}
            </Rating>
        </Container>
    );
};
