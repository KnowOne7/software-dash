import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import  { useRef, useState } from "react"
import copy from "clipboard-copy"

const UiClipboard = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [copied, setCopied] = useState<string | null>(null)

    const handleCopy = (text: string, type: string) => {
        copy(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">Clipboard</h4>
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
                                        Advanced UI
                                    </Link>
                                    <span>
                                        <i className="ti ti-chevron-right" />
                                    </span>
                                </li>
                                <li className="text-dark font-medium" aria-current="page">
                                    Clipboard
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    <div className="grid grid-cols-1 gap-x-6">
                        {/* Drag Card */}
                        <div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header border-borderColor p-4 border-b">
                                    <h5 className="card-title">Copy from input</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="clipboard">
                                        <form className="form-horizontal">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                className="form-control mb-4"
                                                id="input-copy"
                                                defaultValue="http://www.admin-dashboard.com"
                                                readOnly
                                            />
                                            <button
                                                type="button"
                                                className="mb-1 me-1 btn clip-btn btn-primary"
                                                onClick={() => handleCopy(inputRef.current?.value || '', 'inputCopy')}
                                            >
                                                <i className="far fa-copy" /> {copied === 'inputCopy' ? 'Copied!' : 'Copy from Input'}
                                            </button>
                                            <button
                                                type="button"
                                                className="mb-1 btn clip-btn btn-dark"
                                                onClick={() => {
                                                    const value = inputRef.current?.value || '';
                                                    handleCopy(value, 'inputCut');
                                                    if (inputRef.current) {
                                                        inputRef.current.value = '';
                                                    }
                                                }}
                                            >
                                                <i className="fas fa-cut" /> {copied === 'inputCut' ? 'Cut!' : 'Cut from Input'}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header border-borderColor p-4 border-b">
                                    <h5 className="card-title">Copy from Text Area</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="clipboard">
                                        <form className="form-horizontal">
                                            <textarea
                                                ref={textareaRef}
                                                className="form-control mb-4"
                                                rows={3}
                                                id="textarea-copy"
                                                defaultValue={
                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                                                }
                                            />
                                            <button
                                                type="button"
                                                className="mb-1 me-1 btn clip-btn btn-primary"
                                                onClick={() => handleCopy(textareaRef.current?.value || '', 'textareaCopy')}
                                            >
                                                <i className="far fa-copy" /> {copied === 'textareaCopy' ? 'Copied!' : 'Copy from Textarea'}
                                            </button>
                                            <button
                                                type="button"
                                                className="mb-1 btn clip-btn btn-dark"
                                                onClick={() => {
                                                    const value = textareaRef.current?.value || '';
                                                    handleCopy(value, 'textareaCut');
                                                    if (textareaRef.current) {
                                                        textareaRef.current.value = '';
                                                    }
                                                }}
                                            >
                                                <i className="fas fa-cut" /> {copied === 'textareaCut' ? 'Cut!' : 'Cut from Textarea'}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header border-borderColor p-4 border-b">
                                    <h5 className="card-title">Copy Text from Paragraph</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="clipboard copy-txt">
                                        <p className="otp-pass">
                                            Here is your OTP <span id="paragraph-copy1">22991</span>.
                                        </p>
                                        <p className="mb-4">Please do not share it to anyone</p>
                                        <button
                                            type="button"
                                            className="mb-1 btn clip-btn btn-primary"
                                            onClick={() => handleCopy('22991', 'otpCopy')}
                                        >
                                            <i className="far fa-copy" /> {copied === 'otpCopy' ? 'Copied!' : 'Copy OTP'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div className="card-header border-borderColor p-4 border-b">
                                    <h5 className="card-title">Copy Hidden Text (Advanced)</h5>
                                </div>
                                <div className="card-body p-4">
                                    <div className="clipboard copy-txt">
                                        <p className="mb-4">
                                            Link -&gt;{" "}
                                            <span id="advanced-paragraph">
                                                http://www.example.com/example
                                            </span>
                                        </p>
                                        <button
                                            type="button"
                                            className="mb-1 me-1 btn clip-btn btn-primary"
                                            onClick={() => handleCopy('http://www.example.com/example', 'linkCopy')}
                                        >
                                            <i className="far fa-copy" /> {copied === 'linkCopy' ? 'Link Copied!' : 'Copy Link'}
                                        </button>
                                        <button
                                            type="button"
                                            className="mb-1 btn clip-btn btn-warning"
                                            onClick={() => handleCopy('2291', 'hiddenCode')}
                                        >
                                            <i className="far fa-copy" /> {copied === 'hiddenCode' ? 'Code Copied!' : 'Copy Hidden Code'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Drag Card */}
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

export default UiClipboard