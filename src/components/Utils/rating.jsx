import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({ rating }) {

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating  readOnly
        name="simple-controlled"
        value={rating}
        precision={0.1}
      />
    </Box>
  );
}