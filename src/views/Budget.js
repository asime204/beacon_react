import React, { useState, useEffect } from 'react';

export default function Budget(props) {
    const { user, paychecks, setPaychecks, bills, setBills, setLeftOver, calculateLeftOver, handleAddBill, handleAddPaycheck } = props;





    const addToBudgetAPI = async () => {
        const url = 'http://localhost:5000/api/budget';
        const budgetData = {
            paychecks,
            bills,
            user_id: user.user_id,
        };
        console.log('budget data', budgetData)
        console.log('user', user)
        const apiToken = user.apitoken;
        console.log('apitoken', apiToken)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiToken}`,
            },
            body: JSON.stringify(budgetData),
        };

        console.log('Sending request to API:', options);

        const response = await fetch(url, options);
        const data = await response.json();
        console.log('Success:', data);
    };

    const removeFromBudgetAPI = async (paychecks, bills) => {
        const url = 'http://localhost:5000/api/budget/remove';
        const budgetData = {
            paychecks: paychecks[0] ? [paychecks[0]] : [],
            bills: bills[0] ? [bills[0]] : [],
            user_id: user.user_id,
        };
        const apiToken = user.apitoken;

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiToken}`,
            },
            body: JSON.stringify(budgetData),
        };

        const response = await fetch(url, options);
        const data = await response.json();
        console.log('Success:', data);
    };

    const handlePaycheckChange = (index, e) => {
        const updatedPaychecks = [...paychecks];
        updatedPaychecks[index][e.target.name] = e.target.value;
        setPaychecks(updatedPaychecks);
        console.log('Paycheck updated:', updatedPaychecks);
    };

    const handleBillChange = (index, e) => {
        const updatedBills = [...bills];
        updatedBills[index][e.target.name] = e.target.value;
        setBills(updatedBills);
        console.log('Bill updated:', updatedBills);
    };

    
    const handleRemovePaycheck = async (index) => {
        const updatedPaychecks = [...paychecks];
        const removedPaycheck = updatedPaychecks.splice(index, 1)[0];
        setPaychecks(updatedPaychecks);
        console.log('Paycheck removed:', updatedPaychecks);
        await removeFromBudgetAPI([removedPaycheck], []);
    };

    const handleRemoveBill = async (index) => {
        const updatedBills = [...bills];
        const removedBill = updatedBills.splice(index, 1)[0];
        setBills(updatedBills);
        console.log('Bill removed:', removedBill);
        await removeFromBudgetAPI([], [removedBill]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addToBudgetAPI();
        const leftOver = calculateLeftOver();
        setLeftOver(leftOver);
        console.log('Submitting form:', { paychecks, bills });
    };

    return (
        <div className="budget-card">
            <div className="budget-card-body">
                <div className="d-flex justify-content-between">
                    <div className="form-group paychecks mr-2">
                        <label>Paychecks:</label>
                        {paychecks.map((paycheck, index) => (
                            <div key={index} className="d-flex justify-content-between mb-2">
                                <div className="mr-2">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="title"
                                    value={paycheck.title}
                                    onChange={(e) => handlePaycheckChange(index, e)}
                                    />
                                </div>
                                <div className="mr-2">
                                    <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Amount"
                                    name="amount"
                                    value={paycheck.amount}
                                    onChange={(e) => handlePaycheckChange(index, e)}
                                    />
                                </div>
                                <div className="mr-2">
                                    <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Date"
                                    name="trans_date"
                                    value={paycheck.trans_date}
                                    onChange={(e) => handlePaycheckChange(index, e)}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => handleRemovePaycheck(index)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-primary mt-2"
                            onClick={handleAddPaycheck}
                        >
                            Add Paycheck
                        </button>
                    </div>
                    <div className="form-group bills">
                        <label>Bills:</label>
                            {bills.map((bill, index) => (
                                <div key={index} className="d-flex justify-content-between mb-2">
                                    <div className="mr-2">
                                        <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="title"
                                        value={bill.title}
                                        onChange={(e) => handleBillChange(index, e)}
                                        />
                                    </div>
                                    <div className="mr-2">
                                        <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Amount"
                                        name="amount"
                                        value={bill.amount}
                                        onChange={(e) => handleBillChange(index, e)}
                                        />
                                    </div>
                                    <div className="mr-2">
                                        <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Due Date"
                                        name="trans_date"
                                        value={bill.trans_date}
                                        onChange={(e) => handleBillChange(index, e)}
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveBill(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <button
                                type="button"
                                className="btn btn-primary mt-2"
                                onClick={handleAddBill}
                            >
                                Add Bill
                            </button>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="budget-submit">
                        <button type="submit" className="btn btn-primary green">
                            Save
                        </button>
                    </div>
                </form>
                <div className="budget-results mt-3 text-center">
                    {paychecks.length > 0 && bills.length > 0 && (
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Total Income: {paychecks.reduce(
                                    (accumulator, paycheck) => accumulator + Number(paycheck.amount),
                                    0
                                )}</p>
                                <p className="card-text">Total Bills: {bills.reduce(
                                    (accumulator, bill) => accumulator + Number(bill.amount),
                                    0
                                )}</p>
                                <p className="card-text">Left Over: {calculateLeftOver()}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}