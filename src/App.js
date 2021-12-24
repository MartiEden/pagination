import React, { useState, useEffect } from 'react';
import './App.css';
import Countries from './components/Countries';
import Pagination from './components/Pagination';

const App = () => {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const countriesPerPage = 10;

  const lastCountryOnPageIndex = countriesPerPage * currentPage;
  const firstCountryOnPageIndex = lastCountryOnPageIndex - countriesPerPage
  const currentCountriesOnPage = countries.slice(firstCountryOnPageIndex, lastCountryOnPageIndex);

  useEffect(() => {
    const getCountries = async () => {
      setLoading(true);
      const response =
        await fetch('https://restcountries.com/v3.1/all')
          .then(resp => resp.json())
          .then(data => data)
      setCountries(response.sort(function(a, b) {
        return a.name.common.localeCompare(b.name.common)
    }));
      setLoading(false);
    }
    getCountries()
  }, [])

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  const onNext = () => {
    setCurrentPage(current => current + 1);
  }
  const onPrev = () => {
    setCurrentPage(current => current - 1);
  }

  return (
    <section className="container mt-5">
      <h1 className="text-primary">Countries</h1>
      <Countries
        loading={loading}
        countries={currentCountriesOnPage}
      />
      <Pagination
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <section className="buttons mt-4 mb-4">

        {
          currentPage !== 1 ? (
            <button className="btn btn-primary mr-4" onClick={onPrev}>Prev Page</button>
          ) : false
        }
        <button className="btn btn-primary" onClick={onNext}>Next Page</button>
      </section>

    </section>
  )
}

export default App

