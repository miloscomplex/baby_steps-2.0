import Form from 'react-bootstrap/Form';

function DailyLog() {
    return (
      <div className="container p-4">
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="./images/baby_face.jpg" className="student-img mb-3" />
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
                                label="ate none"
                                name="breakfast"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="ate some"
                                name="breakfast"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="finished"
                                name="afternoonSnack"
                                type={type}
                                id={`inline-${type}-3`}
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
                                label="ate none"
                                name="morningSnack"
                                type={type}
                                id={`inline-${type}-4`}
                            />
                            <Form.Check
                                inline
                                label="ate some"
                                name="morningSnack"
                                type={type}
                                id={`inline-${type}-5`}
                            />
                            <Form.Check
                                inline
                                label="finished"
                                name="morningSnack"
                                type={type}
                                id={`inline-${type}-6`}
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
                                label="ate none"
                                name="lunch"
                                type={type}
                                id={`inline-${type}-7`}
                            />
                            <Form.Check
                                inline
                                label="ate some"
                                name="lunch"
                                type={type}
                                id={`inline-${type}-8`}
                            />
                            <Form.Check
                                inline
                                label="finished"
                                name="lunch"
                                type={type}
                                id={`inline-${type}-9`}
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
                                label="ate none"
                                name="afternoonSnack"
                                type={type}
                                id={`inline-${type}-10`}
                            />
                            <Form.Check
                                inline
                                label="ate some"
                                name="afternoonSnack"
                                type={type}
                                id={`inline-${type}-11`}
                            />
                            <Form.Check
                                inline
                                label="finished"
                                name="afternoonSnack"
                                type={type}
                                id={`inline-${type}-12`}
                            />
                            </div>
                        ))}
                        </Form>
                    </div>

                    <button href="#" className="btn mt-4 btn-secondary">Commit Changes</button>
                </fieldset>
            </div>
        </div>
      </div>
    );
  }
  
  export default DailyLog;