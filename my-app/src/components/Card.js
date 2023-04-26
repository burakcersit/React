import './Card.css';
function Card(props) {
    const classes = 'card' + props.classNAme;

    return <div className={classes}>{props.children}</div>
}

export default Card;