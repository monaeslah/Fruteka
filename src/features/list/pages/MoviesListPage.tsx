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
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
                Browse Movies
            </h1>
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
                {filteredMovies.length > 0 ? (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '1.5rem',
                        }}
                    >
                        {filteredMovies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                ) : (
                    <p style={{ textAlign: 'center', color: '#777' }}>No movies found.</p>
                )}
            </div>
        </>
    );
}
