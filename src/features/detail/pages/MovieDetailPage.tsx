export default function MovieDetailPage({ movie }: { movie: any }) {
    return (
        <div style={{ padding: '1rem' }}>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ maxWidth: '100%' }}
            />
        </div>
    );
}
