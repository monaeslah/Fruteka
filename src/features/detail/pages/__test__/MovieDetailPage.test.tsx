import { render, screen } from '@testing-library/react';
import MovieDetailPage from '../MovieDetailPage';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';

jest.mock('next/image', () => (props: any) => {
    return <img {...props} />;
});

jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

const mockMovie = {
    title: 'Test Movie Title',
    overview: 'This is a test overview for the movie.',
    poster_path: '/test.jpg',
    release_date: '2023-01-01',
    runtime: 120,
    vote_average: 7.5,
};

test('renders movie detail page with correct data', () => {
    (useRouter as jest.Mock).mockReturnValue({
        back: jest.fn(),
    });

    render(<MovieDetailPage movie={mockMovie} />);

    expect(screen.getByText('Test Movie Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test overview for the movie.')).toBeInTheDocument();
    expect(screen.getByText('Back to List')).toBeInTheDocument();
});
