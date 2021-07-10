import { HeaderWrapper } from '../components';
import { LatestMovies } from '../components/LatestMoviesTable';
import { SectionWrapper, MainWrapper } from '../components/styles';

export const LatestFilmPage = () => {
    return (
        <SectionWrapper className = 'ant-layout'>
            <HeaderWrapper />
            <MainWrapper className = 'ant-layout-content'>
                <div className = 'Toastify'></div>
                <LatestMovies />
            </MainWrapper>
        </SectionWrapper>
    );
};
