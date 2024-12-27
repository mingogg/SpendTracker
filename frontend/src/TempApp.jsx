import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/expenses');
      setExpenses(response.data);
    }
    catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const handleDeleteExpense = async (id) => {
    if (window.confirm("¿Eliminar gasto?")) {
      try {
        await axios.delete(`http://127.0.0.1:5000/expenses/${id}`);
        setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
      } catch (error) {
        console.error('Error eliminando el gasto:', error)
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Dashboard expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        <AddExpense onAddExpense={fetchExpenses}/>
      </main>
    </div>
  );
};

export default App;
