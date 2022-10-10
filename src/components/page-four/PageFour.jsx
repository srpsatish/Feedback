import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import React from 'react';

const PageFour = ({ backfn }) => {
  return (
    <div style={{ flex: 2 }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <ChevronLeftIcon
            onClick={() => backfn()}
            sx={{
              backgroundColor: '#E5E1DC',
              color: '#2D3D54',
              fontSize: '48px',
              borderRadius: '24px',
              marginTop: '16px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div style={{ flex: 9 }}>
          <div
            style={{ fontSize: '26px', fontWeight: '700', marginTop: '20px' }}
          >
            Review and confirm payment
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#fff',
          marginTop: '24px',
          borderRadius: '10px',
          padding: '16px 32px',
        }}
      >
        <div style={{ display: 'flex', marginBottom: '25px' }}>
          <div
            style={{
              flex: 1,
              fontSize: '16px',
              color: '#55657D',
              fontWeight: '400',
            }}
          >
            Plan selected
          </div>
          <div
            style={{
              flex: 3.3,
              fontSize: '16px',
              color: '#182639',
              fontWeight: '600',
            }}
          >
            One (Individual)
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '25px' }}>
          <div
            style={{
              flex: 1,
              fontSize: '16px',
              color: '#55657D',
              fontWeight: '400',
            }}
          >
            Phone Number
          </div>
          <div
            style={{
              flex: 3.3,
              fontSize: '16px',
              color: '#182639',
              fontWeight: '600',
            }}
          >
            8080808080
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '25px' }}>
          <div
            style={{
              flex: 1,
              fontSize: '16px',
              color: '#55657D',
              fontWeight: '400',
            }}
          >
            Address line 01
          </div>
          <div
            style={{
              flex: 3.3,
              fontSize: '16px',
              color: '#182639',
              fontWeight: '600',
            }}
          >
            No 132, 4th cross
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '25px' }}>
          <div
            style={{
              flex: 1,
              fontSize: '16px',
              color: '#55657D',
              fontWeight: '400',
            }}
          >
            Pincode
          </div>
          <div
            style={{
              flex: 3.3,
              fontSize: '16px',
              color: '#182639',
              fontWeight: '600',
            }}
          >
            560091
          </div>
        </div>
        <div style={{ display: 'flex', marginBottom: '25px' }}>
          <div
            style={{
              flex: 1,
              fontSize: '16px',
              color: '#55657D',
              fontWeight: '400',
            }}
          >
            State
          </div>
          <div
            style={{
              flex: 3.3,
              fontSize: '16px',
              color: '#182639',
              fontWeight: '600',
            }}
          >
            Karnataka, Bengaluru
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFour;
