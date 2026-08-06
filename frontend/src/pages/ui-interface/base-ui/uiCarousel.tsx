import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import { all_routes } from "../../../routes/all_routes";
import ImageWithBasePath from "../../../components/image-with-base-path";

const UiCarousel = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper relative pt-[50px] ml-[240px]">
        <div className="content p-5 pb-0">
          {/* Page Header */}
          <div className="mb-7">
            <h4 className="mb-1 text-xl font-bold flex items-center">
              Carousel
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                <li>
                  <Link
                    to={all_routes.dealsDashboard}
                    className="hover:underline text-gray-700"
                  >
                    Home
                  </Link>
                  <span>
                    <i className="ti ti-chevron-right" />
                  </span>
                </li>
                <li>
                  <Link to="#" className="hover:underline text-gray-700">
                    Base UI
                  </Link>
                  <span>
                    <i className="ti ti-chevron-right" />
                  </span>
                </li>
                <li className="text-dark font-medium" aria-current="page">
                  Carousel
                </li>
              </ol>
            </nav>
          </div>
          {/* End Page Header */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title">Basic</h5>
              </div>
              <div className="card-body p-4">
                <div
                  id="default-carousel"
                  className="relative w-full"
                  data-carousel="slide"
                >
                  {/* Carousel wrapper */}
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Item 1 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-1.jpg"
                        className="absolute block w-full h-full "
                        alt="img-1"
                      />
                    </div>
                    {/* Item 2 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-2.jpg"
                        className="absolute block w-full h-full "
                        alt="img-2"
                      />
                    </div>
                    {/* Item 3 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-3.jpg"
                        className="absolute block w-full h-full "
                        alt="img-3"
                      />
                    </div>
                    {/* Item 4 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-4.jpg"
                        className="absolute block w-full h-full "
                        alt="img-4"
                      />
                    </div>
                    {/* Item 5 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-5.jpg"
                        className="absolute block w-full h-full "
                        alt="img-5"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev=""
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <span className="sr-only">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next=""
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
              <div className="card-header border-b border-borderColor p-4">
                <h5 className="card-title">With Indicators</h5>
              </div>
              <div className="card-body p-4">
                <div
                  id="indicators-carousel"
                  className="relative w-full"
                  data-carousel="static"
                >
                  {/* Carousel wrapper */}
                  <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Item 1 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item="active"
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-1.jpg"
                        className="absolute block w-full h-full "
                        alt="img-1"
                      />
                    </div>
                    {/* Item 2 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-2.jpg"
                        className="absolute block w-full h-full "
                        alt="img-2"
                      />
                    </div>
                    {/* Item 3 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-3.jpg"
                        className="absolute block w-full h-full "
                        alt="img-3"
                      />
                    </div>
                    {/* Item 4 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-4.jpg"
                        className="absolute block w-full h-full "
                        alt="img-4"
                      />
                    </div>
                    {/* Item 5 */}
                    <div
                      className="hidden duration-700 ease-in-out"
                      data-carousel-item=""
                    >
                      <ImageWithBasePath
                        src="assets/img/media/img-5.jpg"
                        className="absolute block w-full h-full "
                        alt="img-5"
                      />
                    </div>
                  </div>
                  {/* Slider indicators */}
                  <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="true"
                      aria-label="Slide 1"
                      data-carousel-slide-to={0}
                    />
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 2"
                      data-carousel-slide-to={1}
                    />
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 3"
                      data-carousel-slide-to={2}
                    />
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 4"
                      data-carousel-slide-to={3}
                    />
                    <button
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label="Slide 5"
                      data-carousel-slide-to={4}
                    />
                  </div>
                  {/* Slider controls */}
                  <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev=""
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 1 1 5l4 4"
                        />
                      </svg>
                      <span className="sr-only">Previous</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next=""
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                      <svg
                        className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <span className="sr-only">Next</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Footer */}
        <CommonFooter />
        {/* End Footer */}
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default UiCarousel;
