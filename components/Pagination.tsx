import { useState, useEffect } from 'react';
import type { NextPage } from 'next';

interface Props {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PrevIcon = () => (
  <svg className="pagination__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
)

const NextIcon = () => (
  <svg className="pagination__button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
)

const Pagination: NextPage<Props> = ({ currentPage, setCurrentPage }) => {
  const [pageNumberRange, setPageNumberRange] = useState(5);
  const [initialPagesNumber, setInitialPagesNumber] = useState([2,3,4,5]);
  const [screenSize, setScreenSize] = useState(0);
  const pageNumbers = 20;

  useEffect(() => {
    let numbers = [];
    for (let i = 2; i <= pageNumberRange; i++) {
      numbers.push(i);
    }
    setInitialPagesNumber(numbers);
  }, [pageNumberRange]);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize >= 1024) setPageNumberRange(8);
    else setPageNumberRange(5);
  }, [screenSize])

  return (
    <div className="pagination">
      <button className="pagination__button" onClick={() => setCurrentPage((prev) => prev - 1)} disabled={currentPage === 1}><PrevIcon /></button>
      <button className={`pagination__button ${currentPage === 1 && 'active'}`} onClick={() => setCurrentPage(1)}>1</button>
      {currentPage < pageNumberRange && (
        initialPagesNumber.map((page) => (
          <button key={page} className={`pagination__button ${currentPage === page && 'active'}`} onClick={() => setCurrentPage(page)}>{page}</button>
        ))
      )}
      {currentPage >= pageNumberRange && currentPage < pageNumbers - (Math.round(pageNumberRange/2) -1) && (
        <>
          <button className="pagination__button" onClick={() => setCurrentPage((prev) => prev - (Math.round(pageNumberRange/2) -1))}>...</button>
          {screenSize >= 1024 && (<button className="pagination__button" onClick={() => setCurrentPage(currentPage - 2)}>{currentPage - 2}</button>)}
          <button className="pagination__button" onClick={() => setCurrentPage(currentPage - 1)}>{currentPage - 1}</button>
          <button className="pagination__button active">{currentPage}</button>
          <button className="pagination__button" onClick={() => setCurrentPage(currentPage + 1)}>{currentPage + 1}</button>
          {screenSize >= 1024 && (<button className="pagination__button" onClick={() => setCurrentPage(currentPage + 2)}>{currentPage + 2}</button>)}
        </>
      )}
      {currentPage >= pageNumbers - (Math.round(pageNumberRange/2) -1) ? (
        <>
          <button className="pagination__button" onClick={() => setCurrentPage((prev) => prev - (Math.round(pageNumberRange/2) -1))}>...</button>
          {screenSize >= 1024 && (<button className="pagination__button" onClick={() => setCurrentPage(pageNumbers - 4)}>{pageNumbers-4}</button>)}
          <button className={`pagination__button ${currentPage === pageNumbers - 3 && 'active'}`} onClick={() => setCurrentPage(pageNumbers-3)}>{pageNumbers-3}</button>
          <button className={`pagination__button ${currentPage === pageNumbers - 2 && 'active'}`} onClick={() => setCurrentPage(pageNumbers-2)}>{pageNumbers-2}</button>
          <button className={`pagination__button ${currentPage === pageNumbers - 1 && 'active'}`} onClick={() => setCurrentPage(pageNumbers-1)}>{pageNumbers-1}</button>
        </>
      ) : (
        <button className="pagination__button" onClick={() => setCurrentPage((prev) => prev + (Math.round(pageNumberRange/2)))}>...</button>
      )} 
      <button className={`pagination__button ${currentPage === pageNumbers && 'active'}`} onClick={() => setCurrentPage(pageNumbers)}>{pageNumbers}</button>
      <button className="pagination__button" onClick={() => setCurrentPage((prev) => prev + 1)} disabled={currentPage === pageNumbers}><NextIcon /></button>
      
    </div>
  )
};

export default Pagination;
