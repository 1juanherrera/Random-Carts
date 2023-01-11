

const Button = ({ textContent, liftingData }) => {
    return (
        <div>
            <button 
            onClick={() => liftingData(textContent)}>
                {textContent}
            </button>
        </div>
    )
}


export default Button