import React from 'react';
import '../styles.css'

const StudentsListing = () => {
  return (<div>
    <div className="wrapper">
    <div className="search">
      <div className="search__field">Поле поиска</div>
      <div className="search__filters">Фильтры</div>
      <div className="search__confirm">Найти</div>
    </div>
    <div className="list">
      сетка
      <div className="card">
        <div className="image"/>
        <div className="name"/>
        <div className="description"/>
      </div>
      <div className="card">
        <div className="image"/>
        <div className="name"/>
        <div className="description"/>
      </div>
      <div className="card">
        <div className="image"/>
        <div className="name"/>
        <div className="description"/>
      </div>
    </div>
    </div>
  </div>);
};

export default StudentsListing;