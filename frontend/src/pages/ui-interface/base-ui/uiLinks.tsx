import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"


const UiLinks = () => {
  return (
    <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Links</h4>
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
              Links
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      {/* start row */}
      <div className="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div className="xl:col-span-6 flex">
          <div className="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Colored Links</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                You can use the <code>.link-*</code> classes to colorize links.
                Unlike the{" "}
                <Link to="#">
                  <code>.text-*</code> classes
                </Link>
                , these classes have a <code>:hover</code> and{" "}
                <code>:focus</code> state. Some of the link styles use a
                relatively light foreground color, and should only be used on a
                dark background in order to have sufficient contrast.
              </p>
              <p>
                <Link to="#" className="text-primary">
                  Primary link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-secondary">
                  Secondary link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-success">
                  Success link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-danger">
                  Danger link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-warning">
                  Warning link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-info">
                  Info link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-gray">
                  Light link
                </Link>
              </p>
              <p>
                <Link to="#" className="text-dark">
                  Dark link
                </Link>
              </p>
              <p className="mb-0">
                <Link to="#" className="link-body-emphasis">
                  Emphasis link
                </Link>
              </p>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-6 flex">
          <div className="card card-h-100 flex-1 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Link Utilities</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                <Link to="#">Colored link helpers</Link> have been updated to pair
                with our link utilities. Use the new utilities to modify the
                link opacity, underline opacity, and underline offset.
              </p>
              <p>
                <Link
                  to="#"
                  className="text-primary underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Primary link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="text-secondary underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Secondary link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="text-success underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Success link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="text-danger underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Danger link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="text-warning underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Warning link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="text-info underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Info link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="text-gray underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Light link
                </Link>
              </p>
              <p>
                <Link
                  to="#"
                  className="text-dark underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  Dark link
                </Link>
              </p>
              <p className="mb-0">
                <Link
                  to="#"
                  className="link-body-emphasis underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                >
                  Emphasis link
                </Link>
              </p>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      {/* start row */}
      <div className="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div className="xl:col-span-6 flex">
          <div className="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Link Opacity</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                Change the alpha opacity of the link <code>rgba()</code> color
                value with utilities. Please be aware that changes to a color’s
                opacity can lead to links with <em>insufficient</em> contrast.
              </p>
              <p>
                <Link className="opacity-10" to="#">
                  Link opacity 10
                </Link>
              </p>
              <p>
                <Link className="opacity-25" to="#">
                  Link opacity 25
                </Link>
              </p>
              <p>
                <Link className="opacity-50" to="#">
                  Link opacity 50
                </Link>
              </p>
              <p>
                <Link className="opacity-75" to="#">
                  Link opacity 75
                </Link>
              </p>
              <p className="mb-0">
                <Link className="opacity-100" to="#">
                  Link opacity 100
                </Link>
              </p>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-6 flex">
          <div className="card flex-1 card-h-100 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Link Hover Opacity</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                You can even change the opacity level on hover.
              </p>
              <p>
                <Link className="hover:opacity-10" to="#">
                  Link hover opacity 10
                </Link>
              </p>
              <p>
                <Link className="hover:opacity-25" to="#">
                  Link hover opacity 25
                </Link>
              </p>
              <p>
                <Link className="hover:opacity-50" to="#">
                  Link hover opacity 50
                </Link>
              </p>
              <p>
                <Link className="hover:opacity-75" to="#">
                  Link hover opacity 75
                </Link>
              </p>
              <p className="mb-0">
                <Link className="link-opacity-100" to="#">
                  Link hover opacity 100
                </Link>
              </p>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>
      {/*end row*/}
      {/* start row */}
      <div className="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div className="xl:col-span-6 flex">
          <div className="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Underline Color</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                Change the underline’s color independent of the link text color.
              </p>
              <p>
                <Link to="#" className="underline decoration-primary">
                  Primary underline
                </Link>
              </p>
              <p>
                <Link to="#" className="underline decoration-secondary">
                  Secondary underline
                </Link>
              </p>
              <p>
                <Link to="#" className="underline decoration-success">
                  Success underline
                </Link>
              </p>
              <p>
                <Link to="#" className="underline decoration-danger">
                  Danger underline
                </Link>
              </p>
              <p>
                <Link to="#" className="underline decoration-warning">
                  Warning underline
                </Link>
              </p>
              <p>
                <Link to="#" className="underline decoration-info">
                  Info underline
                </Link>
              </p>
              <p>
                <Link to="#" className="underline decoration-light">
                  Light underline
                </Link>
              </p>
              <p className="mb-0">
                <Link to="#" className="underline decoration-dark">
                  Dark underline
                </Link>
              </p>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-6 flex">
          <div className="card card-h-100 flex-1 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Underline Opacity</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                Change the underline’s opacity. Requires adding{" "}
                <code>.link-underline</code> to first set an <code>rgba()</code>{" "}
                color we use to then modify the alpha opacity.
              </p>
              <p>
                <Link
                  className="underline link-offset-2 link-underline decoration-opacity-0 hover:text-primary"
                  to="#"
                >
                  Underline opacity 0
                </Link>
              </p>
              <p>
                <Link
                  className="underline link-offset-2 link-underline decoration-opacity-10 hover:text-primary"
                  to="#"
                >
                  Underline opacity 10
                </Link>
              </p>
              <p>
                <Link
                  className="underline link-offset-2 link-underline decoration-opacity-25 hover:text-primary"
                  to="#"
                >
                  Underline opacity 25
                </Link>
              </p>
              <p>
                <Link
                  className="underline link-offset-2 link-underline decoration-opacity-50 hover:text-primary"
                  to="#"
                >
                  Underline opacity 50
                </Link>
              </p>
              <p>
                <Link
                  className="underline link-offset-2 link-underline decoration-opacity-75 hover:text-primary"
                  to="#"
                >
                  Underline opacity 75
                </Link>
              </p>
              <p className="mb-0">
                <Link
                  className="underline link-offset-2 link-underline decoration-opacity-100"
                  to="#"
                >
                  Underline opacity 100
                </Link>
              </p>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>
      {/* end row */}
      {/* start row */}
      <div className="grid grdid-cols-1 xl:grid-cols-12 gap-x-4">
        <div className="xl:col-span-6 flex">
          <div className="card border flex-1 border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Underline Offset</h5>
            </div>
            <div className="card-body flex flex-col gap-3 p-4">
              <p className="text-muted">
                Change the underline’s opacity. Requires adding{" "}
                <code>.link-underline</code> to first set an <code>rgba()</code>{" "}
                color we use to then modify the alpha opacity.
              </p>
              <p>
                <Link to="#">Default link</Link>
              </p>
              <p>
                <Link
                  className="underline hover:text-primary link-offset-1"
                  to="#"
                >
                  Offset 1 link
                </Link>
              </p>
              <p>
                <Link
                  className="underline hover:text-primary link-offset-2"
                  to="#"
                >
                  Offset 2 link
                </Link>
              </p>
              <p className="mb-0">
                <Link
                  className="underline hover:text-primary link-offset-3"
                  to="#"
                >
                  Offset 3 link
                </Link>
              </p>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
        <div className="xl:col-span-6 flex">
          <div className="card flex-1 card-h-100 border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Hover Variants</h5>
            </div>
            <div className="card-body p-4">
              <p className="text-muted mb-4">
                Just like the <code>.link-opacity-*-hover</code> utilities,{" "}
                <code>.link-offset</code> and{" "}
                <code>.link-underline-opacity</code> utilities include{" "}
                <code>:hover</code> variants by default. Mix and match to create
                unique link styles.
              </p>
              <Link
                className="link-offset-2 link-offset-3-hover hover:text-primary underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                to="#"
              >
                Underline opacity 0
              </Link>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>
      {/*end row */}
    </div>
    {/* Start Footer */}
    <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  )
}

export default UiLinks