import Image from 'next/image';
import {
    Container,
    PosterWrapper,
    Content,
    Title,
    Overview,
    BackLink,
    MainContent,
} from './styles';
import { MovieMeta } from './metaMovie';
import { useRouter } from 'next/router';
import { MovieExtraInfo } from './MovieExtraInfo';
import { useEffect, useState } from 'react';

interface MovieDetailProps {
    overview: string;
    title: string;
    poster_path: string;
    release_date: string;
    backdrop_path: string;
    runtime: number;
    vote_average: number;
    director?: string;
    cast?: string[];
    genres: { id: number; name: string }[];
}
export default function MovieDetailPage({ movie }: { movie: MovieDetailProps }) {
    const router = useRouter();

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleBack = () => {
        router.back();
    };
    const backdropUrl = !isMobile
        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        : '';
    return (
        <Container background={backdropUrl}>
            {isMobile && (
                <PosterWrapper>
                    <Image
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'top', zIndex: -1 }}
                    />
                </PosterWrapper>
            )}
            <Content>
                <MainContent>
                    <Title>{movie.title}</Title>
                    <MovieMeta
                        releaseDate={movie.release_date}
                        runtime={movie.runtime}
                        rating={movie.vote_average}
                        certification="PG-13"
                    />
                    <Overview>{movie.overview}</Overview>
                </MainContent>
                <MovieExtraInfo
                    director={movie.director || 'Director no disponible'}
                    stars={
                        movie.cast && movie.cast.length > 0
                            ? movie.cast
                            : ['Actores no disponibles']
                    }
                    genres={
                        movie.genres.length > 0
                            ? movie.genres.map((genre) => genre.name)
                            : ['No genres available.']
                    }
                />
            </Content>

            <BackLink onClick={handleBack}> Back to List</BackLink>
        </Container>
    );
}
