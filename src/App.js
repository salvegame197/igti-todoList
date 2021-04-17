import React, { useState, useEffect } from 'react';
import axios from './services/axios';

import Header from './components/Header';
import Summary from './components/Summary';
import Buttons from './components/Buttons';
import List from './components/List';

import { YEARS, MONTHS } from './config/dates';

export default function App() {
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(2019);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`todos?year=${year}&month=${month}`);
      setData(response.data);
    }
    getData();
  }, [month, year]);

  async function handleToggle(todoId) {
    const updatedTodos = [...data];
    const index = updatedTodos.findIndex((todo) => todo.id === todoId);
    updatedTodos[index].done = !updatedTodos[index].done;

    await axios.put(`todos/${updatedTodos[index].id}`);

    setData(updatedTodos);
  }

  function handleYearChange(newYear) {
    setYear(newYear);
  }
  function handleMonthChange(newMonth) {
    setMonth(newMonth);
  }

  return (
    <>
      <Summary month={month} year={year}></Summary>
      <Header>
        <Buttons
          options={YEARS}
          selectValue={year}
          onSelect={handleYearChange}
        ></Buttons>
        <Buttons
          options={MONTHS}
          selectValue={month}
          onSelect={handleMonthChange}
        ></Buttons>
      </Header>
      <List data={data} onTodoToggle={handleToggle}></List>
    </>
  );
}
