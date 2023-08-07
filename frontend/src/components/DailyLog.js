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
                    <label for="hours">Hour:</label>
                    <select id="hours" className="form-control" name="hours">
                        <option value="06">00</option>
                        <option value="07">07</option>
                        <option value="08">08</option>
                        <option value="09">09</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                    </select>
        
                    <label for="minutes">Minute:</label>
                    <select id="minutes" className="form-control" name="minutes">
                        <option value="00">00</option>
                        <option value="05">05</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="35">35</option>
                        <option value="40">40</option>
                        <option value="45">45</option>
                        <option value="50">50</option>
                        <option value="55">55</option>
                    </select>
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