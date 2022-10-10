import React from 'react';

const Footer = props => {
  const { children, onClick, ...other } = props;
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        marginTop: '10px',
        padding: '16px',
        backgroundColor: '#fff',
        boxShadow: '0px -4px 8px rgba(45, 61, 84, 0.06)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <button
          onClick={onClick}
          style={{
            backgroundColor: '#E06358',
            width: '320px',
            border: 'none',
            borderRadius: '6px',
            padding: '12px',
            color: '#fff',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
          }}
          {...other}
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default Footer;
