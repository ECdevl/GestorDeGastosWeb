import './listItem.css';
function ListItem({id, name, amount, borrar}) {

    function handleDelete(){
        borrar(id);
        console.log("salio");
    };

    return(
        <li className="list-item">
            <h2>{id}</h2>
            <h2 className='item-name'>{name}</h2>
            <h2 className="item-amount">{amount}</h2>
            <button onClick={handleDelete} className="delete-btn">🗑️</button>
        </li>
    )
}

export default ListItem;