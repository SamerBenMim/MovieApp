import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({ rating }) {
  const [value, setValue] = React.useState(rating);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating  readOnly
        name="simple-controlled"
        value={value}
        precision={0.25}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      />
    </Box>
  );
}