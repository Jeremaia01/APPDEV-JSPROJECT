import PropTypes from 'prop-types';
export default function ListOfFood(props){
    const listItems = props.items.map(item => 
        <li key = {item.id}><strong>{item.name}</strong>:   {item.color} </li>)
    return(
        <>
        <h3 className="list-category">{props.category}</h3>
        <ol className="list">{listItems}</ol>
        </>
    );
}
ListOfFood.defaultProps={
    category:"Category:",
    items:[]
}

ListOfFood.propTypes ={
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired

        })
    )
}