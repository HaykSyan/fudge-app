import { memo } from "react";
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = ({page, prevPage, nextPage, totalPages, hasNextPage, hasPrevPage, setPage, ...rest}) => (
    <Pagination>
        <Pagination.Prev onClick={() => setPage(prevPage)} disabled={!hasPrevPage} active={hasPrevPage} />
        {[...Array(totalPages)].map((e, i) => (
            <Pagination.Item onClick={() => setPage(i+1)} key={i} active={page === i + 1}>{i + 1}</Pagination.Item>
        )) }
        <Pagination.Next onClick={() => setPage(nextPage)} disabled={!hasNextPage} active={hasNextPage} />
    </Pagination>
);

export default memo(PaginationComponent);
