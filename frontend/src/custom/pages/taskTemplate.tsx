import { Link } from "react-router"
import TaskTemplate from '../components/task-template'
import PipelineList from '../components/pipeline-list'

const LayoutRTL = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper relative pt-[56px] mr-[240px]">
                <div className="content p-5">
                    {/* Page Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                        <div>
                            <h4>Deals Dashboard</h4>
                        </div>

                        <div className="flex items-center flex-wrap gap-2">
                            <TaskTemplate />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                        <div>
                            <h4>Deals Dashboard</h4>
                        </div>

                        <div className="flex items-center flex-wrap gap-2">
                            <PipelineList />
                        </div>
                    </div>
                    {/* End Page Header */}
                   
                </div>
                {/* Start Footer */}
                <footer className="footer block md:flex justify-between md:text-left text-center p-4 px-5 bg-white border-t border-borderColor">
                    <p className="mb-0">
                        Copyright ©{" "}2025{" "}
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

export default LayoutRTL