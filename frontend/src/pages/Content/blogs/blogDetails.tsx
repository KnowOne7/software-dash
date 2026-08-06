import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { all_routes } from "../../../routes/all_routes"


const BlogDetails = () => {
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper relative pt-[50px] ml-[240px]">
      <div className="content p-5">
        <div className="flex justify-center">
          <div className="w-full lg:w-10/12 mx-auto">
            <div className="mb-3">
              <Link
                to={all_routes.blog}
                className="d-inline-flex align-items-center fw-medium hover:text-primary"
              >
                <i className="ti ti-arrow-left me-1" />
                All Blogs
              </Link>
            </div>
            <h4 className="mb-4">Improve Efficiency for Sales</h4>
            {/* Blog Details */}
            <div className="mb-4 rounded">
              <ImageWithBasePath
                src="assets/img/blogs/blog-details-1.jpg"
                alt="img"
                className="img-fluid rounded w-100"
              />
            </div>
            <div className="card border border-borderColor bg-white rounded mb-0">
              <div className="card-body p-4">
                <p>
                  Boosting sales efficiency is essential for business growth, and
                  a CRM system can play a vital role in streamlining sales
                  processes. By centralizing customer data, automating repetitive
                  tasks, and tracking interactions, CRM tools allow sales teams to
                  focus more on closing deals and building relationships. It
                  minimizes time spent on manual updates and follow-ups, ensuring
                  no leads fall through the cracks. With insightful analytics and
                  performance tracking, sales managers can make smarter,
                  data-driven decisions. Ultimately, CRM platforms help businesses
                  shorten sales cycles, increase conversion rates, and enhance
                  customer satisfaction — all critical for driving long-term
                  success.
                </p>
                <p className="mb-4">
                  CRM systems not only organize your sales pipeline but also
                  enable better team collaboration and communication. With
                  real-time access to customer insights and sales activities,
                  teams can respond faster and more effectively. This results in
                  improved productivity, higher customer engagement, and a
                  consistent approach to meeting sales goals and boosting revenue.
                </p>
                <h6 className="mb-3">Latest Tags</h6>
                <div className="flex items-center flex-wrap gap-2">
                  <Link
                    to="#"
                    className="px-2 py-1.5 rounded text-dark bg-light text-[12px] font-medium hover:bg-gray-300 transition-all me-2"
                  >
                    Sales Efficiency
                  </Link>
                  <Link
                    to="#"
                    className="px-2 py-1.5 rounded text-dark bg-light text-[12px] font-medium hover:bg-gray-300 transition-all me-2"
                  >
                    CRM Strategies
                  </Link>
                  <Link
                    to="#"
                    className="px-2 py-1.5 rounded text-dark bg-light text-[12px] font-medium hover:bg-gray-300 transition-all me-2"
                  >
                    Sales Productivity
                  </Link>
                  <Link
                    to="#"
                    className="px-2 py-1.5 rounded text-dark bg-light text-[12px] font-medium hover:bg-gray-300 transition-all me-2"
                  >
                    Customer Relationship
                  </Link>
                  <Link
                    to="#"
                    className="px-2 py-1.5 rounded text-dark bg-light text-[12px] font-medium hover:bg-gray-300 transition-all me-2"
                  >
                    Sales Automation
                  </Link>
                  <Link
                    to="#"
                    className="px-1.5 py-1.5 rounded text-dark bg-light text-[12px] font-medium hover:bg-gray-300 transition-all"
                  >
                    Business Growth
                  </Link>
                </div>
              </div>
            </div>
            {/* /Blog Details */}
          </div>
        </div>
      </div>
      {/* Start Footer */}
     <CommonFooter/>
      {/* End Footer */}
    </div>
    {/* /Page Wrapper */}
  </>
  
  )
}

export default BlogDetails