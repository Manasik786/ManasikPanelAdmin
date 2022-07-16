import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export const Dropdown = ({ label, items, setOption, isDisabled = false }) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    setOption(event.target.value);
  };

  const menuItems = items.map((item) => {
    return (
      <MenuItem style={{ fontSize: '15px' }} key={item.key} value={item.key}>
        {item.value}
      </MenuItem>
    );
  });

  return (
    <FormControl
      fullWidth
      style={{ marginRight: '10px', marginBottom: '10px' }}
      disabled={isDisabled ? true : false}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        style={{ fontSize: '15px' }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
        required
      >
        {menuItems}
      </Select>
    </FormControl>
  );
};
