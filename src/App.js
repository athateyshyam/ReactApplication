import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.35, date: new Date(2021, 3, 7) },
    { id: 'e2', title: 'Mobile Recharge', amount: 30005.35, date: new Date(2021, 5, 12) },
    { id: 'e3', title: 'Shopping', amount: 98745.35, date: new Date(2021, 12, 3) },
    { id: 'e4', title: 'Vegitables', amount: 500.35, date: new Date(2022, 5, 3) },
    { id: 'e5', title: 'Hoteling', amount: 1500.35, date: new Date(2021, 1, 4) },
  ];

  const addExpenseHandler = expense =>{
    console.log('In App.js file!');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
