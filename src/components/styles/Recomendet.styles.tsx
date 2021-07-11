import styled from 'styled-components';

export const TableWrap = styled.section`
  .ant-table-cell {
    padding: 8px 8px;
  }
 
  .ant-table-cell.nowrap {
    white-space: nowrap;
  }
  .ant-table-cell.overflow-ellipsis {
    overflow:     hidden;
    text-overflow: ellipsis;
  } 
`;
