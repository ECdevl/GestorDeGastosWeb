import './SalaryCard.css';
function SalaryCard({UpdateSalary}){

    function handleSalaryChange(event){
        const newSalary = event.target.value;
        UpdateSalary(newSalary);
    }

    return(
        <div className="salary-card">
            <p className="salary-card-label">Salario mensual</p>
            <input type="number" className="salary-card-input"  onChange={handleSalaryChange}></input>
        </div>
        );
}

export default SalaryCard;