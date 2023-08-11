import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function DailyLog() {

    const [arrival, setArrival] = useState('');
    const [breakfast, setBreakfast] = useState('');
    const [morningSnack, setMorningSnack] = useState('');
    const [lunch, setLunch] = useState('');
    const [afternoonSnack, setAfternoonSnack] = useState('');
    const [student, setStudent] = useState('');
    const {id} = useParams();

    const navigate = useNavigate();

    const handleClick = (e) => {
        console.log("breakfast:", breakfast);
        console.log("morningSnack:", morningSnack);
        console.log("lunch:", lunch);
        console.log("afternoonSnack:", afternoonSnack);

    }

    // Effect to fetch data when the component mounts
    useEffect(() => {
        const apiUrl =`http://127.0.0.1:3000/students/${id}`;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setStudent(data)) // Update the state with fetched data
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs only once on mount

    const setMeal = (meal, progress) => {
        switch (meal) {
            case "Breakfast":
                setBreakfast(progress)
                break 
            case "Morning snack":
                setMorningSnack(progress)
                break
            case "Lunch":
                setLunch(progress)
                break 
            case "Afternoon snack":
                setAfternoonSnack(progress)
        }
    }
    
    return (
      <div className="container p-4">
        <a onClick={e => navigate('/home')} className='nav-link my-2'>back to students</a>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="/images/baby_face-1.jpg" className="student-img mb-3" />
                <h1>{student.firstname} {student.lastname}</h1>
                <fieldset>
                    <label htmlFor="time">Arrival</label>
                    <input type="time" className="form-control" id="time"></input>
                    <h3 className="mt-3 h2">Meals</h3>
                    <Form className='mt-4'>
                        {["Breakfast","Morning snack","Lunch","Afternoon snack"].map((meal, index) => (
                            <div key={index}>
                                    <label className="h5" htmlFor={meal}>{meal}</label>
                                    <div key={index} className="mb-3">
                                    {["none","ate some","finished"].map((arr, index2) => (
                                        <Form.Check
                                            inline
                                            label={arr}
                                            name={meal}
                                            value={arr}
                                            type="radio"
                                            id={`inline-radio-${index}-${index2}`}
                                            key={`inline-radio-${index}-${index2}`}
                                            onClick={e => setMeal(meal, e.target.value)}
                                        />
                                    ))}
                                    </div>
                            </div>
                        ))}
                    </Form>
                    <label htmlFor="time">Depature</label>
                    <input type="time" className="form-control" id="timeDeparture"></input>

                    <button href="#" onClick={e => handleClick(e)} className="btn mt-4 btn-secondary">Commit Changes</button>
                </fieldset>
            </div>
        </div>
      </div>
    );
  }
  
  export default DailyLog;