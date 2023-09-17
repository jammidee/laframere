
function ListGroup(){

    const items = ["Manila", "Cebu", "Bicol"];

    //items.map( (item) => ( <li>{item}</li>) );

    return (    <>
                    <h1>Group List</h1>
                    { items.length === 0 && <p>Item Not Found!</p> }
                    <ul className="list-group-item">
                        {items.map( (item) => ( <li key={item} className={item}>{item}</li>) )}
                    </ul>
                </>
            );
}

export default ListGroup;