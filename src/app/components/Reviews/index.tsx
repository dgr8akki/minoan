import * as React from 'react';
import './styles.scss';

const Reviews = () => {
  const test = [12, 124];
  return (
    <div className={'reviews-container'}>
      {test.map(() => (
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <span className="name">David Test</span>
          <p className="body">
            Nibh at nunc ornare ornare massa adipiscing id mauris. Magna
            pulvinar mattis sed auctor. Erat sed mus ultricies blandit.
            Fringilla sollicitudin nunc interdum purus sapien, pellentesque odio
            malesuada malesuada. Nec et, suscipit odio fermentum condimentum
            eget morbi egestas at. Et diam amet eget morbi. Eget lacinia congue
            et posuere elit consequat. Orci, vel sit nulla dolor duis. Urna
            etiam amet, sollicitudin ut nunc. Nibh arcu, aliquam at fames.
            Aliquet at nunc a, risus quam placerat mollis id.
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Reviews;
