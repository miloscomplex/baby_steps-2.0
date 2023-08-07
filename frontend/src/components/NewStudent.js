function NewStudent() {
    return (
      <div className="container">
        <h1 className="my-4">Please complete the forms below to enter the new child</h1>
        <form>
            <div class="row mb-3">
                <label for="name" className="form-label h5">Child's name</label>
                <div class="col">
                    <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div class="col">
                    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
            </div>
            <div className="mb-3">
                <label for="birthdate" className="form-label h5">Birthdate</label>
                <input type="date" className="form-control" id="date"></input>
            </div>
            <div className="mb-3">
                <label for="gender-b" className="form-label">Boy</label>
                <input type="radio"  name="genderRadios" value="boy" className="m-2" id="gender-b" />
                <label for="gender-f" className="form-label">Girl</label>
                <input type="radio" name="genderRadios" value="girl" className="m-2" id="gender-f" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    );
  }
  
  export default NewStudent;