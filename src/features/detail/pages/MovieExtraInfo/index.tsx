import { Container, Row, Label, Value } from './styles';

interface MovieExtraInfoProps {
    director: string;
    stars: string[];
    genres: string[];
}

export const MovieExtraInfo = ({ director, stars, genres }: MovieExtraInfoProps) => {
    return (
        <Container>
            <Row>
                <Label>Director</Label>
                <Value>{director || '—'}</Value>
            </Row>
            <Row>
                <Label>Stars</Label>
                <Value>{stars?.join(', ') || '—'}</Value>
            </Row>
            <Row>
                <Label>Genres</Label>
                <Value>{genres?.join(', ') || '—'}</Value>
            </Row>
        </Container>
    );
};
