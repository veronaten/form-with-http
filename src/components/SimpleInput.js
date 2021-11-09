import { useRef, useState} from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const nameInputRef = useRef();

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmisiionHandler = event => {
    event.preventDefault();

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);
    
    // nameInputRef.current.value = ''; Так лучше не делать. Манипулировать Dom.
    setEnteredName('');
  };

  return (
    <form onSubmit={formSubmisiionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
