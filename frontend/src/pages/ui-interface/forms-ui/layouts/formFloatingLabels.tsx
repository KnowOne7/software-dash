import { Link } from "react-router"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { all_routes } from "../../../../routes/all_routes"


const FormFloatingLabels = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Floating Label
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
                                    Floating Label
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    {/* Floating Label */}
                    <div className="md:grid grid-cols-4 gap-5">
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <div className="card-title">Basic Examples</div>
                                </div>
                                <div className="card-body p-5">
                                    <div className="form-floating mb-3">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="floating_email"
                                                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="floating_email"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Email address
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <div className="relative">
                                            <input
                                                type="password"
                                                id="floating_password"
                                                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                            />
                                            <label
                                                htmlFor="floating_password"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Password
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <div className="card-title">Readonly plain text</div>
                                </div>
                                <div className="card-body p-5">
                                    <div className="form-floating mb-3">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="floating_email3"
                                                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-0 appearance-none"
                                                readOnly
                                            />
                                            <label
                                                htmlFor="floating_email3"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Empty input
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="form-control-plaintext"
                                                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-white border-0 appearance-none peer"
                                                defaultValue="name@example.com"
                                                readOnly
                                            />
                                            <label
                                                htmlFor="form-control-plaintext"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Input with value
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Floating Label */}
                    {/* Floating Label */}
                    <div className="md:grid grid-cols-4 gap-5">
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <div className="card-title">
                                        Floating Labels With Pre Defined Values
                                    </div>
                                </div>
                                <div className="card-body p-5">
                                    <form className="form-floating my-3">
                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="floating_email"
                                                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                                defaultValue="test@example.com"
                                            />
                                            <label
                                                htmlFor="floating_email"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Email address
                                            </label>
                                        </div>
                                    </form>
                                    <form className="form-floatin">
                                        <input
                                            type="email"
                                            className="bg-white border border-danger text-gray-900 text-sm rounded-input block w-full py-2 px-2.5 h-[38px] placeholder:text-gray-400 focus:border-danger"
                                            id="floatingInputInvalid"
                                            placeholder="name@example.com"
                                            defaultValue="test@example.com"
                                        />
                                        <label htmlFor="floatingInputInvalid">Invalid input</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <div className="card-title">Textareas</div>
                                </div>
                                <div className="card-body p-5">
                                    <div className="form-floating mb-3">
                                        <div className="relative">
                                            <textarea
                                                id="floatingTextarea"
                                                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-1 border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                                                placeholder=" "
                                                defaultValue={""}
                                            />
                                            <label
                                                htmlFor="floatingTextarea"
                                                className="absolute text-sm bg-white p-1 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Description
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-floating">
                                        <div className="relative">
                                            <textarea
                                                id="disabled_outlined"
                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-borderColor appearance-none bg-gray-50 focus:ring-0 peer"
                                                placeholder=" "
                                                disabled
                                                defaultValue={""}
                                            />
                                            <label
                                                htmlFor="disabled_outlined"
                                                className="absolute text-sm text-gray-400 dark:text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Disabled
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Floating Label */}
                    {/* Floating Label */}
                    <div className="md:grid grid-cols-4 gap-5">
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <div className="card-title">Floating Labels In Select</div>
                                </div>
                                <div className="card-body p-5">
                                    <div className="form-floating">
                                        <div className="relative">
                                            <select
                                                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-500 border-1 border-borderColor rounded-input focus:border-blue-600 appearance-none focus:outline-none focus:ring-0 peer"
                                                id="floatingSelectGrid"
                                            >
                                                <option selected>Open this select menu</option>
                                                <option value={1}>One</option>
                                                <option value={2}>Two</option>
                                                <option value={3}>Three</option>
                                            </select>
                                            <label
                                                htmlFor="floatingSelectGrid"
                                                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                            >
                                                Works with selects
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <div className="card-title">Floating Labels With Layouts</div>
                                </div>
                                <div className="card-body p-5">
                                    <div className="md:grid grid-cols-12 gap-5">
                                        <div className="col-span-6">
                                            <div className="form-floating mb-3">
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        id="floating_email1"
                                                        className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-1 border-borderColor rounded-input bg-white appearance-none focus:outline-none focus:ring-0 peer"
                                                        placeholder=" "
                                                        defaultValue="mdo@example.com"
                                                    />
                                                    <label
                                                        htmlFor="floating_email2"
                                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                                    >
                                                        Email address
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="form-floating mb-3">
                                                <div className="relative">
                                                    <select
                                                        className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-500 border-1 border-borderColor rounded-input bg-white focus:border-blue-600 appearance-none focus:outline-none focus:ring-0 peer"
                                                        id="floatingSelectGrid"
                                                    >
                                                        <option selected>Open this select menu</option>
                                                        <option value={1}>One</option>
                                                        <option value={2}>Two</option>
                                                        <option value={3}>Three</option>
                                                    </select>
                                                    <label
                                                        htmlFor="floatingSelectGrid"
                                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                                    >
                                                        Works with selects
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Floating Label */}
                    {/* Floating Label Colors */}
                    <div className="grid">
                        <div className="col-12">
                            <div className="card border border-borderColor rounded-input shadow-xs bg-white mb-6">
                                <div className="card-header p-5 border-b border-borderColor">
                                    <div className="card-title">Floating Label Colors</div>
                                </div>
                                <div className="card-body p-5">
                                    <div className="md:grid grid-cols-6 gap-5">
                                        <div className="col-span-2">
                                            <div className="form-floating mb-3 floating-primary">
                                                <div className="relative border border-primary rounded">
                                                    <input
                                                        type="email"
                                                        id="floating_primary"
                                                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                                                        placeholder=""
                                                    />
                                                    <label
                                                        htmlFor="floating_primary"
                                                        className="absolute text-sm text-primary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                                    >
                                                        Primary
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="form-floating mb-3 floating-secondary">
                                                <div className="relative border border-secondary rounded">
                                                    <input
                                                        type="email"
                                                        id="floating_secondary"
                                                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                                                        placeholder=""
                                                    />
                                                    <label
                                                        htmlFor="floating_secondary"
                                                        className="absolute text-sm text-secondary duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-secondary peer-focus:dark:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                                    >
                                                        Secondary
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="form-floating mb-3 floating-warning">
                                                <div className="relative border border-warning rounded">
                                                    <input
                                                        type="email"
                                                        id="floating_warning"
                                                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                                                        placeholder=""
                                                    />
                                                    <label
                                                        htmlFor="floating_warning"
                                                        className="absolute text-sm text-warning duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-warning peer-focus:dark:text-warning peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                                    >
                                                        Warning
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="form-floating mb-3 floating-info">
                                                <div className="relative border border-info rounded">
                                                    <input
                                                        type="email"
                                                        id="floating_info"
                                                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                                                        placeholder=""
                                                    />
                                                    <label
                                                        htmlFor="floating_info"
                                                        className="absolute text-sm text-info duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-info peer-focus:dark:text-info peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                                    >
                                                        Info
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="form-floating mb-3 floating-success">
                                                <div className="relative border border-success rounded">
                                                    <input
                                                        type="email"
                                                        id="floating_success"
                                                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                                                        placeholder=""
                                                    />
                                                    <label
                                                        htmlFor="floating_success"
                                                        className="absolute text-sm text-success duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-success peer-focus:dark:text-success peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                                    >
                                                        Success
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="form-floating mb-3 floating-danger">
                                                <div className="relative border border-danger rounded">
                                                    <input
                                                        type="email"
                                                        id="floating_danger"
                                                        className="block rounded px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 bg-gray-50 appearance-none peer"
                                                        placeholder=""
                                                    />
                                                    <label
                                                        htmlFor="floating_danger"
                                                        className="absolute text-sm text-danger duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-danger peer-focus:dark:text-danger peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                                    >
                                                        Danger
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Floating Label Colors */}
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
        </>

    )
}

export default FormFloatingLabels