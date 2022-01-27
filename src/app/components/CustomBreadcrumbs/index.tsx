import * as React from 'react';
import './styles.scss';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const CustomBreadcrumbs = () => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      sx={{ mb: 3 }}
      className={'custom-breadcrumbs'}
    >
      <Link underline="hover" color="inherit" href="/">
        MUI
      </Link>
      <Link
        underline="hover"
        color="inherit"
        href="/getting-started/installation/"
      >
        Core
      </Link>
      <Typography color="text.primary" className={'custom-breadcrumbs'}>
        Breadcrumbs
      </Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
