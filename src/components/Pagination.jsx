import React from 'react'

const Pagination = ({ countriesPerPage, totalCountries, paginate, currentPage }) => {

    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalCountries / countriesPerPage); index++) {
        pageNumbers.push(index)
    }

    return (
        <section className="pagination">
            {
                pageNumbers.map((pageNumber, index) => {

                    return (
                        <li className="page-item" key={pageNumber}>
                            <a href='!#' className={index === currentPage - 1 ? 'active page-link' : 'page-link'} onClick={() => paginate(pageNumber)}>{pageNumber}</a>
                        </li>
                    )
                })
            }
        </section>
    )
}

export default Pagination
