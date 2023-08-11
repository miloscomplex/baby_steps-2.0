import React, { useState } from 'react';
import { API, HEADERS } from '../constants/index';
import { useNavigate } from 'react-router-dom';


function NewStudent() {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [gender, setGender] = useState('');
    const [user_id, setUserId] = useState('1');

    const navigate = useNavigate();

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastName = (event) => {
        setLastName(event.target.value)
    };

    const handleBirthday = (event) => {
        setBirthdate(event.target.value)
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log('firstName:', firstname);
        // console.log('lastName:', lastname);
        // console.log('birthdate:', birthdate);
        // console.log('gender:', gender);
        console.log(JSON.stringify({firstname, lastname, birthdate, gender, user_id}));
        // use of async function to avoid loading home without new student
        try {
            const response = await fetch(`${API}students`, {
                method: 'POST',
                headers: HEADERS,
                body: JSON.stringify({firstname, lastname, user_id, birthdate, gender})
            });

            if (response.ok) {
                setFirstName('')
                setLastName('')
                setBirthdate('')
                setGender('')
                navigate('/home')
            } else {
                console.error('response not ok')
            }
        } catch (error) {
            console.error('errror sending data', error)
        }
        
      };  

    return (
      <div className="container">
        <a onClick={e => navigate('/home')} className='nav-link my-2'>back to students</a>
        <h1 className="my-4">Please complete the forms below to enter the new child.</h1>
        <form onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="name" className="form-label h5">Child's name</label>
                <div className="col">
                    <input type="text" 
                        className="form-control" 
                        placeholder="First name" 
                        aria-label="First name" 
                        onChange={handleFirstName}
                        required
                    />
                </div>
                <div className="col">
                    <input type="text" 
                        className="form-control" 
                        placeholder="Last name" 
                        aria-label="Last name" 
                        onChange={handleLastName}
                        required
                    />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="birthdate" className="form-label h5">Birthdate</label>
                    <input type="date" 
                        className="form-control" 
                        id="date"
                        onChange={handleBirthday}
                        required
                    />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="gender-b" className="form-label h5">Boy</label>
                <input type="radio"  
                    name="genderRadios" 
                    value="boy" 
                    className="m-2" 
                    id="gender-b"
                    onClick={e => setGender(e.target.value)}
                />
                <label htmlFor="gender-f" className="form-label h5">Girl</label>
                <input type="radio" 
                    name="genderRadios" 
                    value="girl" 
                    className="m-2" 
                    id="gender-f" 
                    onClick={e => setGender(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    );
  }
  
  export default NewStudent;