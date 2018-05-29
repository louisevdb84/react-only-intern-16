import React, { Component } from 'react';
import DayChecker from './components/DayChecker/DayChecker';
import MonthChecker from './components/Calendar/MonthChecker';
import Header from './components/Header/Header';
import CalenderV2 from './components/Calendar/Calendar-v2';
import MealPlanV2 from './components/MealPlan/MealPlan-v2';


class App extends Component {
  
  render() {
    return [
      <MealPlanV2/>,
      <Header />,      
      <DayChecker />,         
      <MonthChecker />,      
      <CalenderV2 />,
    ];
  }
}

export default App;     