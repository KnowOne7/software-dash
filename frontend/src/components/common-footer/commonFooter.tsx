import { Link } from "react-router-dom";

const CommonFooter = () => {
  return (
    <>
      {/* Start Footer */}
      <footer className="footer block md:flex justify-between md:text-left text-center p-4 px-5 bg-white border-t border-borderColor">
        <p className="mb-0">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link to="#" className="text-primary underline">
            CRMS
          </Link>
        </p>

        <div className="flex items-center gap-2 footer-links justify-center md:justify-end">
          <Link to="#" className="hover:text-primary">
            About
          </Link>
          <Link to="#" className="hover:text-primary">
            Terms
          </Link>
          <Link to="#" className="hover:text-primary">
            Contact Us
          </Link>
        </div>
      </footer>
      {/* End Footer */}
    </>
  );
};

export default CommonFooter;
