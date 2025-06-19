import Link from 'next/link';
import { Card, MovieTitle } from './styles';
import Image from 'next/image';
// TODO Replace any with a proper type for movie
// TODO Edit the component
interface Movie {
    id: number;
    title: string;
    poster_path: string;
}
export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <Link href={`/movie/${movie.id}`} passHref>
            <Card>
                <Image
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    style={{ maxWidth: '100%' }}
                    width={200}
                    height={300}
                />
                <MovieTitle>{movie.title}</MovieTitle>
            </Card>
        </Link>
    );
}
