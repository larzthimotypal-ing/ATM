import Button from '../components/Button'

const Balance = (props) => {
    return (
        <div className="balance">
            <h2 className="withdraw-instructions">Thank you for choosing our bank.<br/>Please have a great day</h2>

            <h3 className="withdraw-instructions">Your Current Balance is</h3>
            <h3 className="withdraw-instructions amount">{props.balance} PHP</h3>    

            <Button color="red"
                className="confirm-button"
                path="/"
            name="Back"/>     
        </div>
    )
}

export default Balance
