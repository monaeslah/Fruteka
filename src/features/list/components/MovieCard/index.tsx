import Link from 'next/link';
import { Card, MovieTitle } from './styles';

// TODO Replace any with a proper type for movie
// TODO Edit the component
export default function MovieCard({ movie }: { movie: any }) {
    return (
        <Link href={`/movie/${movie.id}`} passHref>
            <Card>
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    style={{ maxWidth: '100%' }}
                />
                <MovieTitle>{movie.title}</MovieTitle>
            </Card>
        </Link>
    );
}
