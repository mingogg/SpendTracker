import React from 'react';

const Dashboard = ({ expenses, onDeleteExpense }) => {
    if (expenses.length === 0) {
        return <p>No hay gastos registrados.</p>; // Muestra un mensaje si no hay gastos
    }

    return (
        <section style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Gastos</h2>
            <table style={{ margin: 'auto', borderCollapse: 'collapse', width: '80%' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>ID Gasto</th>
                        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Descripción</th>
                        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Monto</th>
                        <th style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{expense.id}</td>
                            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{expense.description}</td>
                            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                                {expense.amount ? expense.amount.toLocaleString('es-PY') : 'N/A'}
                            </td>
                            <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left',  display:'flex', justifyContent:'space-around'}}>
                                {new Date(expense.date).toLocaleDateString('es-PY')}
                                <button onClick={() => onDeleteExpense(expense.id)} >Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Dashboard;
