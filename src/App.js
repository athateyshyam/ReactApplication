import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses=[
    {id:'e1',title:'Car Insurance',amount:294.35,date:new Date(2021,3,7)},
    {id:'e2',title:'Mobile Recharge',amount:30005.35,date:new Date(2021,5,12)},
    {id:'e3',title:'Shopping',amount:98745.35,date:new Date(2021,12,3)},
    {id:'e4',title:'Vegitables',amount:500.35,date:new Date(2022,5,3)},
    {id:'e5',title:'Hoteling',amount:1500.35,date:new Date(2021,1,4)},
  ];
  return (
   <div>
     <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
     <ExpenseItem title={expenses[4].title} amount={expenses[4].amount} date={expenses[4].date}></ExpenseItem>
   </div>
  );
}

export default App;
