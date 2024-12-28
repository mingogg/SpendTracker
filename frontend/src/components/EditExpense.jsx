import React, { useState } from 'react';

const EditExpense = ({ expense, onUpdateExpense, onCancel }) => {
    const [description, setDescription] = useState(expense.description);
    const [amount, setAmount] = useState(expense.amount);
    const [date, setDate] = useState(new Date(expense.date).toISOString().split('T')[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateExpense({ ...expense, description, amount, date });
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
            <h3>Editar Gasto</h3>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descripción" required />
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Monto" required />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <button type="submit">Guardar</button>
            <button type='button' onClick={onCancel}>Cancelar</button>
        </form>
    );
};

export default EditExpense;