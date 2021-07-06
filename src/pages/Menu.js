import Button from '../components/Button'
const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-instructions">
                <h3>Thank You for Choosing Us</h3>
                <p>Please press a button to start a transaction</p>
            </div>

            <div className="menu-selection">
                <Button color="green"
                className="menu-button"
                path="/withdraw"
                name="Withdraw"/>
                <Button color="blue"
                className="menu-button"
                path="/balance"
                name="Check Balance"/>
                <Button color="red"
                className="menu-button"
                path="/#"
                name="Cancel"/>
            </div>
            
            
        </div>
    )
}

export default Menu
