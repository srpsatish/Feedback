import React from 'react';

const LighterBorder = () => {
  return (
    <div
      style={{
        borderBottom: '8px solid #CCC4BA',
        marginRight: '10px',
        padding: '20px',
        width: '100%',
      }}
    ></div>
  );
};

const DarkerBorder = () => {
  return (
    <div
      style={{
        borderBottom: '8px solid #E06358',
        marginRight: '10px',
        padding: '20px',
        width: '100%',
      }}
    ></div>
  );
};

const Header = ({ pageNumber }) => {
  if (pageNumber === 1)
    return (
      <>
        <DarkerBorder />
        <LighterBorder />
        <LighterBorder />
        <LighterBorder />
      </>
    );
  if (pageNumber === 2)
    return (
      <>
        <DarkerBorder />
        <DarkerBorder />
        <LighterBorder />
        <LighterBorder />
      </>
    );
  if (pageNumber === 3)
    return (
      <>
        <DarkerBorder />
        <DarkerBorder />
        <DarkerBorder />
        <LighterBorder />
      </>
    );
  return (
    <>
      <DarkerBorder />
      <DarkerBorder />
      <DarkerBorder />
      <DarkerBorder />
    </>
  );
};

export default Header;
