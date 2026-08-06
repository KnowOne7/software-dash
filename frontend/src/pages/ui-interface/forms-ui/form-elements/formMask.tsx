
import { all_routes } from "../../../../routes/all_routes"
import { IMaskInput } from "react-imask"
import CommonFooter from "../../../../components/common-footer/commonFooter"
import { useRef } from "react"
import { Link } from "react-router"

const FormMask = () => {
    const dateRef = useRef<typeof IMaskInput>(null);
    const hourRef = useRef<typeof IMaskInput>(null);
    const dateHourRef = useRef<typeof IMaskInput>(null);
    const zipCodeRef = useRef<typeof IMaskInput>(null);
    const ssnRef = useRef<typeof IMaskInput>(null);
    const crazyZipRef = useRef<typeof IMaskInput>(null);
    const moneyRef = useRef<typeof IMaskInput>(null);
    const percentRef = useRef<typeof IMaskInput>(null);
    const telephoneRef = useRef<typeof IMaskInput>(null);
    const telephoneAreaRef = useRef<typeof IMaskInput>(null);
    const usTelephoneRef = useRef<typeof IMaskInput>(null);
    const celphoneRef = useRef<typeof IMaskInput>(null);
    const cpfRef = useRef<typeof IMaskInput>(null);
    const ipRef = useRef<typeof IMaskInput>(null);
    const creditCardRef = useRef<typeof IMaskInput>(null);
    const eyeScriptRef = useRef<typeof IMaskInput>(null);
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Form Inputmask
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
                                    Form Inputmask
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    <div className="card bg-white border border-borderColor mb-5 rounded">
                        <div className="card-header p-4 border-b border-borderColor">
                            <h5 className="card-title">Form Inputmask</h5>
                        </div>
                        <div className="card-body p-4 pb-1">
                            <p className="text-muted">
                                A JavaScript plugin for applying input masks to form fields and HTML
                                elements
                            </p>
                            {/* start row */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-5">
                                <div className="md:col-span-6">
                                    <form action="#">
                                        <div className="mb-3">
                                            <label className="form-label">Date</label>
                                            <IMaskInput
                                                mask="00/00/0000"
                                                placeholder="DD/MM/YYYY"
                                                className="form-control"
                                                ref={dateRef}
                                            />
                                            <span className="fs-13 text-muted">e.g "DD/MM/YYYY"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="00/00/0000"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Hour</label>
                                            <IMaskInput
                                                mask="00:00:00"
                                                placeholder="HH:MM:SS"
                                                className="form-control"
                                                ref={hourRef}
                                            />
                                            <span className="fs-13 text-muted">e.g "HH:MM:SS"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="00:00:00"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Date &amp; Hour</label>
                                            <IMaskInput
                                                mask="00/00/0000 00:00:00"
                                                placeholder="DD/MM/YYYY HH:MM:SS"
                                                className="form-control"
                                                ref={dateHourRef}
                                            />
                                            <span className="fs-13 text-muted">
                                                e.g "DD/MM/YYYY HH:MM:SS"
                                            </span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="00/00/0000
                                                    00:00:00"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">ZIP Code</label>
                                            <IMaskInput
                                                mask="00000-000"
                                                placeholder="00000-000"
                                                className="form-control"
                                                ref={zipCodeRef}
                                            />
                                            <span className="fs-13 text-muted">e.g "xxxxx-xxx"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="00000-000"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">SSN field 1</label>
                                            <IMaskInput
                                                mask="000-00-0000"
                                                placeholder="000-00-0000"
                                                className="form-control"
                                                ref={ssnRef}
                                            />
                                            <span className="form-text text-muted">
                                                e.g "999-99-9999"
                                            </span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="000-00-0000"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Crazy Zip Code</label>
                                            <IMaskInput
                                                mask="0-00-00-00"
                                                placeholder="0-00-00-00"
                                                className="form-control"
                                                ref={crazyZipRef}
                                            />
                                            <span className="fs-13 text-muted">e.g "x-xx-xx-xx"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="0-00-00-00"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Money</label>
                                            <IMaskInput
                                                mask="000.000.000.000.000,00"
                                                placeholder="000.000.000.000.000,00"
                                                className="form-control"
                                                ref={moneyRef}
                                                radix="."
                                                mapToRadix={[","]}
                                                unmask={true}
                                            />
                                            <span className="fs-13 text-muted">e.g "Your money"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-mask-format="000.000.000.000.000,00"
                                                    data-reverse="true"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Percent</label>
                                            <IMaskInput
                                                mask="00%"
                                                placeholder="00%"
                                                className="form-control"
                                                ref={percentRef}
                                                blocks={{
                                                    num: {
                                                        mask: Number,
                                                        min: 0,
                                                        max: 100
                                                    }
                                                }}
                                            />
                                            <span className="fs-13 text-muted">e.g "99%"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="00%"
                                                    data-reverse="true"
                                                </code>
                                            </p>
                                        </div>
                                    </form>
                                </div>{" "}
                                {/* end col */}
                                <div className="md:col-span-6">
                                    <form action="#">
                                        <div className="mb-3">
                                            <label className="form-label">Telephone</label>
                                            <IMaskInput
                                                mask="0000-0000"
                                                placeholder="0000-0000"
                                                className="form-control"
                                                ref={telephoneRef}
                                            />
                                            <span className="fs-13 text-muted">e.g "xxxx-xxxx"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="0000-0000"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Telephone with Code Area</label>
                                            <IMaskInput
                                                mask="(00) 0000-0000"
                                                placeholder="(00) 0000-0000"
                                                className="form-control"
                                                ref={telephoneAreaRef}
                                            />
                                            <span className="fs-13 text-muted">e.g "(xx) xxxx-xxxx"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="(00) 0000-0000"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">US Telephone</label>
                                            <IMaskInput
                                                mask="(000) 000-0000"
                                                placeholder="(000) 000-0000"
                                                className="form-control"
                                                ref={usTelephoneRef}
                                            />
                                            <span className="fs-13 text-muted">e.g "(xxx) xxx-xxxx"</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="(000) 000-0000"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">São Paulo Celphones</label>
                                            <IMaskInput
                                                mask="(00) 00000-0000"
                                                placeholder="(00) 00000-0000"
                                                className="form-control"
                                                ref={celphoneRef}
                                            />
                                            <span className="fs-13 text-muted">
                                                e.g "(xx) xxxxx-xxxx"
                                            </span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="(00)
                                                    00000-0000"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">CPF</label>
                                            <IMaskInput
                                                mask="000.000.000-00"
                                                placeholder="000.000.000-00"
                                                className="form-control"
                                                ref={cpfRef}
                                            />
                                            <span className="fs-13 text-muted">
                                                e.g "xxx.xxx.xxxx-xx"
                                            </span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-mask-format="000.000.000-00" data-reverse="true"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">IP Address</label>
                                            <IMaskInput
                                                mask="099.099.099.099"
                                                placeholder="000.000.000.000"
                                                className="form-control"
                                                ref={ipRef}
                                            />
                                            <span className="fs-13 text-muted">
                                                e.g "xxx.xxx.xxx.xxx"
                                            </span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask"
                                                    data-mask-format="099.099.099.099"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Credit Card Number</label>
                                            <IMaskInput
                                                mask="0000 0000 0000 0000"
                                                placeholder="0000 0000 0000 0000"
                                                className="form-control"
                                                ref={creditCardRef}
                                            />
                                            <span className="form-text text-muted">
                                                e.g "xxxx.xxxx.xxxx.xxxx"
                                            </span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask"
                                                    data-mask-format="0000.0000.0000.0000"
                                                </code>
                                            </p>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Eye Script</label>
                                            <IMaskInput
                                                mask="~0.00 ~0.00 000"
                                                placeholder="~0.00 ~0.00 000"
                                                className="form-control"
                                                ref={eyeScriptRef}
                                            />
                                            <span className="form-text text-muted">~9.99 ~9.99 999</span>
                                            <p className="mt-1">
                                                Add attribute{" "}
                                                <code className="text-[#DD2590]">
                                                    data-toggle="input-mask" data-mask-format="~0.00 ~0.00
                                                    000"
                                                </code>
                                            </p>
                                        </div>
                                    </form>
                                </div>{" "}
                                {/* end col */}
                            </div>
                            {/* end row */}
                        </div>{" "}
                        {/* end card body */}
                    </div>{" "}
                    {/* end card */}
                </div>
                {/* Start Footer */}
                <CommonFooter />
                {/* End Footer */}
            </div>
            {/* /Page Wrapper */}
        </>

    )
}

export default FormMask