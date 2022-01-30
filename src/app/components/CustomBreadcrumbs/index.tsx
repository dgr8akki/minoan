import * as React from 'react';
import './styles.scss';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { ChevronLeftOutlined } from '@mui/icons-material';

const CustomBreadcrumbs = () => {
  return (
    <div className={'breadcrumb-container'}>
      <ChevronLeftOutlined />
      <Breadcrumbs aria-label="breadcrumb" className={'custom-breadcrumbs'}>
        <Link underline="hover" color="inherit" href="/">
          Products
        </Link>
        <Link underline="hover" color="inherit" href="/">
          Retro
        </Link>
        <Typography color="text.primary" className={'custom-breadcrumbs'}>
          Retro Eight
        </Typography>
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
