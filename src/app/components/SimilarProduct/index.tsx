import * as React from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const SimilarProduct = () => {
  const history = useHistory();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => history.push('/details')}
    >
      <img src={'/carousel.svg'} alt={'carousel'} height={300} width={300} />
      <div
        style={{
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div>Ratio Eight</div>
          <div>$312.00</div>
        </div>
        <div className={'prod-desc'}>by Ratio Coffee</div>
      </div>
    </div>
  );
};

export default SimilarProduct;
