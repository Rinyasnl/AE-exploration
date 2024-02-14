import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

// Example to simulate obtaining the resources.
const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Articles({ currentArticles }) {
    return (
        <>
            {currentArticles &&
                currentArticles.map((article) => (
                    <div key={article}>
                        <h3>Article #{article}</h3>
                    </div>
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage }) {
    const [currentItems, setCurrentItems] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(elements.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(elements.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage;
        console.log(`User requested page number ${event.selected}, offset by ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <Articles currentArticles={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

ReactDOM.render(
    <PaginatedItems itemsPerPage={4} />,
    document.getElementById('container')
);
