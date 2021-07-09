// Core
import { Typography } from 'antd';

import { SectionWrapper, MainWrapper } from '../components/styles';
import { HeaderWrapper } from '../components';

const { Title } = Typography;

export const Greeting = () => {
    return (
        <>
            <SectionWrapper className = 'ant-layout'>
                <HeaderWrapper />
                <MainWrapper className = 'ant-layout-content' />
            </SectionWrapper>
        </>
    );
};
