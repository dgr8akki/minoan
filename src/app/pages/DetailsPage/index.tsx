import * as React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import './styles.scss';
import Grid from '@mui/material/Grid';
import { Add } from '@mui/icons-material';
import CustomBreadcrumbs from '../../components/CustomBreadcrumbs';
import SimilarProduct from '../../components/SimilarProduct';
import Carousel from '../../components/Carousel';
import CustomButton from '../../components/CustomButton';
import { Button } from '@mui/material';
import Reviews from '../../components/Reviews';

export function DetailsPage() {
  const [product, updateProducts] = useState<Array<number>>([1]);
  const addProduct = () => {
    const newArray = [...product, product[product.length - 1] + 1];
    updateProducts(newArray);
  };
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header />
      <div className="details-page container">
        <CustomBreadcrumbs />
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ minHeight: 500, background: 'white' }}>
            <Carousel />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              minHeight: 500,
              position: 'relative',
              paddingLeft: '2rem !important',
              paddingTop: '0 !important',
            }}
          >
            <h1 className={'title'}>Ratio Eight</h1>
            <p className={'desc'}>Testing</p>
            <h1 className={'price'}>$123.00</h1>
            <p className={'inner-desc'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div>
              <h4 className={'variant-title'}>Color</h4>
              <img src={'/variant.svg'} alt={'variant'} />
            </div>
            <div
              style={{
                marginBottom: '1rem',
              }}
            >
              <h4 className={'variant-title'}>Material</h4>
              <img src={'/variant.svg'} alt={'variant'} />
            </div>
            <CustomButton title={'Add to Cart'} />
          </Grid>
        </Grid>
        <h2>Similar Products</h2>
        {product.map(() => (
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
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <CustomButton title={'More products'} onClick={() => addProduct()} />
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <h2 className={'no-margin'}>Reviews</h2>
          <Button
            variant={'contained'}
            startIcon={<Add />}
            className={'add-review-btn'}
          >
            Add Review
          </Button>
        </div>
        <hr />
        <Reviews />
      </div>
    </>
  );
}
