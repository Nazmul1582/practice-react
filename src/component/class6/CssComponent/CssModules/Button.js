import BtnStyle from  './Button.module.css';
const Button = () => {
    return (
        <div>
            <p>Button from CSS Modules</p>
            <button className = {BtnStyle.button} >Click Me</button>
        </div>
    )
}

export default Button;