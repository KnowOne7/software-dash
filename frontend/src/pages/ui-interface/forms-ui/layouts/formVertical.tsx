import { Link } from "react-router"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { all_routes } from "../../../../routes/all_routes"


const FormVertical = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Form Vertical
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
                                        Forms
                                    </Link>
                                    <span>
                                        <i className="ti ti-chevron-right" />
                                    </span>
                                </li>
                                <li className="text-dark font-medium" aria-current="page">
                                    Form Vertical
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    <div className="md:grid grid-cols-2 gap-5">
                        <div className="col-span-1">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Basic Form</h5>
                                </div>
                                <div className="card-body p-5">
                                    <form action="#">
                                        <div className="mb-3">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email Address</label>
                                            <input type="email" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Username</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Repeat Password</label>
                                            <input type="password" className="form-control" />
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn bg-primary text-white">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Address Form</h5>
                                </div>
                                <div className="card-body p-5">
                                    <form action="#">
                                        <div className="mb-3">
                                            <label className="form-label">Address Line 1</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Address Line 2</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">State</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Country</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Postal Code</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn bg-primary text-white">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="col-1">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h4 className="card-title">Two Column Vertical Form</h4>
                                </div>
                                <div className="card-body p-5">
                                    <form action="#">
                                        <h4 className="card-title mb-3">Personal Information</h4>
                                        <div className="md:grid grid-cols-4 gap-5">
                                            <div className="col-span-2">
                                                <div className="mb-3">
                                                    <label className="form-label">First Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Last Name</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Blood Group</label>
                                                    <select className="select">
                                                        <option>Select</option>
                                                        <option value={1}>A+</option>
                                                        <option value={2}>O+</option>
                                                        <option value={3}>B+</option>
                                                        <option value={4}>AB+</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="block">Gender:</label>
                                                    <div className="flex items-center">
                                                        <div className="flex items-center me-3">
                                                            <input
                                                                className="text-primary border-borderColor me-2"
                                                                type="radio"
                                                                name="gender"
                                                                id="gender_male"
                                                                defaultValue="option1"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="gender_male"
                                                            >
                                                                Male
                                                            </label>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <input
                                                                className="text-primary border-borderColor me-2"
                                                                type="radio"
                                                                name="gender"
                                                                id="gender_female"
                                                                defaultValue="option2"
                                                            />
                                                            <label
                                                                className="form-check-label"
                                                                htmlFor="gender_female"
                                                            >
                                                                Female
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="mb-3">
                                                    <label className="form-label">Username</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Email</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Password</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Repeat Password</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <h4 className="card-title mb-3">Postal Address</h4>
                                        <div className="md:grid grid-cols-4 gap-5">
                                            <div className="col-span-2">
                                                <div className="mb-3">
                                                    <label className="form-label">Address Line 1</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Address Line 2</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">State</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="mb-3">
                                                    <label className="form-label">City</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Country</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Postal Code</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn bg-primary text-white">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="col-12">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Two Column Vertical Form</h5>
                                </div>
                                <div className="card-body p-5">
                                    <form action="#">
                                        <div className="md:grid grid-cols-4 gap-5">
                                            <div className="col-span-2">
                                                <h5 className="card-title mb-2">Personal details</h5>
                                                <div className="mb-3">
                                                    <label className="form-label">Name:</label>
                                                    <input type="text" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Password:</label>
                                                    <input type="password" className="form-control" />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">State:</label>
                                                    <select className="select">
                                                        <option>Select State</option>
                                                        <option value={1}>California</option>
                                                        <option value={2}>Texas</option>
                                                        <option value={3}>Florida</option>
                                                    </select>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">Your Message:</label>
                                                    <textarea
                                                        rows={5}
                                                        cols={5}
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 placeholder:text-gray-400"
                                                        placeholder="Enter message"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <h5 className="card-title mb-2">Personal details</h5>
                                                <div className="md:grid grid-cols-4 gap-5">
                                                    <div className="col-span-2">
                                                        <div className="mb-3">
                                                            <label className="form-label">First Name:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <div className="mb-3">
                                                            <label className="form-label">Last Name:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:grid grid-cols-4 gap-5">
                                                    <div className="col-span-2">
                                                        <div className="mb-3">
                                                            <label className="form-label">Email:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <div className="mb-3">
                                                            <label className="form-label">Phone:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="grid">
                                                    <div className="col-12">
                                                        <div className="mb-3">
                                                            <label className="form-label">Address line:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:grid grid-cols-4 gap-5">
                                                    <div className="col-span-2">
                                                        <div className="mb-3">
                                                            <label className="form-label">Country:</label>
                                                            <select className="select">
                                                                <option>Select Country</option>
                                                                <option value={1}>USA</option>
                                                                <option value={2}>France</option>
                                                                <option value={3}>India</option>
                                                                <option value={4}>Spain</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <div className="mb-3">
                                                            <label className="form-label">State/Province:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="md:grid grid-cols-4 gap-5">
                                                    <div className="col-span-2">
                                                        <div className="mb-3">
                                                            <label className="form-label">ZIP code:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <div className="mb-3">
                                                            <label className="form-label">City:</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <button type="submit" className="btn bg-primary text-white">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid grid-cols-4 gap-5">
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Vertical Forms with icon</h5>
                                </div>
                                <div className="card-body p-5">
                                    <div className="mb-3">
                                        <label htmlFor="form-text1" className="form-label">
                                            Enter name
                                        </label>
                                        <div className="flex items-center">
                                            <div className="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5">
                                                <i className="ti ti-user" />
                                            </div>
                                            <input
                                                type="text"
                                                className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                id="form-text1"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="form-password1" className="form-label">
                                            Enter Password
                                        </label>
                                        <div className="flex items-center">
                                            <div className="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5">
                                                <i className="ti ti-lock" />
                                            </div>
                                            <input
                                                type="password"
                                                className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                id="form-password1"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="form-password1" className="form-label">
                                            Enter Repeat Password
                                        </label>
                                        <div className="flex items-center">
                                            <div className="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5">
                                                <i className="ti ti-lock" />
                                            </div>
                                            <input
                                                type="password"
                                                className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                id="form-password2"
                                                placeholder=""
                                            />
                                        </div>
                                    </div>
                                    <button className="btn bg-primary text-white" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Horizontal form label sizing</h5>
                                </div>
                                <div className="card-body p-5">
                                    <div className="mb-3">
                                        <label htmlFor="colFormLabelSm" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="colFormLabelSm"
                                            placeholder="col-form-label-sm"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="colFormLabel" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="bg-white border-borderColor text-gray-900 text-base rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                            id="colFormLabel"
                                            placeholder="col-form-label"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="colFormLabelLg" className="form-label">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="bg-white border-borderColor text-gray-900 text-lg rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                            id="colFormLabelLg"
                                            placeholder="col-form-label-lg"
                                        />
                                    </div>
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

    )
}

export default FormVertical