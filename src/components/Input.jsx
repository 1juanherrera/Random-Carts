

const Input = ({getInputValue}) => {
    return (
        <div className="inputWrapper">
            <i className='bx bx-dollar'></i>
            <input 
                type="number" 
                placeholder="Ingresa numero" 
                onChange={(i) => getInputValue(i.target.value)} />
        </div>
    )
}

export default Input