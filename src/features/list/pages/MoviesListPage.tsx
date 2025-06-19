import MovieCard from '../components/MovieCard';
interface Movie {
    id: number;
    title: string;
    poster_path: string;
}
export default function MoviesListPage({ movies }: { movies: Movie[] }) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                gap: '1rem',
                padding: '1rem',
            }}
        >
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}
