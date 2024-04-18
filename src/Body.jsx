import PropTypes from 'prop-types';
export default function Body(props){
    return(
        <div className="person">
            <img src="https://placeholder.pics/svg/150x150" alt="image-of-a-person" className="person-picture" />
            <p>
                This is <strong>{props.name}</strong>'s favorite food:
            </p>
            <p>
                {(props.food).toUpperCase()}
            </p>
            <p>
                Is it Healthy? {props.isHealthy ? "Yes" : "No"}
            </p>
            <p>
                <strong>{props.name}</strong> is {props.age} years old!
            </p>
        </div>
    );
}
Body.propTypes = {
    name:PropTypes.string,
    food:PropTypes.string,
    isHealthy:PropTypes.bool,
    age:PropTypes.number
}
Body.defaultProps = {
    name:"Guest",
    food:"Unknown",
    isHealthy:false,
    age:0
}