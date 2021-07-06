import {Link} from 'react-router-dom'
import {useState} from 'react'
import Button from '../components/Button'

const Withdraw = (props) => {

    return (
        <div className="withdraw">
            <h2 className="withdraw-instructions">Please enter the right amount to be withdrawn. <br/> Only in multiples of 100</h2> 
            <form>
                <input type="number"
                onChange = {e => props.setInput(e.target.value)}/>
                
                <div className="withdraw-selection">
                    <Link className={'btn link bg-blue confirm-button'} to="/balance" 
                    onClick={e => props.setBalance(props.balance-props.input)}>
                        Confirm
                    </Link>
                    <Button color="red"
                    className="confirm-button"
                    path="/"
                    name="Cancel"/>
                </div>  
            </form> 
        </div>
    )
}

export default Withdraw
