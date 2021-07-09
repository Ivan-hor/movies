// Core
import { Typography } from 'antd';

import { SectionWrapper, MainWrapper } from '../components/styles';
import { Header } from '../components';

const { Title } = Typography;

export const Greeting = () => {
    return (
        <>
            <SectionWrapper className = 'ant-layout'>
                <Header />
                <MainWrapper className = 'ant-layout-content' />
            </SectionWrapper>
        </>
    );
};
