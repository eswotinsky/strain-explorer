import React from 'react';
import PropTypes from 'prop-types';
import '../css/Pagination.css';

function Pagination(props) {
  return (
    <div className="pagination">
      <ul>
        <li>
          <a onClick={() => props.onPageChange(1)}>First</a>
        </li>
        <li>
          <a onClick={() => props.onPageChange(props.currentPage - 1)}>«</a>
        </li>

        {props.visiblePages.map((page, index) =>
          <li key={index} className={props.currentPage === page ? 'active' : ''}>
            <a onClick={() => props.onPageChange(page)}>{page}</a>
          </li>
        )}

        <li>
          <a onClick={() => props.onPageChange(props.currentPage + 1)}>»</a>
        </li>
        <li>
          <a onClick={() => props.onPageChange(props.pageCount)}>Last</a>
        </li>
      </ul>
    </div>
  );
}

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  visiblePages: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}

export default Pagination;
