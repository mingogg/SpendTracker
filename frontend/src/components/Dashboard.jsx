import React from 'react';

const Dashboard = ({ expenses, onDeleteExpense, onEditExpense }) => {
    if (expenses.length === 0) {
        return <p>No hay gastos registrados.</p>; // Muestra un mensaje si no hay gastos
    }

    return (
        <section className="container mt-4">
            <h2 className="text-center mb-4">GASTOS</h2>
            <table className="table table-striped table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>ID</th>
                        <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Detalle</th>
                        <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Monto</th>
                        <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Fecha</th>
                        <th style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{expense.id}</td>
                            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>{expense.description}</td>
                            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>
                                {expense.amount ? expense.amount.toLocaleString('es-PY') : 'N/A'}
                            </td>
                            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>
                                {new Date(expense.date).toLocaleDateString('es-PY')}
                            </td>
                            <td style={{ border: '1px solid black', padding: '10px', textAlign: 'center' }}>
                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => onEditExpense(expense.id)}
                                >
                                    <i className="fas fa-edit"></i></button>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => onDeleteExpense(expense.id)}
                                >
                                    <i className="fas fa-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default Dashboard;
