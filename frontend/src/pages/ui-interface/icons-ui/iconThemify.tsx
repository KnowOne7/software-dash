import { Link } from "react-router"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import { useEffect } from "react"

const IconThemify = () => {
    useEffect(() => {
        const loadCSS = async () => {
            // Dynamically import the CSS file
            await import("../../../style/icon/themify/themify.css");
        };

        loadCSS();

        // Optionally, cleanup if you want to remove the CSS when the component unmounts
        return () => {
            // Find the link element with the href that includes the CSS file path and remove it
            const linkElement: any = document.querySelector(
                'link[href*="themify.css"]'
            );
            if (linkElement) {
                linkElement.parentNode.removeChild(linkElement);
            }
        };
    }, []);
    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
                <div className="content p-5 pb-0">
                    {/* Page Header */}
                    <div className="mb-7">
                        <h4 className="mb-1 text-xl font-bold flex items-center">
                            Themify Icon
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
                                        Icons
                                    </Link>
                                    <span>
                                        <i className="ti ti-chevron-right" />
                                    </span>
                                </li>
                                <li className="text-dark font-medium" aria-current="page">
                                    Themify Icon
                                </li>
                            </ol>
                        </nav>
                    </div>
                    {/* End Page Header */}
                    <div className="card border-borderColor rounded-[5px] shadow-sm bg-white mb-6">
                        <div className="card-header py-4 px-5 border-b border-borderColor">
                            <div className="card-title">Themify Icon</div>
                        </div>
                        <div className="card-body p-5">
                            <div className="icons-items">
                                <ul className="icons-list flex flex-wrap">
                                    <li>
                                        <i
                                            className="ti-arrow-up"
                                            data-tooltip-target="ti-arrow-up"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-up"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-up
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-right"
                                            data-tooltip-target="ti-arrow-right"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-right"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-right
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-left"
                                            data-tooltip-target="ti-arrow-left"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-left"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-left
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-down"
                                            data-tooltip-target="ti-arrow-down"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-down"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-down
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrows-vertical"
                                            data-tooltip-target="ti-arrows-vertical"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrows-vertical"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrows-vertical
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrows-horizontal"
                                            data-tooltip-target="ti-arrows-horizontal"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrows-horizontal"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrows-horizontal
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-angle-up"
                                            data-tooltip-target="ti-angle-up"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-angle-up"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-angle-up
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-angle-right"
                                            data-tooltip-target="ti-angle-right"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-angle-right"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-angle-right
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-angle-left"
                                            data-tooltip-target="ti-angle-left"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-angle-left"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-angle-left
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-angle-down"
                                            data-tooltip-target="ti-angle-down"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-angle-down"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-angle-down
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-angle-double-up"
                                            data-tooltip-target="ti-angle-double-up"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-angle-double-up"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-angle-double-up
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-angle-double-right"
                                            data-tooltip-target="ti-angle-double-right"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-angle-double-right"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-angle-double-right
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-angle-double-left"
                                            data-tooltip-target="ti-angle-double-left"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-angle-double-left"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-angle-double-left
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-angle-double-down"
                                            data-tooltip-target="ti-angle-double-down"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-angle-double-down"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-angle-double-down
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-move"
                                            data-tooltip-target="ti-move"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-move"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-move
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-fullscreen"
                                            data-tooltip-target="ti-fullscreen"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-fullscreen"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-fullscreen
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-top-right"
                                            data-tooltip-target="ti-arrow-top-right"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-top-right"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-top-right
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-top-left"
                                            data-tooltip-target="ti-arrow-top-left"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-top-left"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-top-left
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-circle-up"
                                            data-tooltip-target="ti-arrow-circle-up"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-circle-up"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-circle-up
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-circle-right"
                                            data-tooltip-target="ti-arrow-circle-right"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-circle-right"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-circle-right
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-circle-left"
                                            data-tooltip-target="ti-arrow-circle-left"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-circle-left"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-circle-left
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrow-circle-down"
                                            data-tooltip-target="ti-arrow-circle-down"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrow-circle-down"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrow-circle-down
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-arrows-corner"
                                            data-tooltip-target="ti-arrows-corner"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-arrows-corner"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-arrows-corner
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-split-v"
                                            data-tooltip-target="ti-split-v"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-split-v"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-split-v
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-split-v-alt"
                                            data-tooltip-target="ti-split-v-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-split-v-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-split-v-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-split-h"
                                            data-tooltip-target="ti-split-h"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-split-h"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-split-h
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-hand-point-up"
                                            data-tooltip-target="ti-hand-point-up"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-hand-point-up"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-hand-point-up
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-hand-point-right"
                                            data-tooltip-target="ti-hand-point-right"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-hand-point-right"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-hand-point-right
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-hand-point-left"
                                            data-tooltip-target="ti-hand-point-left"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-hand-point-left"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-hand-point-left
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-hand-point-down"
                                            data-tooltip-target="ti-hand-point-down"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-hand-point-down"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-hand-point-down
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-back-right"
                                            data-tooltip-target="ti-back-right"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-back-right"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-back-right
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-back-left"
                                            data-tooltip-target="ti-back-left"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-back-left"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-back-left
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-exchange-vertical"
                                            data-tooltip-target="ti-exchange-vertical"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-exchange-vertical"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-exchange-vertical
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-wand"
                                            data-tooltip-target="ti-wand"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-wand"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-wand
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-save"
                                            data-tooltip-target="ti-save"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-save"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-save
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-save-alt"
                                            data-tooltip-target="ti-save-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-save-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-save-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-direction"
                                            data-tooltip-target="ti-direction"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-direction"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-direction
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-direction-alt"
                                            data-tooltip-target="ti-direction-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-direction-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-direction-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-user"
                                            data-tooltip-target="ti-user"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-user"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-user
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-link"
                                            data-tooltip-target="ti-link"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-link"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-link
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-unlink"
                                            data-tooltip-target="ti-unlink"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-unlink"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-unlink
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-trash"
                                            data-tooltip-target="ti-trash"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-trash"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-trash
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-target"
                                            data-tooltip-target="ti-target"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-target"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-target
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-tag"
                                            data-tooltip-target="ti-tag"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-tag"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-tag
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-desktop"
                                            data-tooltip-target="ti-desktop"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-desktop"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-desktop
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-tablet"
                                            data-tooltip-target="ti-tablet"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-tablet"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-tablet
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-mobile"
                                            data-tooltip-target="ti-mobile"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-mobile"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-mobile
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-email"
                                            data-tooltip-target="ti-email"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-email"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-email
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-star"
                                            data-tooltip-target="ti-star"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-star"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-star
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-spray"
                                            data-tooltip-target="ti-spray"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-spray"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-spray
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-signal"
                                            data-tooltip-target="ti-signal"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-signal"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-signal
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shopping-cart"
                                            data-tooltip-target="ti-shopping-cart"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shopping-cart"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shopping-cart
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shopping-cart-full"
                                            data-tooltip-target="ti-shopping-cart-full"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shopping-cart-full"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shopping-cart-full
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-settings"
                                            data-tooltip-target="ti-settings"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-settings"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-settings
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-search"
                                            data-tooltip-target="ti-search"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-search"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-search
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-zoom-in"
                                            data-tooltip-target="ti-zoom-in"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-zoom-in"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-zoom-in
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-zoom-out"
                                            data-tooltip-target="ti-zoom-out"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-zoom-out"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-zoom-out
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-cut"
                                            data-tooltip-target="ti-cut"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-cut"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-cut
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-ruler"
                                            data-tooltip-target="ti-ruler"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-ruler"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-ruler
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-ruler-alt-2"
                                            data-tooltip-target="ti-ruler-alt-2"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-ruler-alt-2"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-ruler-alt-2
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-ruler-pencil"
                                            data-tooltip-target="ti-ruler-pencil"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-ruler-pencil"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-ruler-pencil
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-ruler-alt"
                                            data-tooltip-target="ti-ruler-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-ruler-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-ruler-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-bookmark"
                                            data-tooltip-target="ti-bookmark"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-bookmark"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-bookmark
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-bookmark-alt"
                                            data-tooltip-target="ti-bookmark-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-bookmark-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-bookmark-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-reload"
                                            data-tooltip-target="ti-reload"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-reload"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-reload
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-plus"
                                            data-tooltip-target="ti-plus"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-plus"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-plus
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-minus"
                                            data-tooltip-target="ti-minus"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-minus"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-minus
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-close"
                                            data-tooltip-target="ti-close"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-close"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-close
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-pin"
                                            data-tooltip-target="ti-pin"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-pin"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-pin
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-pencil"
                                            data-tooltip-target="ti-pencil"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-pencil"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-pencil
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-pencil-alt"
                                            data-tooltip-target="ti-pencil-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-pencil-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-pencil-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-paint-roller"
                                            data-tooltip-target="ti-paint-roller"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-paint-roller"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-paint-roller
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-paint-bucket"
                                            data-tooltip-target="ti-paint-bucket"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-paint-bucket"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-paint-bucket
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-na"
                                            data-tooltip-target="ti-na"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-na"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-na
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-medall"
                                            data-tooltip-target="ti-medall"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-medall"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-medall
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-medall-alt"
                                            data-tooltip-target="ti-medall-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-medall-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-medall-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-marker"
                                            data-tooltip-target="ti-marker"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-marker"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-marker
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-marker-alt"
                                            data-tooltip-target="ti-marker-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-marker-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-marker-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-lock"
                                            data-tooltip-target="ti-lock"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-lock"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-lock
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-unlock"
                                            data-tooltip-target="ti-unlock"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-unlock"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-unlock
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-location-arrow"
                                            data-tooltip-target="ti-location-arrow"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-location-arrow"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-location-arrow
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-layout"
                                            data-tooltip-target="ti-layout"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-layout"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-layout
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-layers"
                                            data-tooltip-target="ti-layers"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-layers"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-layers
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-layers-alt"
                                            data-tooltip-target="ti-layers-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-layers-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-layers-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-key"
                                            data-tooltip-target="ti-key"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-key"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-key
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-image"
                                            data-tooltip-target="ti-image"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-image"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-image
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-heart"
                                            data-tooltip-target="ti-heart"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-heart"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-heart
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-heart-broken"
                                            data-tooltip-target="ti-heart-broken"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-heart-broken"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-heart-broken
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-hand-stop"
                                            data-tooltip-target="ti-hand-stop"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-hand-stop"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-hand-stop
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-hand-open"
                                            data-tooltip-target="ti-hand-open"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-hand-open"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-hand-open
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-hand-drag"
                                            data-tooltip-target="ti-hand-drag"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-hand-drag"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-hand-drag
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-flag"
                                            data-tooltip-target="ti-flag"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-flag"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-flag
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-flag-alt"
                                            data-tooltip-target="ti-flag-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-flag-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-flag-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-flag-alt-2"
                                            data-tooltip-target="ti-flag-alt-2"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-flag-alt-2"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-flag-alt-2
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-eye"
                                            data-tooltip-target="ti-eye"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-eye"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-eye
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-import"
                                            data-tooltip-target="ti-import"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-import"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-import
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-export"
                                            data-tooltip-target="ti-export"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-export"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-export
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-cup"
                                            data-tooltip-target="ti-cup"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-cup"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-cup
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-crown"
                                            data-tooltip-target="ti-crown"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-crown"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-crown
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-comments"
                                            data-tooltip-target="ti-comments"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-comments"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-comments
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-comment"
                                            data-tooltip-target="ti-comment"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-comment"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-comment
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-comment-alt"
                                            data-tooltip-target="ti-comment-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-comment-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-comment-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-thought"
                                            data-tooltip-target="ti-thought"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-thought"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-thought
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-clip"
                                            data-tooltip-target="ti-clip"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-clip"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-clip
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-check"
                                            data-tooltip-target="ti-check"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-check"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-check
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-check-box"
                                            data-tooltip-target="ti-check-box"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-check-box"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-check-box
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-camera"
                                            data-tooltip-target="ti-camera"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-camera"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-camera
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-announcement"
                                            data-tooltip-target="ti-announcement"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-announcement"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-announcement
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-brush"
                                            data-tooltip-target="ti-brush"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-brush"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-brush
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-brush-alt"
                                            data-tooltip-target="ti-brush-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-brush-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-brush-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-palette"
                                            data-tooltip-target="ti-palette"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-palette"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-palette
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-briefcase"
                                            data-tooltip-target="ti-briefcase"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-briefcase"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-briefcase
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-bolt"
                                            data-tooltip-target="ti-bolt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-bolt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-bolt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-bolt-alt"
                                            data-tooltip-target="ti-bolt-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-bolt-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-bolt-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-blackboard"
                                            data-tooltip-target="ti-blackboard"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-blackboard"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-blackboard
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-bag"
                                            data-tooltip-target="ti-bag"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-bag"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-bag
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-world"
                                            data-tooltip-target="ti-world"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-world"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-world
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-wheelchair"
                                            data-tooltip-target="ti-wheelchair"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-wheelchair"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-wheelchair
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-car"
                                            data-tooltip-target="ti-car"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-car"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-car
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-truck"
                                            data-tooltip-target="ti-truck"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-truck"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-truck
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-timer"
                                            data-tooltip-target="ti-timer"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-timer"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-timer
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-ticket"
                                            data-tooltip-target="ti-ticket"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-ticket"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-ticket
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-thumb-up"
                                            data-tooltip-target="ti-thumb-up"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-thumb-up"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-thumb-up
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-thumb-down"
                                            data-tooltip-target="ti-thumb-down"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-thumb-down"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-thumb-down
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-stats-up"
                                            data-tooltip-target="ti-stats-up"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-stats-up"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-stats-up
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-stats-down"
                                            data-tooltip-target="ti-stats-down"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-stats-down"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-stats-down
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shine"
                                            data-tooltip-target="ti-shine"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shine"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shine
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shift-right"
                                            data-tooltip-target="ti-shift-right"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shift-right"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shift-right
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shift-left"
                                            data-tooltip-target="ti-shift-left"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shift-left"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shift-left
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shift-right-alt"
                                            data-tooltip-target="ti-shift-right-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shift-right-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shift-right-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shift-left-alt"
                                            data-tooltip-target="ti-shift-left-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shift-left-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shift-left-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shield"
                                            data-tooltip-target="ti-shield"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shield"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shield
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-notepad"
                                            data-tooltip-target="ti-notepad"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-notepad"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-notepad
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-server"
                                            data-tooltip-target="ti-server"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-server"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-server
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-pulse"
                                            data-tooltip-target="ti-pulse"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-pulse"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-pulse
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-printer"
                                            data-tooltip-target="ti-printer"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-printer"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-printer
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-power-off"
                                            data-tooltip-target="ti-power-off"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-power-off"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-power-off
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-plug"
                                            data-tooltip-target="ti-plug"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-plug"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-plug
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-pie-chart"
                                            data-tooltip-target="ti-pie-chart"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-pie-chart"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-pie-chart
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-panel"
                                            data-tooltip-target="ti-panel"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-panel"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-panel
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-package"
                                            data-tooltip-target="ti-package"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-package"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-package
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-music"
                                            data-tooltip-target="ti-music"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-music"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-music
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-music-alt"
                                            data-tooltip-target="ti-music-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-music-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-music-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-mouse"
                                            data-tooltip-target="ti-mouse"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-mouse"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-mouse
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-mouse-alt"
                                            data-tooltip-target="ti-mouse-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-mouse-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-mouse-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-money"
                                            data-tooltip-target="ti-money"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-money"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-money
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-microphone"
                                            data-tooltip-target="ti-microphone"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-microphone"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-microphone
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-menu"
                                            data-tooltip-target="ti-menu"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-menu"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-menu
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-menu-alt"
                                            data-tooltip-target="ti-menu-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-menu-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-menu-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-map"
                                            data-tooltip-target="ti-map"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-map"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-map
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-map-alt"
                                            data-tooltip-target="ti-map-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-map-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-map-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-location-pin"
                                            data-tooltip-target="ti-location-pin"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-location-pin"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-location-pin
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-light-bulb"
                                            data-tooltip-target="ti-light-bulb"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-light-bulb"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-light-bulb
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-info"
                                            data-tooltip-target="ti-info"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-info"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-info
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-infinite"
                                            data-tooltip-target="ti-infinite"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-infinite"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-infinite
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-id-badge"
                                            data-tooltip-target="ti-id-badge"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-id-badge"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-id-badge
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-hummer"
                                            data-tooltip-target="ti-hummer"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-hummer"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-hummer
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-home"
                                            data-tooltip-target="ti-home"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-home"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-home
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-help"
                                            data-tooltip-target="ti-help"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-help"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-help
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-headphone"
                                            data-tooltip-target="ti-headphone"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-headphone"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-headphone
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-harddrives"
                                            data-tooltip-target="ti-harddrives"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-harddrives"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-harddrives
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-harddrive"
                                            data-tooltip-target="ti-harddrive"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-harddrive"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-harddrive
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-gift"
                                            data-tooltip-target="ti-gift"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-gift"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-gift
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-game"
                                            data-tooltip-target="ti-game"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-game"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-game
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-filter"
                                            data-tooltip-target="ti-filter"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-filter"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-filter
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-files"
                                            data-tooltip-target="ti-files"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-files"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-files
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-file"
                                            data-tooltip-target="ti-file"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-file"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-file
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-zip"
                                            data-tooltip-target="ti-zip"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-zip"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-zip
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-folder"
                                            data-tooltip-target="ti-folder"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-folder"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-folder
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-envelope"
                                            data-tooltip-target="ti-envelope"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-envelope"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-envelope
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-dashboard"
                                            data-tooltip-target="ti-dashboard"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-dashboard"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-dashboard
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-cloud"
                                            data-tooltip-target="ti-cloud"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-cloud"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-cloud
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-cloud-up"
                                            data-tooltip-target="ti-cloud-up"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-cloud-up"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-cloud-up
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-cloud-down"
                                            data-tooltip-target="ti-cloud-down"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-cloud-down"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-cloud-down
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-clipboard"
                                            data-tooltip-target="ti-clipboard"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-clipboard"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-clipboard
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-calendar"
                                            data-tooltip-target="ti-calendar"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-calendar"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-calendar
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-book"
                                            data-tooltip-target="ti-book"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-book"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-book
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-bell"
                                            data-tooltip-target="ti-bell"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-bell"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-bell
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-basketball"
                                            data-tooltip-target="ti-basketball"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-basketball"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-basketball
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-bar-chart"
                                            data-tooltip-target="ti-bar-chart"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-bar-chart"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-bar-chart
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-bar-chart-alt"
                                            data-tooltip-target="ti-bar-chart-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-bar-chart-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-bar-chart-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-archive"
                                            data-tooltip-target="ti-archive"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-archive"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-archive
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-anchor"
                                            data-tooltip-target="ti-anchor"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-anchor"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-anchor
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-alert"
                                            data-tooltip-target="ti-alert"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-alert"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-alert
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-alarm-clock"
                                            data-tooltip-target="ti-alarm-clock"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-alarm-clock"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-alarm-clock
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-agenda"
                                            data-tooltip-target="ti-agenda"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-agenda"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-agenda
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-write"
                                            data-tooltip-target="ti-write"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-write"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-write
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-wallet"
                                            data-tooltip-target="ti-wallet"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-wallet"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-wallet
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-video-clapper"
                                            data-tooltip-target="ti-video-clapper"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-video-clapper"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-video-clapper
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-video-camera"
                                            data-tooltip-target="ti-video-camera"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-video-camera"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-video-camera
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-vector"
                                            data-tooltip-target="ti-vector"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-vector"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-vector
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-support"
                                            data-tooltip-target="ti-support"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-support"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-support
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-stamp"
                                            data-tooltip-target="ti-stamp"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-stamp"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-stamp
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-slice"
                                            data-tooltip-target="ti-slice"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-slice"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-slice
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-shortcode"
                                            data-tooltip-target="ti-shortcode"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-shortcode"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-shortcode
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-receipt"
                                            data-tooltip-target="ti-receipt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-receipt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-receipt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-pin2"
                                            data-tooltip-target="ti-pin2"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-pin2"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-pin2
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-pin-alt"
                                            data-tooltip-target="ti-pin-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-pin-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-pin-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-pencil-alt2"
                                            data-tooltip-target="ti-pencil-alt2"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-pencil-alt2"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-pencil-alt2
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-eraser"
                                            data-tooltip-target="ti-eraser"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-eraser"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-eraser
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-more"
                                            data-tooltip-target="ti-more"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-more"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-more
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-more-alt"
                                            data-tooltip-target="ti-more-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-more-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-more-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-microphone-alt"
                                            data-tooltip-target="ti-microphone-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-microphone-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-microphone-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-magnet"
                                            data-tooltip-target="ti-magnet"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-magnet"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-magnet
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-line-double"
                                            data-tooltip-target="ti-line-double"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-line-double"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-line-double
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-line-dotted"
                                            data-tooltip-target="ti-line-dotted"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-line-dotted"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-line-dotted
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-line-dashed"
                                            data-tooltip-target="ti-line-dashed"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-line-dashed"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-line-dashed
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-ink-pen"
                                            data-tooltip-target="ti-ink-pen"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-ink-pen"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-ink-pen
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-info-alt"
                                            data-tooltip-target="ti-info-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-info-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-info-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-help-alt"
                                            data-tooltip-target="ti-help-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-help-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-help-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-headphone-alt"
                                            data-tooltip-target="ti-headphone-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-headphone-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-headphone-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-gallery"
                                            data-tooltip-target="ti-gallery"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-gallery"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-gallery
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-face-smile"
                                            data-tooltip-target="ti-face-smile"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-face-smile"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-face-smile
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-face-sad"
                                            data-tooltip-target="ti-face-sad"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-face-sad"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-face-sad
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-credit-card"
                                            data-tooltip-target="ti-credit-card"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-credit-card"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-credit-card
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-comments-smiley"
                                            data-tooltip-target="ti-comments-smiley"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-comments-smiley"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-comments-smiley
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-time"
                                            data-tooltip-target="ti-time"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-time"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-time
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-share"
                                            data-tooltip-target="ti-share"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-share"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-share
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-share-alt"
                                            data-tooltip-target="ti-share-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-share-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-share-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-rocket"
                                            data-tooltip-target="ti-rocket"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-rocket"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-rocket
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-new-window"
                                            data-tooltip-target="ti-new-window"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-new-window"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-new-window
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-rss"
                                            data-tooltip-target="ti-rss"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-rss"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-rss
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                    <li>
                                        <i
                                            className="ti-rss-alt"
                                            data-tooltip-target="ti-rss-alt"
                                            data-tooltip-placement="top"
                                        />
                                        <div
                                            id="ti-rss-alt"
                                            role="tooltip"
                                            className="absolute z-10 invisible inline-block px-2 py-1 text-sm text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                                        >
                                            ti-rss-alt
                                            <div className="tooltip-arrow" data-popper-arrow="" />
                                        </div>
                                    </li>
                                </ul>
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

export default IconThemify