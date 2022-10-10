import React from 'react';

const FormPreview = () => {
  return (
    <div
      style={{
        flex: 1,
        marginLeft: '32px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        maxHeight: '230px',
      }}
    >
      <div
        style={{
          padding: '10px',
          borderBottom: '1px solid #E1E5EB',
          textAlign: 'center',
          color: '#55657D',
          fontSize: '20px',
          fontWeight: '500',
        }}
      >
        Form preview
      </div>
      <div style={{ padding: '5px 20px 10px', fontSize: '12px' }}>
        <div
          style={{
            padding: '3px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>Personal email address</div>
          <div>-</div>
        </div>
        <div
          style={{
            padding: '3px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>Phone Number</div>
          <div>-</div>
        </div>
        <div
          style={{
            padding: '3px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>Address line 01</div>
          <div>-</div>
        </div>
        <div
          style={{
            padding: '3px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>Address line 02</div>
          <div>-</div>
        </div>
        <div
          style={{
            padding: '3px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>Pincode</div>
          <div>-</div>
        </div>
        <div
          style={{
            padding: '3px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>State</div>
          <div>-</div>
        </div>
      </div>
    </div>
  );
};

export default FormPreview;
