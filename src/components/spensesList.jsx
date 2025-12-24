import { useEffect, useState } from "react";
import "../Card.css";
import './spensesList.css';
import ListItem from "./listItem";
function spensesList({salary, expense, delExpense}){


    

    function deleteSpense(id){
        delExpense(id);
        console.log("eliminado");
    }

    function calculateTotal(){
        return expense.reduce((total, expense) => total + expense.amount, 0);
    }
    function calculateBalance(){
        return salary - calculateTotal();
    }


    return(
        <div className="card">
            <h2 className="spenses-lbl">Gastos</h2>
            <div className="spenses-list">
                <ul>
                    {expense.map((expense) => (
                        <ListItem key={expense.id} id={expense.id} name={expense.name} amount={expense.amount} borrar={deleteSpense}/>
                    ))}
                    
                </ul>
            </div>

            <h3 className="total-lbl">Total de gastos: ${calculateTotal()}</h3>
            <h3 className="balance-lbl" style={{color: calculateBalance() < 0 ? 'red' : 'white'}}>Balance restante: ${calculateBalance()}</h3>
            
        </div>
    );
}
export default spensesList;