import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox({ items, setValue, label }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={items}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}
