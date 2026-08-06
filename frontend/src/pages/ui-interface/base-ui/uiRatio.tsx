import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiRatio = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">
          Ratio Video
        </h4>
        <nav aria-label="breadcrumb">
          <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <Link to={all_routes.dealsDashboard} className="hover:underline text-gray-700">
                Home
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li>
              <Link
                to="#"
                className="hover:underline text-gray-700"
              >
                Base UI
              </Link>
              <span>
                <i className="ti ti-chevron-right" />
              </span>
            </li>
            <li className="text-dark font-medium" aria-current="page">
              Ratio Video
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* start row */}
      <div className="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div className="xl:col-span-6">
          <div className="card border border-borderColor rounded bg-white mb-4">
            <div className="card-header p-4 border-b border-borderColor">
              <h5 className="card-title">Responsive Ratio video 21:9</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-muted">
                Use class <code>.ratio-21x9</code>
                {/* 21:9 aspect ratio */}
              </p>
              <div className="ratio aspect-[16/9]">
                <iframe
                  src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
                  className="w-full h-full"
                />
              </div>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
          <div className="card border border-borderColor rounded bg-white mb-4">
            <div className="card-header p-4 border-b border-borderColor">
              <h5 className="card-title">Responsive Ratio video 1:1</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-muted">
                Use class <code>.ratio-1x1</code>
              </p>
              {/* 1:1 aspect ratio */}
              <div className="ratio aspect-[4/3]">
                <iframe
                  src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
                  className="h-full w-full"
                />
              </div>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-6">
          <div className="card border border-borderColor rounded bg-white mb-4">
            <div className="card-header p-4 border-b border-borderColor">
              <h5 className="card-title">Responsive Ratio video 16:9</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-muted">
                Use class <code>.ratio-16x9</code>
              </p>
              {/* 16:9 aspect ratio */}
              <div className="ratio aspect-[1/1]">
                <iframe
                  src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
                  className="h-full w-full"
                />
              </div>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
          <div className="card border border-borderColor rounded bg-white mb-4">
            <div className="card-header p-4 border-b border-borderColor">
              <h5 className="card-title">Responsive Ratio video 4:3</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-muted">
                Use class <code>.ratio-4x3</code>
              </p>
              {/* 4:3 aspect ratio */}
              <div className="ratio">
                <iframe
                  src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
                  className="h-full w-full"
                />
              </div>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
    </div>
    {/* Start Footer */}
   <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default UiRatio