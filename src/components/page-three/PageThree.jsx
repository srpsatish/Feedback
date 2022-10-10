import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';

const PageThree = ({ backfn }) => {
  return (
    <div style={{ flex: 2, display: 'flex' }}>
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
      <div style={{ flex: 8 }}>
        <div
          style={{
            fontSize: '26px',
            fontWeight: '700',
            padding: '20px 0px 13px',
          }}
        >
          Declaration
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '40px',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '28px',
          }}
        >
          <Checkbox
            sx={{
              padding: '0 12px 0 0',
              color: '#8C98AB',
              '&.Mui-checked': {
                color: '#E06358',
              },
            }}
          />
          <div>
            I hereby declare that none of the proposed members are habitual
            consumers of alcohol, tobacco, gutka or any recreational drugs.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '40px',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '28px',
          }}
        >
          <Checkbox
            sx={{
              padding: '0 12px 0 0',
              color: '#8C98AB',
              '&.Mui-checked': {
                color: '#E06358',
              },
            }}
          />
          <div>
            I hereby declare that all proposed members are in good health and
            entirely free from any mental pf physical impairements or
            deformities, disease/condition.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '40px',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '28px',
          }}
        >
          <Checkbox
            sx={{
              padding: '0 12px 0 0',
              color: '#8C98AB',
              '&.Mui-checked': {
                color: '#E06358',
              },
            }}
          />
          <div>
            I have understood that there is 30 days waiting period for all
            diseases and 2 years on named ailments. (list of named ailements)
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '40px',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '28px',
          }}
        >
          <Checkbox
            sx={{
              padding: '0 12px 0 0',
              color: '#8C98AB',
              '&.Mui-checked': {
                color: '#E06358',
              },
            }}
          />
          <div>
            I understand that this policy doesn't cover Pre-existing diseases.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThree;
