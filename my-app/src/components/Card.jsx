import CardButton from "./CardButton";
import {Link} from 'react-router-dom';

const Card = ({user}) => {

    return(
        <ul className="list">
            <li><span >name:</span> {user.name}</li>
            <li><span>username:</span> {user.username} </li>
            <li><span>email:</span> {user.email}</li>
            <li><span>address: </span>  
                {user.address.street}, 
                {user.address.suite}, 
                {user.address.city}, 
                {user.address.zipcode}
            </li>
            <li><span>phone:</span> {user.phone}</li>
            <li><span>website:</span> {user.website}</li>
            <li><span>company: </span>
                {user.company.name},
                {user.company.catchPhrase},
                {user.company.bs}
            </li>
            <Link to={`/posts/${user.id}`}>
                <CardButton/>
            </Link>
            
        </ul>
    )
}

export default Card;