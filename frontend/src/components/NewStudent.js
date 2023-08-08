import React, { useState } from 'react';

function NewStudent() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastName = (event) => {
        setLastName(event.target.value)
    };

    const handleBirthday = (event) => {
        setBirthday(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you can add your login logic, such as calling an API to validate the credentials
        console.log('firstName:', firstName);
        console.log('lastName:', lastName);
        console.log('birthday:', birthday)
      };  

    return (
      <div className="container">
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
                />
                <label htmlFor="gender-f" className="form-label h5">Girl</label>
                <input type="radio" 
                    name="genderRadios" 
                    value="girl" 
                    className="m-2" 
                    id="gender-f" 
                />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    );
  }
  
  export default NewStudent;