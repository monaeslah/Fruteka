import MovieCard from '../components/MovieCard';
import { useState } from 'react';
interface Movie {
    id: number;
    title: string;
    poster_path: string;
}
export default function MoviesListPage({ movies }: { movies: Movie[] }) {
    const [query, setQuery] = useState('');
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()),
    );
    return (
        <>
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    padding: '0.5rem',
                    margin: '1rem',
                    width: '100%',
                    maxWidth: '400px',
                }}
            />
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1rem',
                    padding: '1rem',
                }}
            >
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </>
    );
}
