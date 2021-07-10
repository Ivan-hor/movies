import styled from 'styled-components';

export const LatestMovieTableWrapper = styled.div`
    & span:nth-child(1) {
        margin-right: 12px;
        margin-bottom: 0;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    & span:nth-child(2) {
        margin-right: 12px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        line-height: 1.5715;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
`;
