import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FaceIcon from '@mui/icons-material/Face';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import React from 'react';

const PageTwo = ({ backfn }) => {
  const marks = [
    {
      value: 1,
      label: '₹1L',
    },
    {
      value: 2,
      label: '₹2L',
    },
    {
      value: 3,
      label: '₹3L',
    },
    {
      value: 5,
      label: '₹5L',
    },
  ];

  function valuetext(value) {
    return `₹${value}L`;
  }
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
          <div style={{ fontSize: '26px', fontWeight: '700' }}>
            Select your deductible amount
          </div>
          <div>
            Select the deductible amount for the policy (or policies) below.
          </div>
          <div>
            (
            <span style={{ textDecoration: 'underline' }}>
              what is a deductible?
            </span>
            )
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#fff',
          marginTop: '30px',
          borderRadius: '10px',
        }}
      >
        <div
          style={{
            padding: '16px',
            boxShadow: 'inset 0px -1px 0px #E1E5EB',
          }}
        >
          <div style={{ fontSize: '16px', fontWeight: '600' }}>
            Self (Individual)
          </div>
          <div
            style={{
              fontSize: '14px',
              fontWeight: '600',
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                width: '28px',
                height: '28px',
                backgroundColor: '#F9C6B1',
                borderRadius: '14px',
                marginRight: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaceIcon sx={{ fontSize: '24px' }} />
            </span>
            John Doe
          </div>
        </div>
        <div
          style={{
            padding: '24px 16px',
          }}
        >
          <div style={{ fontSize: '16px', fontWeight: '400' }}>
            Sum insured of ₹20,00,000 with a deductible of ₹3,00,000
          </div>
          <div>
            <Slider
              aria-label='Custom marks'
              defaultValue={3}
              getAriaValueText={valuetext}
              step={0.5}
              valueLabelDisplay='auto'
              marks={marks}
              min={1}
              max={5}
              sx={{ color: '#D44C46', marginTop: '2px' }}
            />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Checkbox
          sx={{
            color: '#8C98AB',
            '&.Mui-checked': {
              color: '#E06358',
            },
          }}
        />
        <div>
          I understand that this insurance will not be utilized until ₹3,00,000
          (deductible) is exhausted.
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
