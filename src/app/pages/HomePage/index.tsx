import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import './styles.scss';
import SimilarProduct from '../../components/SimilarProduct';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header />
      <div className="home-page container">
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <SimilarProduct />
          <SimilarProduct />
          <SimilarProduct />
          <SimilarProduct />
          <SimilarProduct />
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            marginTop: '30px',
          }}
        >
          <SimilarProduct />
          <SimilarProduct />
          <SimilarProduct />
          <SimilarProduct />
          <SimilarProduct />
        </div>
      </div>
    </>
  );
}
