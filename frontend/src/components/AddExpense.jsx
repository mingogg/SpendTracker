import React, { useState } from "react";
import axios from "axios";

const AddExpense = ({ onAddExpense }) => {
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
                amount: parseInt(amount),
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
        <form onSubmit={handleSubmit} className="container mt-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: '0px' }}>
            <div className="form-group" style={{ marginRight: '10px' }}>
                <label htmlFor="description" style={{ marginRight: '10px' }}>Descripción:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="form-group" style={{ marginRight: '10px' }}>
                <label htmlFor="amount" style={{ marginRight: '10px' }}>Monto:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className="form-group" style={{ marginRight: '10px' }}>
                <label htmlFor="date" style={{ marginRight: '10px' }}>Fecha:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button className="btn btn-primary mt-0 mb-0">Agregar Gasto</button>
        </form >
    );
};

export default AddExpense;