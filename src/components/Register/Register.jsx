import {} from "react";
import "./register.css";
function Register() {
  return (
    <div className="container container_wrapper d-flex justify-content-center align-items-center">
      <form className="form_wrapper shadow px-3 py-2">
        <div className="mb-4 d-flex align-items-center justify-content-center">
          <h6>SignUp</h6>
        </div>
        <div className="">
          <input type="text" placeholder="Full name" className="form-control" />
        </div>
        <div className="py-2">
          <input type="email" placeholder="email" className="form-control" />
        </div>
        <div className="form-check d-flex align-items-center">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label terms" htmlFor="flexCheckDefault">
            I agree to Zomatos <span>Terms of Service, Privacy Policy</span> and{" "}
            <span>Content Policies</span>
          </label>
        </div>
        <div className="d-grid py-3">
          <button className="btn btn-danger">Create a account</button>
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <div className="line"></div>
          <div className="mx-2">or</div>
          <div className="line"></div>
        </div>
        <div className="d-grid py-3">
          <button className="btn btn-dark">Sign in With Google</button>
        </div>
        <div>
          <p>
            Already have account ?{" "}
            <a href="/login" className="login_here">
              Login Here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
