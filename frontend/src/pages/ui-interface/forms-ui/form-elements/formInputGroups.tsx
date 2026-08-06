import { Link } from "react-router"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { all_routes } from "../../../../routes/all_routes"


const FormInputGroups = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Input Groups
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
                                    Input Groups
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    <div>
                        <div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h4 className="card-title">Basic Examples</h4>
                                </div>
                                <div className="card-body p-6">
                                    <form action="#">
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">
                                                Group Left
                                            </label>
                                            <div className="col-span-6">
                                                <div className="input-group flex items-center">
                                                    <span
                                                        className="border border-borderColor rounded-l-lg text-gray-900 text-base px-2 py-1.5"
                                                        id="basic-addon1"
                                                    >
                                                        @
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        placeholder="Username"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">
                                                Group Right
                                            </label>
                                            <div className="col-span-6">
                                                <div className="input-group flex items-center">
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-l-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        placeholder="Recipient's username"
                                                        aria-label="Recipient's username"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <span
                                                        className="input-group-text col-span-2 text-base leading-normal font-medium text-title border border-borderColor rounded-r-lg px-2 py-1.5"
                                                        id="basic-addon2"
                                                    >
                                                        @example.com
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className=" mb-1 text-sm col-span-2 leading-normal font-medium text-title">
                                                URL Example
                                            </label>
                                            <div className="col-span-6">
                                                <div className="input-group flex items-center">
                                                    <span
                                                        className="input-group-text border border-borderColor text-gray-900 text-base rounded-l-lg px-2 py-1.5"
                                                        id="basic-addon3"
                                                    >
                                                        https://example.com/users/
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        id="basic-url"
                                                        aria-describedby="basic-addon3"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">
                                                Group with Price
                                            </label>
                                            <div className="col-span-6">
                                                <div className="input-group flex items-center">
                                                    <span className="input-group-text text-base py-1.5 px-2 border border-borderColor rounded-l-lg text-gray-900">
                                                        $
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Amount (to the nearest dollar)"
                                                    />
                                                    <span className="input-group-text text-base py-1.5 px-2 border border-borderColor rounded-r-lg text-gray-900">
                                                        .00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="mb-1 text-base col-span-2 leading-normal font-medium text-title">
                                                Group with Price (Left)
                                            </label>
                                            <div className="col-span-6">
                                                <div className="input-group mb-3 flex items-center">
                                                    <span className="input-group-text text-gray-900 text-base border border-borderColor rounded-l-lg px-2 py-1.5">
                                                        $
                                                    </span>
                                                    <span className="input-group-text text-gray-900 text-base border border-borderColor px-2 py-1.5">
                                                        0.00
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                    />
                                                </div>
                                                <div className="input-group flex items-center">
                                                    <span className="input-group-text text-gray-900 text-base border border-borderColor rounded-l-lg px-2 py-1.5">
                                                        $
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Amount (to the nearest dollar)"
                                                    />
                                                    <span className="input-group-text text-gray-900 text-base border border-borderColor rounded-r-lg px-2 py-1.5">
                                                        .00
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">
                                                With textarea
                                            </label>
                                            <div className="col-span-6">
                                                <div className="input-group flex items-center">
                                                    <span className="input-group-text text-gray-900 text-base border border-borderColor rounded-l-lg px-2 py-1">
                                                        With textarea
                                                    </span>
                                                    <textarea
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full placeholder:text-gray-400"
                                                        aria-label="With textarea"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h4 className="card-title">Sizing</h4>
                                </div>
                                <div className="card-body p-5 pb-1">
                                    <form action="#">
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className=" mb-1 col-span-2 text-sm leading-normal font-medium text-title">
                                                Input Group Large
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <span
                                                        className="text-xl text-gray-900 border border-borderColor rounded-l-lg px-2 py-1"
                                                        id="inputGroup-sizing-lg"
                                                    >
                                                        Large
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-lg rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Sizing example input"
                                                        aria-describedby="inputGroup-sizing-lg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Input Group Default
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <span
                                                        className="text-base text-gray-900 border border-borderColor rounded-l-lg px-2 py-1.5"
                                                        id="inputGroup-sizing-default"
                                                    >
                                                        Default
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-base rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Sizing example input"
                                                        aria-describedby="inputGroup-sizing-default"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Input Group Small
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <span
                                                        className="text-sm text-gray-900 border border-borderColor rounded-l-lg p-2"
                                                        id="inputGroup-sizing-sm"
                                                    >
                                                        Small
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Sizing example input"
                                                        aria-describedby="inputGroup-sizing-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h4 className="card-title">Checkbox and Radio Addons</h4>
                                </div>
                                <div className="card-body p-5 pb-1">
                                    <form action="#">
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Checkbox
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <div className="border border-borderColor rounded-l-lg p-2">
                                                        <input
                                                            className="rounded text-primary border-borderColor"
                                                            type="checkbox"
                                                            defaultValue=""
                                                            aria-label="Checkbox for following text input"
                                                        />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Text input with checkbox"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Radio
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <div className="border border-borderColor rounded-l-lg p-2">
                                                        <input
                                                            className="text-primary border-borderColor"
                                                            type="radio"
                                                            defaultValue=""
                                                            aria-label="Radio button for following text input"
                                                        />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Text input with radio button"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h4 className="card-title">Multiple Addons</h4>
                                </div>
                                <div className="card-body p-5 pb-1">
                                    <form action="#">
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Radio and Text Addons
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <span className="border border-borderColor rounded-l-lg p-2">
                                                        <input
                                                            type="checkbox"
                                                            className="text-primary rounded"
                                                        />
                                                    </span>
                                                    <span className="border border-borderColor px-2 py-1.5 text-base text-gray-900">
                                                        $
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Two Addons
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <span className="border border-borderColor px-2 py-1.5 rounded-l-lg text-base text-gray-900">
                                                        $
                                                    </span>
                                                    <span className="border border-borderColor px-2 py-1.5 text-base text-gray-900">
                                                        0.00
                                                    </span>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <h4 className="card-title">Buttons with dropdowns</h4>
                                </div>
                                <div className="card-body p-5 pb-1">
                                    <form action="#">
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Left Dropdown Text Addons
                                            </label>
                                            <div className="col-span-6 flex items-center">
                                                <div>
                                                    <Link
                                                        to="#"
                                                        className="border rounded-l-lg p-2 bg-primary text-white font-semibold inline-flex items-center"
                                                        data-dropdown-toggle="dropdown-1"
                                                    >
                                                        Dropdowns
                                                        <i className="ti ti-chevron-down ml-1" />
                                                    </Link>
                                                    <ul
                                                        id="dropdown-1"
                                                        className="hidden p-4 border rounded bg-white shadow-lg"
                                                    >
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                Action
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                Another action
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                Something else here
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                to="#"
                                                                className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                            >
                                                                Seperates link
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="bg-white border-borderColor text-gray-900 text-sm rounded-r-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                    aria-label="Text input with dropdown button"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Right Dropdown Text Addons
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm rounded-l-lg  block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Text input with dropdown button"
                                                    />
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="border border-primary text-primary font-semibold rounded-r-lg p-2 bg-white hover:bg-primary hover:text-white inline-flex items-center"
                                                            data-dropdown-toggle="dropdown-2"
                                                        >
                                                            Dropdowns
                                                            <i className="ti ti-chevron-down ml-1" />
                                                        </Link>
                                                        <ul
                                                            id="dropdown-2"
                                                            className="hidden p-4 border rounded bg-white shadow-lg"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Action
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Another action
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Something else here
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Seperates link
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 grid grid-cols-8">
                                            <label className="col-span-2 mb-1 text-sm leading-normal font-medium text-title">
                                                Right Dropdown Text Addons
                                            </label>
                                            <div className="col-span-6">
                                                <div className="flex items-center">
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="border text-primary rounded-l-lg p-2 bg-primary-400 font-semibold hover:border-primary inline-flex items-center"
                                                            data-dropdown-toggle="dropdown-3"
                                                        >
                                                            Dropdowns
                                                            <i className="ti ti-chevron-down ml-1" />
                                                        </Link>
                                                        <ul
                                                            id="dropdown-3"
                                                            className="hidden p-4 border rounded bg-white shadow-lg"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Action before
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Another action before
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Something else here
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Seperates link
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="bg-white border-borderColor text-gray-900 text-sm block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400"
                                                        aria-label="Text input with 2 dropdown buttons"
                                                    />
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="border text-primary rounded-r-lg p-2 bg-primary-400 font-semibold hover:border-primary inline-flex items-center"
                                                            data-dropdown-toggle="dropdown-4"
                                                        >
                                                            Dropdowns
                                                            <i className="ti ti-chevron-down ml-1" />
                                                        </Link>
                                                        <ul
                                                            id="dropdown-4"
                                                            className="hidden p-4 border rounded bg-white shadow-lg"
                                                        >
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Action
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Another action
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Something else here
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link
                                                                    to="#"
                                                                    className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                >
                                                                    Seperates link
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
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

export default FormInputGroups