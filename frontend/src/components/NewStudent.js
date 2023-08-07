function NewStudent() {
    return (
      <div className="container">
        <h1>Please complete the forms below to enter the new child</h1>
        <form>
            <div className="mb-3">
                <label for="name" className="form-label">Child's name</label>
                <input type="text" className="form-control" id="name" />
            </div>
            <p className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Birthdate</label>
                <input type="text" className="form-control" id="birthdate" />
                <label for="time">Example time</label>
                <input type="time" className="form-control" id="time"></input>
                <input type="date" id="date"></input>
            </p>
            <div className="mb-3">
                <label for="gender-b" className="form-label">Boy</label>
                <input type="radio" className="m-2" id="gender-b" />
                <label for="gender-f" className="form-label">Girl</label>
                <input type="radio" className="m-2" id="gender-f" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    );
  }
  
  export default NewStudent;