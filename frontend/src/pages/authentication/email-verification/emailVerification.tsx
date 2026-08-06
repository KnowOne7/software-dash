import ImageWithBasePath from "../../../components/image-with-base-path";
import { Link } from "react-router";
import { all_routes } from "../../../routes/all_routes";

const EmailVerification = () => {
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
              <div className="mb-8 text-center">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success mb-4">
                  <i className="ti ti-check text-[26px] text-white" />
                </span>
                <div className="mb-4">
                  <h3 className="mb-2 text-[23px]">Verify Your Email</h3>
                  <p className="mb-0">
                    We've sent a link to your email ter4@example.com. Please <br />{" "}
                    follow the link inside to continue.
                  </p>
                </div>
                <form method="post">
                  <div className="mb-4 text-center">
                    <p className="mb-0">
                      Didn't receive an email?{" "}
                      <Link to="#" className="text-info font-bold">
                        {" "}
                        Resend Link
                      </Link>
                    </p>
                  </div>
                  <div>
                    <Link to={all_routes.twoStepVerification} className="btn btn-primary w-full">
                      Skip Now
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
                src="assets/img/authentication/email-bg.jpg"
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

export default EmailVerification;
