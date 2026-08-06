import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../components/image-with-base-path";

const UiCards = () => {
  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Cards</h4>
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
              Cards
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-12 gap-x-6">
        <div className="lg:col-span-4">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Card Default</h5>
            </div>
            <div className="p-6">
              <ImageWithBasePath
                className="card-img-top pb-2 rounded-0"
                src="assets/img/media/img-8.jpg"
                alt="Card image cap"
              />
              <h5 className="card-title mb-2">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card..
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">With Link</h5>
            </div>
            <div className="p-6">
              <ImageWithBasePath
                className="card-img-top pb-2 rounded-0"
                src="assets/img/media/img-8.jpg"
                alt="Card image cap"
              />
              <h5 className="card-title mb-2">Card title</h5>
              <p className="card-text mb-2">
                Some quick example text to build on the card..
              </p>
              <Link
                to="#"
                className="card-link text-decoration-underline text-primary"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">With Link</h5>
            </div>
            <div className="p-6">
              <ImageWithBasePath
                className="card-img-top pb-2 rounded-0"
                src="assets/img/media/img-8.jpg"
                alt="Card image cap"
              />
              <h5 className="card-title mb-2">Card title</h5>
              <p className="card-text mb-2">
                Some quick example text to build on the card..
              </p>
              <Link
                to="#"
                className="btn bg-primary border border-primary text-white text-center hover:bg-primary-hover hover:text-white btn-md inline-flex items-center"
              >
                Go Somewhere
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-12">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="p-6">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="lg:col-span-6">
                  <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                    <div className="p-6">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Link
                        to="#"
                        className="card-link text-decoration-underline text-primary"
                      >
                        Card link
                      </Link>
                      <Link
                        to="#"
                        className="card-link text-decoration-underline text-primary"
                      >
                        Another link
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6">
                  <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-0">
                    <div className="p-6">
                      <h5 className="card-title">Card title</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Card subtitle
                      </h6>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <Link
                        to="#"
                        className="card-link text-decoration-underline text-primary"
                      >
                        Card link
                      </Link>
                      <Link
                        to="#"
                        className="card-link text-decoration-underline text-primary"
                      >
                        Another link
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Header</h5>
            </div>
            <div className="p-6">
              <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-0">
                <div className="card-header border-b p-4 border-borderColor bg-light">
                  <h5 className="card-title">Card Header</h5>
                </div>
                <div className="p-6">
                  <h6 className="mb-2">Special title treatment</h6>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Footer</h5>
            </div>
            <div className="p-6">
              <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-0">
                <div className="p-6">
                  <h6 className="mb-2">Special title treatment</h6>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="px-5 py-4 bg-light">
                  <h5>Card Footer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Header and footer</h5>
            </div>
            <div className="p-6">
              <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-0">
                <div className="card-header border-b p-4 border-borderColor bg-light">
                  <h5 className="card-title">Card Header</h5>
                </div>
                <div className="p-6">
                  <h6 className="mb-2">Special title treatment</h6>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="px-5 py-4 bg-light">
                  <h5>Card Footer</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Horizontal Right Align Content</h5>
            </div>
            <div className="p-6">
              <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white overflow-hidden mb-0">
                <div className="grid grid-cols-12 g-0">
                  <div className="md:col-span-4">
                    <ImageWithBasePath
                      src="assets/img/media/img-9.jpg"
                      className="img-fluid rounded-start h-full"
                      alt="img"
                    />
                  </div>
                  <div className="md:col-span-8">
                    <div className="p-6">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Horizontal Left Align Content</h5>
            </div>
            <div className="p-6">
              <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white overflow-hidden mb-0">
                <div className="grid grid-cols-12 g-0">
                  <div className="md:col-span-8">
                    <div className="p-6">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <ImageWithBasePath
                      src="assets/img/media/img-9.jpg"
                      className="img-fluid rounded-end h-full"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-12">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Card styles</h5>
            </div>
            <div className="p-6 card-header-border pb-0">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs text-white mb-5 bg-primary">
                    <div className="card-header border-b p-4 border-borderColor">
                      <h5 className="card-title text-white">Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-white mb-2">
                        Special title treatment
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs text-white mb-5 bg-secondary">
                    <div className="card-header border-b p-4 border-borderColor">
                      <h5 className="card-title text-white">Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-white mb-2">
                        Special title treatment
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs text-white mb-5 bg-dark overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor">
                      <h5 className="card-title text-white">Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-white mb-2">
                        Special title treatment
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs text-white mb-5 bg-success overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor">
                      <h5 className="card-title text-white">Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-white mb-2">
                        Special title treatment
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs text-white mb-5 bg-warning">
                    <div className="card-header border-b p-4 border-borderColor">
                      <h5 className="card-title text-white">Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-white mb-2">
                        Special title treatment
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs text-white mb-5 bg-danger">
                    <div className="card-header border-b p-4 border-borderColor">
                      <h5 className="card-title text-white">Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-white mb-2">
                        Special title treatment
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs text-white mb-5 bg-info overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor">
                      <h5 className="card-title text-white">Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-white mb-2">
                        Special title treatment
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs text-white mb-5 bg-pink overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor">
                      <h5 className="card-title text-white">Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-white mb-2">
                        Special title treatment
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-12">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header border-b p-4 border-borderColor">
              <h5 className="card-title">Card Border</h5>
            </div>
            <div className="p-6 card-header-border pb-0">
              <div className="grid grid-cols-12 gap-x-6">
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs mb-5 border border-primary overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor bg-light">
                      <h5 className="card-title">Card Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-primary! mb-2">
                        Primary card title
                      </h5>
                      <p className="card-text text-primary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs mb-5 border border-secondary overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor bg-light">
                      <h5 className="card-title">Card Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-secondary! mb-2">
                        Secondary card title
                      </h5>
                      <p className="card-text text-secondary">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs mb-5 border border-success overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor bg-light">
                      <h5 className="card-title">Card Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-success! mb-2">
                        Success card title
                      </h5>
                      <p className="card-text text-success">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs mb-5 border border-danger overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor bg-light">
                      <h5 className="card-title">Card Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-danger! mb-2">
                        Danger card title
                      </h5>
                      <p className="card-text text-danger">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs mb-5 border border-warning overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor bg-light">
                      <h5 className="card-title">Card Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-warning! mb-2">
                        Warning card title
                      </h5>
                      <p className="card-text text-warning">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs mb-5 border-info">
                    <div className="card-header border-b p-4 border-borderColor bg-light">
                      <h5 className="card-title">Card Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-info! mb-2">
                        Info card title
                      </h5>
                      <p className="card-text text-info">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs mb-5 border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                    <div className="card-header border-b p-4 border-borderColor bg-light">
                      <h5 className="card-title">Card Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title mb-2">Light card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <div className="rounded-[5px] shadow-xs mb-5 border border-dark overflow-hidden">
                    <div className="card-header border-b p-4 border-borderColor bg-light">
                      <h5 className="card-title">Card Header</h5>
                    </div>
                    <div className="p-6">
                      <h5 className="card-title text-dark! mb-2">
                        Dark card title
                      </h5>
                      <p className="card-text text-dark">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Start Footer */}
   <CommonFooter/>
    {/* End Footer */}
  </div>
  {/* /Page Wrapper */}
</>

  );
};

export default UiCards;
