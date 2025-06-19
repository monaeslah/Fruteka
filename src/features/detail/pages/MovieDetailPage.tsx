import Image from 'next/image';
import { Container, PosterWrapper, Content, Title, Overview, BackLink } from './styles';
import { MovieMeta } from './metaMovie';
import { useRouter } from 'next/router';

interface MovieDetailProps {
    overview: string;
    title: string;
    poster_path: string;
    release_date: string;
    runtime: number;
    vote_average: number;
}
export default function MovieDetailPage({ movie }: { movie: MovieDetailProps }) {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

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

            <MovieMeta
                releaseDate={movie.release_date}
                runtime={movie.runtime}
                rating={movie.vote_average}
                certification="PG-13"
            />
            <Content>
                <Title>{movie.title}</Title>
                <Overview>{movie.overview}</Overview>
            </Content>
            <BackLink onClick={handleBack}> Back to List</BackLink>
        </Container>
    );
}
