import React from 'react';

import { Button, Container } from './styled';

export default function Buttons({
  options = [
    { id: 1, description: '1' },
    { id: 2, description: '2' },
  ],
  selectValue = 2019,
  onSelect = null,
}) {
  function handleChange(event) {
    if (onSelect) {
      onSelect(parseInt(event.currentTarget.value, 10));
    }
  }

  return (
    <Container>
      {options.map(({ id, description }) => {
        return (
          <Button
            className={`${selectValue === id ? 'active' : 'deactive'}`}
            key={id}
            value={id}
            onClick={handleChange}
          >
            {description}
          </Button>
        );
      })}
    </Container>
  );
}
