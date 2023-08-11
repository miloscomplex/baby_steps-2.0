import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function DailyLog() {

    const [arrival, setArrival] = useState('');
    const [breakfast, setBreakfast] = useState('');
    const [morningSnack, setMorningSnack] = useState('');
    const [lunch, setLunch] = useState('');
    const [afternoonSnack, setAfternoonSnack] = useState('');
    const [data, setData] = useState('');
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
            .then(data => setData(data)) // Update the state with fetched data
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs only once on mount
    
    return (
      <div className="container p-4">
        <a onClick={e => navigate('/home')} className='nav-link my-2'>back to students</a>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="/images/baby_face-1.jpg" className="student-img mb-3" />
                <h1>{data.firstname} {data.lastname}</h1>
                <fieldset>
                    <label htmlFor="time">Arrival</label>
                    <input type="time" className="form-control" id="time"></input>
                    <h3 className="mt-3 h2">Meals</h3>
                    <Form className='mt-4'>
                        {["Breakfast","Morning sanck","Lunch","Afternoon snack"].map((meal) => (
                            <div>
                                    <label className="h5" htmlFor={meal}>{meal}</label>
                                    <div key={`inline-radio-1`} className="mb-3">
                                    {["none","ate-some","finished"].map((arr) => (
                                        <Form.Check
                                            inline
                                            label={arr}
                                            name={meal}
                                            value={arr}
                                            type="radio"
                                            id={`inline-radio`}
                                            // onClick={e => setBreakfast(e.target.value)}
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