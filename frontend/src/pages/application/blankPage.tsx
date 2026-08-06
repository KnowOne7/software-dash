import { Link } from "react-router"

const BlankPage = () => {
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 className="mb-1 text-xl font-bold flex items-center">
            Blank Page
          </h4>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {/* Refresh Button */}
          <button
            className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh"
          >
            <i className="ti ti-refresh" />
          </button>
          {/* Collapse Button */}
          <button
            className="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse"
            id="collapse-header"
          >
            <i className="ti ti-transition-top" />
          </button>
        </div>
      </div>
      {/* End Page Header */}
    </div>
    {/* Start Footer */}
    <footer className="footer block md:flex justify-between md:text-left text-center p-4 bg-white border-t border-borderColor">
      <p className="mb-0">
        Copyright ©
        <Link to="#" className="text-primary underline">
          CRMS
        </Link>
      </p>
      <div className="flex items-center gap-2 footer-links justify-center justify-md-end">
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
  </div>
  {/* /Page Wrapper */}
</>
  )
}

export default BlankPage