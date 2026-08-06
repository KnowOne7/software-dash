import { Link } from "react-router"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { all_routes } from "../../../../routes/all_routes"


const FormHorizontal = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Form Horizontal
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
                                    Form Horizontal
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    <div className="lg:grid grid-cols-4 gap-5">
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Basic Form</h5>
                                </div>
                                <div className="card-body p-5">
                                    <form action="#">
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">First Name</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">Last Name</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">Email Address</label>
                                            <div className="col-span-3">
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">Username</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">Password</label>
                                            <div className="col-span-3">
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">
                                                Repeat Password
                                            </label>
                                            <div className="col-span-3">
                                                <input type="password" className="form-control" />
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
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Address Form</h5>
                                </div>
                                <div className="card-body p-5">
                                    <form action="#">
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">Address 1</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">Address 2</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">City</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">State</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">Country</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-4 mb-3">
                                            <label className="col-span-1 form-label">Postal Code</label>
                                            <div className="col-span-3">
                                                <input type="text" className="form-control" />
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
                    <div className="lg:grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h4 className="card-title">Two Column Horizontal Form</h4>
                                </div>
                                <div className="card-body p-5">
                                    <h6 className="mb-3">Personal Information</h6>
                                    <form action="#">
                                        <div className="lg:grid grid-cols-4 gap-5">
                                            <div className="col-span-2">
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">
                                                        First Name
                                                    </label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">Last Name</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">Gender</label>
                                                    <div className="col-span-6 flex items-center">
                                                        <div className="flex items-center me-5">
                                                            <input
                                                                className="text-primary border-borderColor me-2"
                                                                type="radio"
                                                                name="gender"
                                                                id="gender_male"
                                                                defaultValue="option1"
                                                                defaultChecked
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
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">
                                                        Blood Group
                                                    </label>
                                                    <div className="col-span-6">
                                                        <select className="select">
                                                            <option>Select</option>
                                                            <option value={1}>A+</option>
                                                            <option value={2}>O+</option>
                                                            <option value={3}>B+</option>
                                                            <option value={4}>AB+</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">Username</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">Email</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">Password</label>
                                                    <div className="col-span-6">
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">
                                                        Repeat Password
                                                    </label>
                                                    <div className="col-span-6">
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="mb-3">Address</h6>
                                        <div className="lg:grid grid-cols-4 gap-5">
                                            <div className="col-span-2">
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">
                                                        Address Line 1
                                                    </label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">
                                                        Address Line 2
                                                    </label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">State</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">City</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">Country</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-4">
                                                    <label className="col-span-2 form-label">
                                                        Postal Code
                                                    </label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control" />
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
                    <div className="lg:grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Two Column Horizontal Form 2</h5>
                                </div>
                                <div className="card-body p-5">
                                    <form action="#">
                                        <div className="lg:grid grid-cols-4 gap-5">
                                            <div className="col-span-2">
                                                <h6 className="mb-3">Personal Information</h6>
                                                <div className="lg:grid grid-cols-8 mb-3">
                                                    <label className="col-span-2 form-label">
                                                        First Name
                                                    </label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control " />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-3">
                                                    <label className="col-span-2 form-label">Last Name</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control " />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-3">
                                                    <label className="col-span-2 form-label">Password</label>
                                                    <div className="col-span-6">
                                                        <input type="password" className="form-control " />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-3">
                                                    <label className="col-span-2 form-label">State</label>
                                                    <div className="col-span-6">
                                                        <select className="select">
                                                            <option>Select State</option>
                                                            <option value={1}>California</option>
                                                            <option value={2}>Texas</option>
                                                            <option value={3}>Florida</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-3">
                                                    <label className="col-span-2 form-label">About</label>
                                                    <div className="col-span-6">
                                                        <textarea
                                                            rows={4}
                                                            cols={5}
                                                            className="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 placeholder:text-gray-400"
                                                            placeholder="Enter message"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <h6 className="mb-3">Personal Details</h6>
                                                <div className="lg:grid grid-cols-8">
                                                    <label className="col-span-2 form-label">Name</label>
                                                    <div className="col-span-6">
                                                        <div className="grid grid-cols-4 gap-5">
                                                            <div className="col-span-2">
                                                                <div className="mb-3">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="First Name"
                                                                        className="form-control "
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <div className="mb-3">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="Last Name"
                                                                        className="form-control "
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-3">
                                                    <label className="col-span-2 form-label">Email</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control " />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-3">
                                                    <label className="col-span-2 form-label">Phone</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control " />
                                                    </div>
                                                </div>
                                                <div className="lg:grid grid-cols-8 mb-3">
                                                    <label className="col-span-2 form-label">Address</label>
                                                    <div className="col-span-6">
                                                        <input type="text" className="form-control " />
                                                        <div className="grid grid-cols-4 gap-5 mt-4">
                                                            <div className="col-span-2">
                                                                <div className="mb-3">
                                                                    <select className="select">
                                                                        <option>Select Country</option>
                                                                        <option value={1}>USA</option>
                                                                        <option value={2}>France</option>
                                                                        <option value={3}>India</option>
                                                                        <option value={4}>Spain</option>
                                                                    </select>
                                                                </div>
                                                                <div className="mb-3">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="ZIP code"
                                                                        className="form-control "
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-span-2">
                                                                <div className="mb-3">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="State/Province"
                                                                        className="form-control "
                                                                    />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <input
                                                                        type="text"
                                                                        placeholder="City"
                                                                        className="form-control "
                                                                    />
                                                                </div>
                                                            </div>
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
                                    <h5 className="card-title">Horizontal form With Icons</h5>
                                </div>
                                <div className="card-body p-5">
                                    <form>
                                        <div className="lg:grid grid-cols-8 flex-wrap mb-3">
                                            <label
                                                htmlFor="inputEmail1"
                                                className="col-span-2 form-label"
                                            >
                                                Email
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <input
                                                        type="email"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-l-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        id="inputEmail1"
                                                    />
                                                    <div className="bg-white border border-borderColor text-gray-900 text-sm rounded-r-lg py-1.5 px-2.5">
                                                        <i className="ti ti-mail" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="lg:grid grid-cols-8 mb-3">
                                            <label
                                                htmlFor="inputPassword1"
                                                className="col-span-2 form-label"
                                            >
                                                Password
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <input
                                                        type="password"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-l-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        id="inputPassword1"
                                                    />
                                                    <div className="bg-white border border-borderColor text-gray-900 text-sm rounded-r-lg py-1.5 px-2.5">
                                                        <i className="ti ti-lock" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn bg-primary text-white">
                                            Sign in
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Horizontal form label sizing</h5>
                                </div>
                                <div className="card-body p-5">
                                    <div className="lg:grid grid-cols-8 mb-3">
                                        <label
                                            htmlFor="colFormLabelSm"
                                            className="col-span-2 form-label"
                                        >
                                            Email
                                        </label>
                                        <div className="col-span-6">
                                            <input
                                                type="email"
                                                className="bg-white border-borderColor text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                id="colFormLabelSm"
                                                placeholder="col-form-label-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="lg:grid grid-cols-8 mb-3">
                                        <label htmlFor="colFormLabel" className="col-span-2 form-label">
                                            Email
                                        </label>
                                        <div className="col-span-6">
                                            <input
                                                type="email"
                                                className="bg-white border-borderColor text-gray-900 text-base rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                id="colFormLabel"
                                                placeholder="col-form-label"
                                            />
                                        </div>
                                    </div>
                                    <div className="lg:grid grid-cols-8">
                                        <label
                                            htmlFor="colFormLabelLg"
                                            className="col-span-2 form-label"
                                        >
                                            Email
                                        </label>
                                        <div className="col-span-6">
                                            <input
                                                type="email"
                                                className="bg-white border-borderColor text-gray-900 text-lg rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                id="colFormLabelLg"
                                                placeholder="col-form-label-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h5 className="card-title">Auto sizing</h5>
                                </div>
                                <div className="card-body p-5">
                                    <form className="lg:grid grid-cols-5 flex-wrap gap-3 items-center mb-4">
                                        <div className="col-auto mb-3">
                                            <label className="hidden" htmlFor="autoSizingInput">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="autoSizingInput"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="col-auto mb-3">
                                            <label className="hidden" htmlFor="autoSizingInputGroup">
                                                Username
                                            </label>
                                            <div className="flex items-center">
                                                <div className="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5">
                                                    @
                                                </div>
                                                <input
                                                    type="text"
                                                    className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                    id="autoSizingInputGroup"
                                                    placeholder="Username"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-auto mb-3">
                                            <label className="hidden" htmlFor="autoSizingSelect">
                                                Preference
                                            </label>
                                            <select
                                                className="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                id="autoSizingSelect"
                                            >
                                                <option selected>Choose...</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                        <div className="col-auto mb-3">
                                            <div className="flex items-center">
                                                <input
                                                    className="border-borderColor text-primary rounded me-2"
                                                    type="checkbox"
                                                    id="autoSizingCheck"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="autoSizingCheck"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn bg-primary text-white">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                    <span className="font-semibold mb-2 block text-muted">
                                        You can then remix that once again withsize-specific column
                                        classes.
                                    </span>
                                    <form className="lg:grid grid-cols-8 gap-3 items-center mt-0">
                                        <div className="col-span-2 mb-3">
                                            <label className="hidden" htmlFor="specificSizeInputName">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="specificSizeInputName"
                                                placeholder="Jane Doe"
                                            />
                                        </div>
                                        <div className="col-span-2 mb-3">
                                            <label
                                                className="hidden"
                                                htmlFor="specificSizeInputGroupUsername"
                                            >
                                                Username
                                            </label>
                                            <div className="flex items-center">
                                                <div className="bg-white border border-borderColor text-gray-900 text-sm rounded-l-lg py-2 px-2.5">
                                                    @
                                                </div>
                                                <input
                                                    type="text"
                                                    className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                    id="specificSizeInputGroupUsername"
                                                    placeholder="Username"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-2 mb-3">
                                            <label className="hidden" htmlFor="specificSizeSelect">
                                                Preference
                                            </label>
                                            <select
                                                className="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                id="specificSizeSelect"
                                            >
                                                <option selected>Choose...</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                        </div>
                                        <div className="col-auto mb-3">
                                            <div className="flex items-center">
                                                <input
                                                    className="border-borderColor text-primary rounded me-2"
                                                    type="checkbox"
                                                    id="autoSizingCheck2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="autoSizingCheck2"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button type="submit" className="btn bg-primary text-white">
                                                Submit
                                            </button>
                                        </div>
                                    </form>
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

export default FormHorizontal