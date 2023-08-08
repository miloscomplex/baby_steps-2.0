function Home() {

    const handleClick = (event) => {
        event.preventDefault();
        console.log('Add a student was clicked');
    };

    return (
      <div className="container p-4">
        <h1>Welcome back, Michael</h1>
        <h4 className="mb-4">Current enrolled students</h4>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="./images/baby_face.jpg" className="student-img mb-3" />
                <h4>Firstname Lastname</h4>
                <p className="card-text">Age 3</p>
                <a href="#" className="btn btn-secondary">Daily Log</a>
                <p className="mt-3">
                    <a href="">Update profile</a>
                </p>
            </div>
        </div>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="./images/baby_face.jpg" className="student-img mb-3" />
                <h4>Firstname Lastname</h4>
                <p className="card-text">Age 3</p>
                <a href="#" className="btn btn-secondary">Daily Log</a>
                <p className="mt-3">
                    <a href="">Update profile</a>
                </p>
            </div>
        </div>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="./images/baby_face.jpg" className="student-img mb-3" />
                <h4>Firstname Lastname</h4>
                <p className="card-text">Age 3</p>
                <a href="#" className="btn btn-secondary">Daily Log</a>
                <p className="mt-3">
                    <a href="">Update profile</a>
                </p>
            </div>
        </div>
        <button 
            type="button" onClick={handleClick} className="btn btn-primary my-4">Add a student</button>
      </div>
    );
  }
  
  export default Home;