import { render, screen } from '@testing-library/react';
import MovieCard from '../index';
import '@testing-library/jest-dom';

const movie = {
    id: 1,
    title: 'Test Movie',
    poster_path: '/test.jpg',
};

test('renders movie card with title', () => {
    render(<MovieCard movie={movie} />);
    expect(screen.getByText('Test Movie')).toBeInTheDocument();
});
