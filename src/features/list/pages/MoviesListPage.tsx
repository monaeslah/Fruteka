import MovieCard from '../components/MovieCard';

export default function MoviesListPage({ movies }: { movies: any[] }) {
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
