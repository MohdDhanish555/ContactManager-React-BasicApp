import './Form.css'

const Form = ({onSubmit , onChange , person } : any) => (
    
    <form onSubmit={onSubmit} className='form-container'>
        <input type="text" placeholder="Full Name" className='input1' name="name" onChange={onChange}
        value={person.name}/>
        <div className="form-flex">
            <input type="text" value="+91" disabled className='input2' />
            <input type="number" placeholder='Phone' className='input3' name="phone" onChange={onChange}  value={person.phone}/>
        </div>
        <input type="email" placeholder='Email' className='input4' name="email" onChange={onChange}  value={person.email}/>
        <button type='submit'>Add</button>
    </form>
)

export default Form;