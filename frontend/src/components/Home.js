function Home() {
    return (
      <div className="container p-4">
        <h1>Welcome back, Michael</h1>
        <h4 className="mb-4">Current enrolled students</h4>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="./images/baby_face.jpg" className="student-img mb-3" />
                <h4>Student name goes here</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-secondary">Daily Log</a>
            </div>
        </div>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="" className="student-img mb-3" />
                <h4>Student name goes here</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-secondary">Daily Log</a>
            </div>
        </div>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="" className="student-img mb-3" />
                <h4>Student name goes here</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-secondary">Daily Log</a>
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;