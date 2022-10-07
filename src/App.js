import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  FormControl,
  InputLabel,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const [open1, setOpen1] = useState(true);

  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const PlanTypes = [
    {
      value: 'One (Individual)',
      type: 'Individual',
      label: 'One',
      cost: 600,
      name: 'Self',
    },
    {
      value: 'Pro (Individual)',
      type: 'Individual',
      label: 'Pro',
      cost: 600,
      name: 'Parents',
    },
    {
      value: 'Plus (Individual + Individual)',
      type: 'Individual + Individual',
      label: 'Plus',
      cost: 600,
      name: 'Self + Parents',
    },
    {
      value: 'Max (Individual)',
      type: 'Individual',
      label: 'Max',
      cost: 600,
      name: 'Self + Spouse + Kids',
    },
  ];

  const [age, setAge] = useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };
  useEffect(() => {
    console.log(age);
  }, [age]);
  return (
    <Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            borderBottom: '8px solid #E06358',
            marginRight: '10px',
            padding: '20px',
            width: '100%',
          }}
        ></div>
        <div
          style={{
            borderBottom: '8px solid #CCC4BA',
            marginRight: '10px',
            padding: '20px',
            width: '100%',
          }}
        ></div>
        <div
          style={{
            borderBottom: '8px solid #CCC4BA',
            marginRight: '10px',
            padding: '20px',
            width: '100%',
          }}
        ></div>
        <div
          style={{
            borderBottom: '8px solid #CCC4BA',
            padding: '20px',
            width: '100%',
          }}
        ></div>
      </div>
      <div
        style={{
          width: '75%',
          margin: 'auto',
          paddingTop: '22px',
          display: 'flex',
        }}
      >
        <div style={{ flex: 2 }}>
          <div style={{ fontSize: '26px', fontWeight: '700' }}>
            Choose your plan
          </div>
          <div>Hello Anisha,</div>
          <div>
            Increase yours and your family's health insurance cover by ₹20 lakhs
            with Super top-up!
          </div>
          <List
            sx={{
              backgroundColor: '#fff',
              marginTop: '20px',
              borderRadius: '10px',
            }}
          >
            <ListItemButton
              onClick={handleClick}
              sx={{ boxShadow: open ? 'inset 0px -1px 0px #E1E5EB' : '' }}
            >
              <ListItemText primary='Plan Details' />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open}
              timeout='auto'
              unmountOnExit
              sx={{ padding: '16px' }}
            >
              <InputLabel
                sx={{ fontWeight: '500', color: '#2D3D54' }}
                shrink
                htmlFor='bootstrap-input'
              >
                Your plan type
              </InputLabel>
              <FormControl fullWidth variant='standard'>
                <Select
                  sx={{ maxWidth: '60%' }}
                  placeholder='Select your plan'
                  id='bootstrap-input'
                  variant='outlined'
                  size='small'
                  value={age}
                  onChange={handleChange}
                  renderValue={selected => (
                    <div
                      style={{
                        fontSize: '14px',
                        fontFamily: 'Inter',
                        fontWeight: '500',
                      }}
                    >
                      {selected}
                    </div>
                  )}
                >
                  {PlanTypes.map(option => (
                    <MenuItem
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        borderBottom: '1px solid #E1E5EB',
                        padding: '10px 0',
                        fontFamily: 'Inter',
                      }}
                      key={option.value}
                      value={option.value}
                    >
                      <div
                        style={{
                          fontSize: '10px',
                          marginLeft: '10px',
                          fontFamily: 'Inter',
                        }}
                      >
                        <span style={{ fontWeight: '600' }}>
                          {option.label}
                        </span>
                        <span> ({option.type})</span>
                      </div>
                      <div
                        style={{
                          width: '90%',
                          margin: 'auto',
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '12px',
                          fontWeight: '600',
                          fontFamily: 'Inter',
                          padding: '5px 0px',
                        }}
                      >
                        <div>{option.name}</div>
                        <div>{option.cost}</div>
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Collapse>
          </List>
          <List
            sx={{
              backgroundColor: '#fff',
              marginTop: '16px',
              borderRadius: '10px',
            }}
          >
            <ListItemButton
              onClick={handleClick1}
              sx={{ boxShadow: open1 ? 'inset 0px -1px 0px #E1E5EB' : '' }}
            >
              <ListItemText primary='Basic Details*' />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open1} timeout='auto' unmountOnExit>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, margin: '8px 16px' }}>
                  <InputLabel
                    sx={{ fontWeight: '500', color: '#2D3D54' }}
                    shrink
                    htmlFor='bootstrap-input'
                  >
                    Personal email address
                  </InputLabel>
                  <FormControl fullWidth variant='standard'>
                    <TextField
                      placeholder='Enter'
                      id='bootstrap-input'
                      variant='outlined'
                      size='small'
                    />
                  </FormControl>
                </div>
                <div style={{ flex: 1, margin: '8px 16px' }}>
                  <InputLabel
                    sx={{ fontWeight: '500', color: '#2D3D54' }}
                    shrink
                    htmlFor='bootstrap-input'
                  >
                    Phone Number
                  </InputLabel>
                  <FormControl fullWidth variant='standard'>
                    <TextField
                      placeholder='Enter'
                      id='bootstrap-input'
                      variant='outlined'
                      size='small'
                    />
                  </FormControl>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, margin: '8px 16px' }}>
                  <InputLabel
                    sx={{ fontWeight: '500', color: '#2D3D54' }}
                    shrink
                    htmlFor='bootstrap-input'
                  >
                    Address line 01
                  </InputLabel>
                  <FormControl fullWidth variant='standard'>
                    <TextField
                      placeholder='Enter'
                      id='bootstrap-input'
                      variant='outlined'
                      size='small'
                    />
                  </FormControl>
                </div>
                <div style={{ flex: 1, margin: '8px 16px' }}>
                  <InputLabel
                    sx={{ fontWeight: '500', color: '#2D3D54' }}
                    shrink
                    htmlFor='bootstrap-input'
                  >
                    Address line 02
                  </InputLabel>
                  <FormControl fullWidth variant='standard'>
                    <TextField
                      placeholder='Enter'
                      id='bootstrap-input'
                      variant='outlined'
                      size='small'
                    />
                  </FormControl>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, margin: '8px 16px' }}>
                  <InputLabel
                    sx={{ fontWeight: '500', color: '#2D3D54' }}
                    shrink
                    htmlFor='bootstrap-input'
                  >
                    Pincode
                  </InputLabel>
                  <FormControl fullWidth variant='standard'>
                    <TextField
                      placeholder='Enter'
                      id='bootstrap-input'
                      variant='outlined'
                      size='small'
                    />
                  </FormControl>
                </div>
                <div style={{ flex: 1, margin: '8px 16px' }}>
                  <InputLabel
                    sx={{ fontWeight: '500', color: '#2D3D54' }}
                    shrink
                    htmlFor='bootstrap-input'
                  >
                    State
                  </InputLabel>
                  <FormControl fullWidth variant='standard'>
                    <TextField
                      placeholder='Enter'
                      id='bootstrap-input'
                      variant='outlined'
                      size='small'
                    />
                  </FormControl>
                </div>
              </div>
            </Collapse>
          </List>
        </div>
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
      </div>
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
            style={{
              backgroundColor: '#E06358',
              width: '320px',
              height: '32px',
              border: 'none',
              borderRadius: '6px',
              color: '#fff',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer',
            }}
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
