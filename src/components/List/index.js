import React from 'react';

import {
  Todo,
  Summary,
  Total,
  Done,
  Undone,
  Container,
  TodoList,
  Body,
} from './styled';

export default function List({ data, onTodoToggle = null }) {
  const done = data.filter(({ done }) => done).length;
  const undone = data.filter(({ done }) => !done).length;

  function handleClick(event) {
    if (onTodoToggle) {
      onTodoToggle(event);
    }
  }

  return (
    <Body>
      <div className='container'>
        <Summary>
          <Total>
            Total:<span>{data.length}</span>
          </Total>
          <Done>
            Feitas:<span>{done}</span>
          </Done>
          <Undone>
            Não Feitas:<span>{undone}</span>
          </Undone>
        </Summary>
        <Container>
          {data.map(({ date, description, done, id }) => (
            <Todo
              className={`card ${done ? 'done' : 'undone'}`}
              key={id}
              value={id}
              onClick={() => handleClick(id)}
            >
              <TodoList>
                <span>{description}</span>
                <span>{date.split('-').reverse().join('/')}</span>
              </TodoList>
            </Todo>
          ))}
        </Container>
      </div>
    </Body>
  );
}
