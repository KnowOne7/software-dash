import { useState } from "react";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";
type PasswordField = "password" | "confirmPassword";

const LockScreen = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
  return (
    <>
      <>
        {/* Main Wrapper */}
        <div className="main-wrapper">
          {/* Page Wrapper */}
          <div className="page-wrapper relative">
            <div className="content">
              <div className="w-full flex flex-col justify-around items-center mx-auto text-center min-h-screen">
                <div className="text-center">
                  <ImageWithBasePath
                    src="assets/img/logo.svg"
                    alt="logo"
                    className="mx-auto w-[150px]"
                  />
                </div>
                <div className="bg-white rounded border border-borderColor p-6  max-w-[500px] w-full">
                  {/* Logo */}
                  <p className="mb-4">Welcome back!</p>
                  {/* Heading */}
                  <div className="mb-4">
                    <div className="text-center">
                      <span className="inline-block w-20 h-20 rounded-full overflow-hidden mb-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-14.jpg"
                          className="w-full h-full object-cover"
                          alt="Profile"
                        />
                      </span>
                      <h5 className="font-bold mb-0">Adrian Davies</h5>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-start">
                      Password<span className="text-danger ms-1">*</span>
                    </label>
                    <div className="input-group input-group-flat pass-group relative">
                      <input
                        type={passwordVisibility.password ? "text" : "password"}
                        className="form-control pass-input"
                      />
                      <span
                        className={`ti toggle-password input-group-text toggle-password absolute inset-y-0 right-0 flex items-center cursor-pointe border-l-0 ${passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                          }`}
                        onClick={() => togglePasswordVisibility("password")}
                      ></span>
                    </div>
                  </div>
                  <div>
                    <Link to={all_routes.dealsDashboard} className="btn btn-primary w-full">
                      Login
                    </Link>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center flex-wrap gap-4 mb-4">
                    <Link to="#" className="text-dark">
                      Terms &amp; Condition
                    </Link>
                    <Link to="#" className="text-dark">
                      Privacy
                    </Link>
                    <Link to="#" className="text-dark">
                      Help
                    </Link>
                    <div>
                      <Link
                        to="#"
                        className="text-dark"
                        data-dropdown-toggle="lang-dropdown"
                      >
                        English
                        <i className="ti ti-chevron-down ml-1" />
                      </Link>
                      <ul
                        id="lang-dropdown"
                        className="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
                      >
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          >
                            French
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          >
                            Spanish
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-dark mb-0">Copyright © 2025 - CRMS</p>
                </div>
              </div>
            </div>
            {/* /Page Wrapper */}
          </div>
          {/* /Page Wrapper */}
        </div>
        {/* /Main Wrapper */}
      </>

    </>

  );
};

export default LockScreen;
