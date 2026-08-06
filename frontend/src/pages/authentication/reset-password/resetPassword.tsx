import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
import { useState } from "react";


const ResetPassword = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
    newConfirmPassword: false,
  });

  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 items-center min-h-screen">
          <div className="col-span-1 lg:col-span-6 w-full mx-auto max-h-[900px] overflow-y-auto">
            {/* left item */}
            <div className="max-w-[500px] mx-auto flex flex-col justify-around gap-5 min-h-screen">
              <div className="text-center">
                <Link to={all_routes.dealsDashboard}>
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    alt="logo"
                    className="mx-auto w-[150px]"
                  />
                </Link>
              </div>
              <div className="mb-8 ">
                <div className="mb-4">
                  <h3 className="mb-2 text-[23px]">Reset Password?</h3>
                  <p className="mb-0">
                    Enter New Password &amp; Confirm Password to get inside.
                  </p>
                </div>
                <form method="post">
                  <div className="mb-4">
                    <label className="form-label">
                      Password<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="input-group input-group-flat pass-group">
                      <input
                        type={passwordVisibility.password ? "text" : "password"}
                        className="form-control pass-input"
                      />
                      <span
                        className={`ti toggle-password input-group-text absolute inset-y-0 right-0 flex items-center cursor-pointer border-l-0 ${passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                          }`}
                        onClick={() => togglePasswordVisibility("password")}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">
                      Confirm Password<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="input-group input-group-flat pass-group">
                      <input
                        type={passwordVisibility.confirmPassword ? "text" : "password"}
                        className="form-control pass-input"
                      />
                      <span
                        className={`ti toggle-password input-group-text absolute inset-y-0 right-0 flex items-center cursor-pointer border-l-0 ${passwordVisibility.confirmPassword ? "ti-eye" : "ti-eye-off"
                          }`}
                        onClick={() => togglePasswordVisibility("confirmPassword")}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">
                      New Confirm Password<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="input-group input-group-flat pass-group">
                      <input
                        type={passwordVisibility.newConfirmPassword ? "text" : "password"}
                        className="form-control pass-input"
                      />
                      <span
                        className={`ti toggle-password input-group-text absolute inset-y-0 right-0 flex items-center cursor-pointer border-l-0 ${passwordVisibility.newConfirmPassword ? "ti-eye" : "ti-eye-off"
                          }`}
                        onClick={() => togglePasswordVisibility("newConfirmPassword")}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Link to={all_routes.success} className="btn btn-primary w-full">
                      Change Password
                    </Link>
                  </div>
                </form>
                <div className="mb-4 text-center">
                  <p className="mb-0">
                    Return to
                    <Link to={all_routes.login} className="text-info font-bold ms-1">
                      Login
                    </Link>
                  </p>
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-10 border-2 border-t border-borderColor" />
                  <span className="text-gray-500 font-semibold">OR</span>
                  <div className="w-10 border-2 border-t border-borderColor" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <Link
                    to="#"
                    className="p-2 btn btn-info flex items-center justify-center w-full"
                  >
                    <ImageWithBasePath
                      className="h-6 w-6"
                      src="assets/img/icons/facebook-logo.svg"
                      alt="Facebook"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="p-2 btn btn-outline-light flex items-center justify-center w-full"
                  >
                    <ImageWithBasePath
                      className="h-6 w-6"
                      src="assets/img/icons/google-logo.svg"
                      alt="Google"
                    />
                  </Link>
                  <Link
                    to="#"
                    className="p-2 btn btn-dark flex items-center justify-center w-full"
                  >
                    <ImageWithBasePath
                      className="h-6 w-6"
                      src="assets/img/icons/apple-logo.svg"
                      alt="Apple"
                    />
                  </Link>
                </div>
              </div>
              <div className="text-center pb-4">
                <p className="text-dark mb-0">Copyright © - CRMS</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6 mx-auto text-center h-full flex items-center">
            <div className="w-full h-full  hidden lg:block min-h-screen">
              <ImageWithBasePath
                src="assets/img/authentication/reset-bg.jpg"
                alt="login"
                className="img-fluid rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>

  );
};

export default ResetPassword;
