import Image from 'next/image';
import { Container, PosterWrapper, Content, Title, Overview } from './styles';
interface MovieDetailProps {
    overview: string;
    title: string;
    poster_path: string;
}
export default function MovieDetailPage({ movie }: { movie: MovieDetailProps }) {
    return (
        <Container>
            <PosterWrapper>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </PosterWrapper>
            <Content>
                <Title>{movie.title}</Title>
                <Overview>{movie.overview}</Overview>
            </Content>
        </Container>
    );
}
