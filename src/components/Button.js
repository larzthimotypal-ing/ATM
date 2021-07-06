import {Link} from 'react-router-dom'
const Button = (props) => {

    
    return (
        <Link className={`btn link bg-${props.color} ${props.className}`} to={props.path}>
            {props.name}
        </Link>
    )
}

export default Button
