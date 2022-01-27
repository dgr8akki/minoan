import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import './styles.scss';
import Grid from '@mui/material/Grid';
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';
import SimilarProduct from '../../components/SimilarProduct';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <Header />
      <div className="details-page container">
        <CustomBreadcrumbs />
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ minHeight: 500 }}>
            <img src={'/carousel.svg'} alt={'carousel'} />
          </Grid>
          <Grid item xs={6} sx={{ minHeight: 500, position: 'relative' }}>
            <h1 className={'title'}>Ratio Eight</h1>
            <p className={'desc'}>Testing</p>
            <h1 className={'price'}>$123.00</h1>
            <p className={'inner-desc'}>
              Finished in a crisp gloss white powder coat with blond para wood
              wood trim, the Ratio Eight in White combines precision brewing
              technique, top-quality construction, and a design that will
              elevate any environment.
            </p>
            <div>
              <h4 className={'variant-title'}>Color</h4>
              <img src={'/variant.svg'} alt={'variant'} />
            </div>
            <div>
              <h4 className={'variant-title'}>Material</h4>
              <img src={'/variant.svg'} alt={'variant'} />
            </div>
            <Button variant="outlined" className={'add-cart-btn'}>
              Add to Cart
            </Button>
          </Grid>
        </Grid>
        <h2>Similar Products</h2>
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
            justifyContent: 'center',
          }}
        >
          <Button variant="outlined" className={'more-btn'}>
            More Products
          </Button>
        </div>
        <h2>Reviews</h2>
      </div>
    </>
  );
}
