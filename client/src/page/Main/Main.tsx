import React from 'react';
import './style.css';
import ButtonSearch from './ui/ButtonSearch';
import ImageListLogoCompany from './ui/ImageListLogoCompany';
import Header from './ui/Header';
import AddResume from './ui/AddResume';

export default function Main(): JSX.Element {
  return (
    <div className="mainBox">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <ButtonSearch />
        <ImageListLogoCompany />
        <AddResume />
      </div>
    </div>
  );
}
