import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import productImage from '../../../assets/images/productImage.png';
import './styles.scss';

const images = [
  {
    original: productImage,
    thumbnail: productImage,
    loading: 'eager',
    thumbnailLoading: 'eager',
    originalHeight: 400,
    thumbnailHeight: 90,
  },
  {
    original: productImage,
    thumbnail: productImage,
    loading: 'eager',
    thumbnailLoading: 'eager',
    originalHeight: 400,
    thumbnailHeight: 90,
  },
  {
    original: productImage,
    thumbnail: productImage,
    loading: 'eager',
    thumbnailLoading: 'eager',
    originalHeight: 400,
    thumbnailHeight: 90,
  },
  {
    original: productImage,
    thumbnail: productImage,
    loading: 'eager',
    thumbnailLoading: 'eager',
    originalHeight: 400,
    thumbnailHeight: 90,
  },
];

const Carousel = () => {
  return (
    <ImageGallery
      items={images}
      infinite={false}
      lazyLoad
      showThumbnails={true}
      thumbnailPosition={'left'}
      showFullscreenButton={false}
      useBrowserFullscreen={false}
      showPlayButton={false}
      disableThumbnailScroll
      additionalClass={'custom-gallery'}
    />
  );
};

export default Carousel;
