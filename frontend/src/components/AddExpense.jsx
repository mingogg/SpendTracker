import React, { useState } from "react";
import axios from "axios";

const AddExpense = ({onAddExpense}) => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        event.preventDefault();
        console.log({ description, amount, date });

        try {
            const response = await axios.post('http://127.0.0.1:5000/expenses', {
                description,
                amount:parseInt(amount),
                date
            });

            onAddExpense(response.data);
            setDescription('');
            setAmount('');
            setDate('');
        }
        catch (error) {
            console.error('Error al agregar gasto:', error);
            setError('Hubo un error al agregar el gasto. Inténtalo de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{margin: '20px'}}>
            <div>
                <label htmlFor="description">Descripción:</label>
                <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="amount">Monto:</label>
                <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="date">Fecha:</label>
                <input
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <button type="submit">Agregar Gasto</button>
        </form>
    );
};

export default AddExpense;