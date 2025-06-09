import { GetServerSideProps } from 'next';
import apiClient from '@/lib/apiClient';
import MovieDetailPage from '@/features/detail/pages/MovieDetailPage';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!;
    const { data: movie } = await apiClient.get(`/movie/${id}`);
    return { props: { movie } };
};

export default MovieDetailPage;
