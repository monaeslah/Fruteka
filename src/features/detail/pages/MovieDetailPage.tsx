import Image from 'next/image';
import { Container, PosterWrapper, Content, Title, Overview, BackLink } from './styles';
import { MovieMeta } from './metaMovie';
import { useRouter } from 'next/router';
import { MovieExtraInfo } from './MovieExtraInfo';

interface MovieDetailProps {
    overview: string;
    title: string;
    poster_path: string;
    release_date: string;
    backdrop_path: string;
    runtime: number;
    vote_average: number;
}
export default function MovieDetailPage({ movie }: { movie: MovieDetailProps }) {
    const router = useRouter();
    console.log('MovieDetailPage', movie);
    const handleBack = () => {
        router.back();
    };

    return (
        <Container>
            <PosterWrapper>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    layout="fill"
                    objectFit="cover"
                    priority
                />
            </PosterWrapper>

            <Content>
                <Title>{movie.title}</Title>
                <MovieMeta
                    releaseDate={movie.release_date}
                    runtime={movie.runtime}
                    rating={movie.vote_average}
                    certification="PG-13"
                />
                <Overview>{movie.overview}</Overview>
                <MovieExtraInfo
                    director="Matt Reeves"
                    stars={['Robert Pattinson', 'Zoe Kravitz', 'Paul Dano']}
                    genres={['Action', 'Crime', 'Drama']}
                />
            </Content>

            <BackLink onClick={handleBack}> Back to List</BackLink>
        </Container>
    );
}
