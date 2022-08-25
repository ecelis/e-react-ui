import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const DateGrid = styled(CalendarGrid)`
  margin-top: 0.5em;
  border: 0.5px solid var(--blue-grey-200);
  //border-bottom: 1px solid var(--blue-grey-200);
  
  /* Positioning the first day */
  div:first-child {
    grid-column: 6;
  }

  // Style for each day
  div {
    grid-auto-rows: 100px;
    text-align: right;
    position: relative;
    border: 0.5px solid var(--blue-grey-200);
    //border-top: 1px solid var(--blue-grey-200);
    width: 4.5ch;
    height: 4.5ch;
    background-color: transparent;
    color: var(--blue-grey-600);
  }

  div:hover,
  div:focus {
    outline: none;
    background-color: var(--blue-grey-050);
    color: var(--blue-grey-700);
  }

  div:active,
  div.is-selected {
    background-color: var(--teal-100);
    color: var(--teal-900);
  }

`;

const DayOfWeek = styled(CalendarGrid)`
  margin-top: 1.25em;
  > * {
    font-size: 0.7em;
    color: var(--blue-grey-400);
    font-weight: 500;
    letter-spacing: 0.1em;
    font-variant: small-caps;
    text-align: center;
  }  
`;

const MonthIndicator = styled.div`
  color: var(--blue-grey-700);
  text-align: center;
  font-weight: 500;
`;


function getFirstOfMonth(year, month) {
  return (new Date(year, month)).getDay();
}

function getLastOfMonth(year, month) {
  return 32 - new Date(year, month, 32).getDate();
}

function getCurrent() {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    first: getFirstOfMonth(date.getFullYear(), date.getMonth()),
    last: getLastOfMonth(date.getFullYear(), date.getMonth()),
    date: date.toLocaleDateString()
  }
}

const CalendarWrapper = styled.div`
  max-width: max-content;
  margin: 3em auto 0 auto;
  padding: 1.5em;
  background-color: #fff;
  border: 2px solid var(--blue-grey-200);
  border-radius: 8px;
}
`;

const Days = function(props) {
  const a = [];
  for(let i = props.current.first; i <= props.current.last; i++ ) {
    a.push(i); 
  }
  return (
    a.map(item => {
      return (
        <div key={item}><time dateTime={`${props.current.year}-${props.current.month}-${item}`}>{item}</time></div>
      )
    })
      
  )
}

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(getCurrent());

  return (
      <CalendarWrapper>
        <MonthIndicator>
          <time dateTime={`${currentDate.year}-${currentDate.month}`}>{`${currentDate.year} ${currentDate.month}`}</time>
        </MonthIndicator>
        <DayOfWeek>
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
        </DayOfWeek>
        <DateGrid>
          <Days current={currentDate} />
        </DateGrid>
      </CalendarWrapper>
  );
}
