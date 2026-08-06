import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";

const TwoStepVerification = () => {
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
              <div>
                <div className="mb-5">
                  <h3 className="mb-2 text-[23px]">Login With Your Email Address</h3>
                  <p className="mb-0">
                    We sent a verification code to your email. Enter the code from the
                    email in the field below
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <input
                    type="text"
                    className="text-center text-[26px] font-bold rounded w-14 h-14 focus:outline-none border border-borderColor"
                    id="digit-1"
                    name="digit-1"
                    data-next="digit-2"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    className="text-center text-[26px] font-bold rounded w-14 h-14 focus:outline-none border border-borderColor"
                    id="digit-2"
                    name="digit-2"
                    data-next="digit-3"
                    data-previous="digit-1"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    className="text-center text-[26px] font-bold rounded w-14 h-14 focus:outline-none border border-borderColor"
                    id="digit-3"
                    name="digit-3"
                    data-next="digit-4"
                    data-previous="digit-2"
                    maxLength={1}
                  />
                  <input
                    type="text"
                    className="text-center text-[26px] font-bold rounded w-14 h-14 focus:outline-none border border-borderColor"
                    id="digit-4"
                    name="digit-4"
                    data-next="digit-5"
                    data-previous="digit-3"
                    maxLength={1}
                  />
                </div>
                <form method="post">
                  <div className="mb-5 text-center">
                    <p className="mb-0">Otp will expire in 09 :10</p>
                  </div>
                  <div>
                    <Link to={all_routes.resetPassword} className="btn btn-primary w-full">
                      Verify My Account
                    </Link>
                  </div>
                </form>
              </div>
              <div className="text-center pb-4">
                <p className="text-dark mb-0">Copyright © 2025 - CRMS</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6 mx-auto text-center h-full flex items-center">
            <div className="w-full h-full hidden lg:block min-h-screen">
              <ImageWithBasePath
                src="assets/img/authentication/verification-bg.jpg"
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

export default TwoStepVerification;
