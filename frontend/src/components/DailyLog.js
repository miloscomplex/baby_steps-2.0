import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';

function DailyLog() {

    const [arrival, setArrival] = useState('');
    const [breakfast, setBreakfast] = useState('');
    const [morningSnack, setMorningSnack] = useState('');
    const [lunch, setLunch] = useState('');
    const [afternoonSnack, setAfternoonSnack] = useState('');

    const handleClick = (e) => {
        console.log(e)
        console.log("breakfast:", breakfast);
        console.log("morningSnack:", morningSnack);
        console.log("lunch:", lunch);
        console.log("afternoonSnack:", afternoonSnack);

    }
    return (
      <div className="container p-4">
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="/images/baby_face-1.jpg" className="student-img mb-3" />
                <h1>Teddy Smith</h1>
                <fieldset>
                    <label htmlFor="time">Arrival</label>
                    <input type="time" className="form-control" id="time"></input>
                    <h3 className="mt-3 h2">Meals</h3>
                    <div>
                        <Form className='mt-4'>
                        <label className="h5" htmlFor="breakfast">Breakfast</label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="none"
                                name="breakfast"
                                value="none"
                                type={type}
                                id={`inline-${type}-1`}
                                onClick={e => setBreakfast(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="ate some"
                                value="ate some"
                                name="breakfast"
                                type={type}
                                id={`inline-${type}-2`}
                                onClick={e => setBreakfast(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="finished"
                                value="finished"
                                name="breakfast"
                                type={type}
                                id={`inline-${type}-3`}
                                onClick={e => setBreakfast(e.target.value)}
                            />
                            </div>
                        ))}
                        </Form>
                    </div>
                    <div>                        
                        <Form className='mt-4'>
                        <label className="h5" htmlFor="snack">Morning snack</label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="none"
                                value="none"
                                name="morningSnack"
                                type={type}
                                id={`inline-${type}-4`}
                                onClick={e => setMorningSnack(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="ate some"
                                value="ate some"
                                name="morningSnack"
                                type={type}
                                id={`inline-${type}-5`}
                                onClick={e => setMorningSnack(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="finished"
                                value="finished"
                                name="morningSnack"
                                type={type}
                                id={`inline-${type}-6`}
                                onClick={e => setMorningSnack(e.target.value)}
                            />
                            </div>
                        ))}
                        </Form>
                    </div>
                    <div>
                        <Form className='mt-4'>
                        <label className="h5" htmlFor="lunch">Lunch</label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="none"
                                value="none"
                                name="lunch"
                                type={type}
                                id={`inline-${type}-7`}
                                onClick={e => setLunch(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="ate some"
                                value="ate some"
                                name="lunch"
                                type={type}
                                id={`inline-${type}-8`}
                                onClick={e => setLunch(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="finished"
                                value="finished"
                                name="lunch"
                                type={type}
                                id={`inline-${type}-9`}
                                onClick={e => setLunch(e.target.value)}
                            />
                            </div>
                        ))}
                        </Form>
                    </div>
                    <div>
                        <Form className='mt-4'>
                        <label className="h5" htmlFor="afternoon-snack">Afternoon snack</label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="none"
                                value="none"
                                name="afternoonSnack"
                                type={type}
                                id={`inline-${type}-10`}
                                onClick={e => setAfternoonSnack(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="ate some"
                                value="ate some"
                                name="afternoonSnack"
                                type={type}
                                id={`inline-${type}-11`}
                                onClick={e => setAfternoonSnack(e.target.value)}
                            />
                            <Form.Check
                                inline
                                label="finished"
                                value="finished"
                                name="afternoonSnack"
                                type={type}
                                id={`inline-${type}-12`}
                                onClick={e => setAfternoonSnack(e.target.value)}
                            />
                            </div>
                        ))}
                        </Form>
                    </div>
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