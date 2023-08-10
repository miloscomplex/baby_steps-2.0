import React, { useState, useEffect } from 'react';

function Home() {

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Add a student was clicked');
    };

    const [data, setData] = useState([]);

    // Effect to fetch data when the component mounts
    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:3000/students';

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setData(data)) // Update the state with fetched data
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs only once on mount

    const trimmedTime = (str) => {
        let trimmedStr = str.split('T')
        console.log('trimmedStr:', trimmedStr);
    }

    return (
      <div className="container p-4">
        <h1>Welcome back, Michael</h1>
        <h4 className="mb-4">Current enrolled students</h4>
        {data.map(student => (
            <div key={student.id} className="card p-3 mb-2">
                <div className="card-body">
                    <img src={student.img_url} className="student-img mb-3" />
                    
                    <h4>{student.firstname} {student.lastname}</h4>
                    <p className="card-text">Arrival time {student.arrival.split('T')[1].split(':00')[0]}</p>
                    <a href={`students/${student.id}/dailylog`} className="btn btn-secondary">Daily Log</a>
                    <p className="mt-3">
                        <a href={`students/${student.id}/dailylog`}>Update profile</a>
                    </p>
                </div>
            </div>

        ))}
        
        <button 
            type="button" onClick={handleClick} className="btn btn-primary my-4">Add a student</button>
      </div>
    );
  }
  
  export default Home;