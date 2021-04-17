import React from 'react';

import { Div } from './styled';

export default function index({ year, month }) {
  return (
    <Div>
      <p>
        {month}/{year}
      </p>
    </Div>
  );
}
