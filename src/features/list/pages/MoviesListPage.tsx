import MovieCard from '../components/MovieCard';
import { useState } from 'react';
interface Movie {
    id: number;
    title: string;
    poster_path: string;
}
export default function MoviesListPage({ movies }: { movies: Movie[] }) {
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 8;
    const filteredMovies = movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()),
    );
    const startIndex = (currentPage - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const currentMovies = filteredMovies.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);
    return (
        <div
            style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '2rem 1rem',
                fontFamily: 'sans-serif',
            }}
        >
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>
                Browse Movies
            </h1>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setCurrentPage(1);
                    }}
                    style={{
                        padding: '0.75rem 1rem',
                        fontSize: '1rem',
                        width: '90%',
                        maxWidth: '400px',
                        borderRadius: '8px',
                        border: '1px solid #ccc',
                    }}
                />
            </div>

            {filteredMovies.length > 0 ? (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                        gap: '1.5rem',
                    }}
                >
                    {currentMovies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: 'center', color: '#777' }}>No movies found.</p>
            )}
            {totalPages > 1 && (
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        style={{
                            padding: '0.5rem 1rem',
                            marginRight: '1rem',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                            backgroundColor: '#f5f5f5',
                        }}
                    >
                        Previous
                    </button>
                    <span style={{ fontSize: '1rem' }}>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        style={{
                            padding: '0.5rem 1rem',
                            marginLeft: '1rem',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                            backgroundColor: '#f5f5f5',
                        }}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
