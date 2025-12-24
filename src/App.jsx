import { useEffect, useState } from 'react'
import './App.css'
import SalaryCard from './components/SalaryCard.jsx';
import Spenses from './components/Spenses.jsx';
import SpensesList from './components/spensesList.jsx';

function App() {
  const [salary, setSalary] = useState(0);
  const [expenses, setExpenses] = useState([]);

  // Cargar datos solo al inicio
  useEffect(() => {
    const savedSalary = localStorage.getItem('salary');
    const savedExpenses = localStorage.getItem('expenses');

    if (savedSalary) {
      setSalary(parseFloat(savedSalary));
    }
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Guardar datos cada vez que cambien
  useEffect(() => {
    if (salary !== 0 || expenses.length > 0) {
      localStorage.setItem('salary', salary.toString());
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [salary, expenses]);

  function updateSalary(newAmount) {
    setSalary(parseFloat(newAmount) || 0);
  }

  function handleAddExpense(name, amount) {
    const newExpense = {
      id: expenses.length > 0 ? Math.max(...expenses.map(e => e.id)) + 1 : 1,
      name,
      amount
    };
    setExpenses([...expenses, newExpense]);
  }

  function deleteExpense(id){
    const updatedExpenses = expenses.filter((exp) => exp.id !== id);
    setExpenses(updatedExpenses);
    console.log/("llego");
  }

  return (
    <div className="App">
      <h1>Gestor de gastos</h1>
      <SalaryCard UpdateSalary={updateSalary}/>
      <Spenses handleExpenseAdd={handleAddExpense}/>
      <SpensesList delExpense={deleteExpense} salary={salary} expense={expenses}/>
    </div>
  )
}

export default App