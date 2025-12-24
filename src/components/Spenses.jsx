import '../Card.css';
import './Spenses.css';
function Spenses({handleExpenseAdd}){
    function handleAddClickExpense(){
        const nameInput = document.querySelector('input[placeholder="Nombre del gasto"]');
        const amountInput = document.querySelector('input[placeholder="Monto del gasto"]');
        const name = nameInput.value;
        const amount = parseFloat(amountInput.value);
        if (name && !isNaN(amount)) {
            handleExpenseAdd(name, amount);
            nameInput.value = '';
            amountInput.value = '';
        }
    }
    return(
        <div className="card">
            <h2 className="spenses-lbl">Agregar Gastos</h2>
            <input type="text" placeholder="Nombre del gasto"></input>
            <input type="number" placeholder="Monto del gasto"></input>
            <button className="spenses-btn" onClick={handleAddClickExpense}>Agregar gasto</button>
        </div>
        );

}

export default Spenses;