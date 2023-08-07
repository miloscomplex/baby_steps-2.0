function DailyLog() {
    return (
      <div className="container p-4">
        <h1>Here's Michael Daily Log</h1>
        <div className="card p-3 mb-2">
            <div className="card-body">
                <img src="./images/baby_face.jpg" className="student-img mb-3" />
                <h5>Millie Aire</h5>
                <h6>Arrival</h6>
                <form>
                    <label for="time">Example time</label>
                    <input type="time" className="form-control" id="time"></input>
                    <h6 className="mt-3">Meals</h6>
                    <div>
                        <label for="breakfast">finished breakfast</label>
                        <input type="checkbox" className="m-3"/>
                    </div>
                    <div>
                        <label for="snack">finished snack</label>
                        <input type="checkbox" className="m-3"/>
                    </div>
                    <div>
                        <label for="lunch">finished lunch</label>
                        <input type="checkbox" className="m-3"/>
                    </div>
                    <div>
                        <label for="afternoon-snack">finished afternoon snack</label>
                        <input type="checkbox" className="m-3"/>
                    </div>
                
                    <a href="#" className="btn mt-3 btn-secondary">Commit Changes</a>
                </form>
            </div>
        </div>
      </div>
    );
  }
  
  export default DailyLog;