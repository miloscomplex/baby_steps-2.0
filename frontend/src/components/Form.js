function Form() {
    return (
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword" placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
  }
  
  export default Form;