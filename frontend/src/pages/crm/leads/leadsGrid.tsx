import { useEffect } from 'react'
import CommonFooter from '../../../components/common-footer/commonFooter'
import ImageWithBasePath from '../../../components/image-with-base-path'
import { Link } from 'react-router'
import { all_routes } from '../../../routes/all_routes'
import HeaderActions from '../../../components/header-actions/headerActions'
import LeadsModal from './modal/leadsModal'
import CommonDatePicker from '../../../components/common-date-picker/commonDatePicker'
import { closeDropdown } from '../../../utils/dropdownUtils'

const LeadsGrid = () => {
  useEffect(() => {
    const draggableSelector = ".kanban-card"
    const containerSelector = ".kanban-drag-wrap"

    const setDraggable = (el: Element) => {
      const node = el as HTMLElement
      node.setAttribute("draggable", "true")
      node.addEventListener("dragstart", handleDragStart)
      node.addEventListener("dragend", handleDragEnd)
    }

    const handleDragStart = (e: DragEvent) => {
      const target = e.currentTarget as HTMLElement
      e.dataTransfer?.setData("text/plain", "kanban")
      e.dataTransfer?.setDragImage(new Image(), 0, 0)
      requestAnimationFrame(() => target.classList.add("dragging"))
    }

    const handleDragEnd = (e: DragEvent) => {
      const target = e.currentTarget as HTMLElement
      target.classList.remove("dragging")
    }

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault()
      const container = e.currentTarget as HTMLElement
      const afterEl = getDragAfterElement(container, e.clientY)
      const dragging = document.querySelector(`${draggableSelector}.dragging`) as HTMLElement | null
      if (!dragging) return
      if (afterEl == null) {
        container.appendChild(dragging)
      } else {
        container.insertBefore(dragging, afterEl)
      }
    }

    const handleDrop = (e: DragEvent) => {
      e.preventDefault()
    }

    const getDragAfterElement = (container: HTMLElement, y: number) => {
      const elements = [...container.querySelectorAll(draggableSelector + ":not(.dragging)")] as HTMLElement[]
      return elements.reduce<{ offset: number; element: HTMLElement | null }>((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
          return { offset, element: child }
        } else {
          return closest
        }
      }, { offset: Number.NEGATIVE_INFINITY, element: null }).element
    }

    const containers = Array.from(document.querySelectorAll(containerSelector)) as HTMLElement[]
    const cards = Array.from(document.querySelectorAll(draggableSelector))
    cards.forEach(setDraggable)
    containers.forEach((c) => {
      c.addEventListener("dragover", handleDragOver)
      c.addEventListener("drop", handleDrop)
    })

    return () => {
      cards.forEach((el) => {
        const node = el as HTMLElement
        node.removeAttribute("draggable")
        node.removeEventListener("dragstart", handleDragStart)
        node.removeEventListener("dragend", handleDragEnd)
      })
      containers.forEach((c) => {
        c.removeEventListener("dragover", handleDragOver)
        c.removeEventListener("drop", handleDrop)
      })
    }
  }, [])
  return (
    <>
    {/* Page Wrapper */}
    <div className="page-wrapper relative pt-[50px] ml-[240px]">
      <div className="content p-5">
        {/* Page Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-7">
          <div>
            <h4 className="mb-1 text-xl font-bold flex items-center">
              Leads
              <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                125
              </span>
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
                <li className="text-dark font-medium" aria-current="page">
                  Leads
                </li>
              </ol>
            </nav>
          </div>
         <HeaderActions/>
        </div>
        {/* End Page Header */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex flex-wrap items-center gap-y-3">
            {/* Search Input with Icon */}
            <div className="relative me-3">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                <i className="ti ti-search" />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
              />
            </div>
            <div className="relative">
              <button
                className="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                data-dropdown-toggle="filter-dropdown"
              >
                <i className="ti ti-filter me-1" />
                Filter
                <i className="ti ti-chevron-down ml-1" />
              </button>
              <div
                id="filter-dropdown"
                className="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px]"
              >
                <div className="filter-header flex items-center justify-between border-b  border-borderColor p-3">
                  <h6 className="mb-0">
                    <i className="ti ti-filter me-1" />
                    Filter
                  </h6>
                  <button
                    onClick={() => closeDropdown('filter-dropdown')}
                    className="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none focus:ring-0"
                  >
                    <i className="ti ti-x" />
                  </button>
                </div>
                <div
                  id="accordionExample"
                  data-accordion="collapse"
                  className="p-4"
                >
                  <div className="mb-4">
                    <h2 id="accordion-heading-1">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-body-1"
                      >
                        <span className="text-dark">
                          <i className="ti ti-chevron-right me-2" />
                          Lead Name
                        </span>
                      </button>
                    </h2>
                    <div
                      id="accordion-body-1"
                      className="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-1"
                      data-accordion-body=""
                    >
                      <div className="relative mb-4">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                          <i className="ti ti-search" />
                        </span>
                        <input
                          type="text"
                          placeholder="Search"
                          className="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                        />
                      </div>
                      <ul className="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="flex items-center space-x-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-06.jpg"
                                alt="Elizabeth"
                                className="h-6 w-6 rounded-full"
                              />
                              <span>Elizabeth Morgan</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="flex items-center space-x-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-40.jpg"
                                alt="Katherine"
                                className="h-6 w-6 rounded-full"
                              />
                              <span>Katherine Brooks</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="flex items-center space-x-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-05.jpg"
                                alt="Katherine"
                                className="h-6 w-6 rounded-full"
                              />
                              <span>Sophia Lopez</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="flex items-center space-x-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-10.jpg"
                                alt="Katherine"
                                className="h-6 w-6 rounded-full"
                              />
                              <span>John Michael</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="flex items-center space-x-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-15.jpg"
                                alt="Katherine"
                                className="h-6 w-6 rounded-full"
                              />
                              <span>Natalie Brooks</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="flex items-center space-x-2">
                              <ImageWithBasePath
                                src="assets/img/users/user-01.jpg"
                                alt="Katherine"
                                className="h-6 w-6 rounded-full"
                              />
                              <span>William Turner</span>
                            </span>
                          </label>
                        </li>
                      </ul>
                      {/* Load More */}
                      <div className="mt-4">
                        <button className="text-primary hover:underline">
                          Load More
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 id="accordion-heading-3">
                      <button
                        type="button"
                        className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-3"
                        aria-expanded="true"
                        aria-controls="accordion-body-3"
                      >
                        <span className="text-dark">
                          <i className="ti ti-chevron-right me-2" />
                          Company Name
                        </span>
                      </button>
                    </h2>
                    <div
                      id="accordion-body-3"
                      className="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-3"
                      data-accordion-body=""
                    >
                      <div className="relative mb-4">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                          <i className="ti ti-search" />
                        </span>
                        <input
                          type="text"
                          placeholder="Search"
                          className="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                        />
                      </div>
                      <ul className="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            NovaWave LLC
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            BlueSky Industries
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Silver Hawk
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Summit Peak
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 id="accordion-heading-6">
                      <button
                        type="button"
                        className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-6"
                        aria-expanded="true"
                        aria-controls="accordion-body-6"
                      >
                        <span className="text-dark">
                          <i className="ti ti-chevron-right me-2" />
                          Lead Status
                        </span>
                      </button>
                    </h2>
                    <div
                      id="accordion-body-6"
                      className="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-6"
                      data-accordion-body=""
                    >
                      <ul className="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Closed
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Not Closed
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Contacted
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Lost
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 id="accordion-heading-5">
                      <button
                        type="button"
                        className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-5"
                        aria-expanded="true"
                        aria-controls="accordion-body-5"
                      >
                        <span className="text-dark">
                          <i className="ti ti-chevron-right me-2" />
                          Created Date
                        </span>
                      </button>
                    </h2>
                    <div
                      id="accordion-body-5"
                      className="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-5"
                      data-accordion-body=""
                    >
                      <div className="input-group w-auto input-group-flat">
                       <CommonDatePicker placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to="#"
                      className="btn border border-borderColor text-center w-full"
                    >
                      Reset
                    </Link>
                    <Link
                      to={all_routes.contactList}
                      className="btn btn-primary w-full"
                    >
                      Filter
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <div className="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
              <Link
                to={all_routes.leadsList}
                className="w-7 h-7 flex items-center justify-center rounded text-default me-1"
              >
                <i className="ti ti-list-tree" />
              </Link>
              <Link
                to={all_routes.leads}
                className="w-7 h-7 flex items-center justify-center rounded text-white bg-teal"
              >
                <i className="ti ti-layout-grid" />
              </Link>
            </div>
            {/* Add New Button */}
            <Link
              to="#"
              className="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
              data-drawer-target="offcanvas_add"
              data-drawer-show="offcanvas_add"
              aria-controls="offcanvas_add"
              data-drawer-placement="right"
            >
              <i className="ti ti-square-rounded-plus-filled" />
              Add Lead
            </Link>
          </div>
        </div>
        <div className="flex overflow-x-auto items-start">
          <div className="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full">
            <div className="card rounded shadow bg-white">
              <div className="card-body p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h6 className="flex items-center mb-1">
                      <i className="ti ti-circle-filled text-[10px] text-warning me-1" />
                      Contacted
                    </h6>
                    <span>45 Leads - $15,44,540</span>
                  </div>
                  <div className="flex items-center">
                    <Link to="#" className="text-info me-2">
                      <i className="ti ti-plus" />
                    </Link>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                     data-dropdown-toggle="dropdownMenu1" >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id='dropdownMenu1' className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-secondary" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-info-100 text-info rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-info">SM</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Schumm</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $03,50,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        darleeo@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 12445-47878
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Newyork, United States
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-09.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-secondary" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">CS</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Collins</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $02,10,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        robertson@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 13987-90231
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Austin, United States
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-01.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-secondary" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-warning-100 text-warning rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-warning">KI</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Konopelski</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $02,18,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        sharon@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 17932-04278
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Atlanta, United States
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-02.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full">
            <div className="card rounded shadow bg-white">
              <div className="card-body p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h6 className="flex items-center mb-1">
                      <i className="ti ti-circle-filled text-[10px] text-info me-1" />
                      Not Contacted
                    </h6>
                    <span>45 Leads - $15,44,540</span>
                  </div>
                  <div className="flex items-center">
                    <Link to="#" className="text-info me-2">
                      <i className="ti ti-plus" />
                    </Link>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                      data-dropdown-toggle="dropdownMenu2">
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id='dropdownMenu2' className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-info" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">AS</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Adams</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $02,45,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        vaughan12@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 17392-27846
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        London, United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-03.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-info" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-info-100 text-info rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-info">WK</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Wizosk</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $01,17,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        caroltho3@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 78982-09163
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Bristol, United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-04.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-info" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-success-100 text-success rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-success">HR</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Heller</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $02,12,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        dawnmercha@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 27691-89246
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        San Francisco, United States
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-05.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full">
            <div className="card rounded shadow bg-white">
              <div className="card-body p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h6 className="flex items-center mb-1">
                      <i className="ti ti-circle-filled text-[10px] text-success me-1" />
                      Closed
                    </h6>
                    <span>45 Leads - $15,44,540</span>
                  </div>
                  <div className="flex items-center">
                    <Link to="#" className="text-info me-2">
                      <i className="ti ti-plus" />
                    </Link>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                     data-dropdown-toggle="dropdownMenu3" >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id='dropdownMenu3' className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-success" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">GI</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Gutkowsi</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $01,84,043
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        rachel@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 17839-93617
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Dallas, United States
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-06.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-success" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-warning-100 text-warning rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-warning">WR</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Walter</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $09,35,189
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        jonelle@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 16739-47193
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Leicester, United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-07.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-success" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-success-100 text-success rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-success">HN</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Hansen</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $04,27,940
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        jonathan@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 18390-37153
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Norwich, United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-08.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kanban-list-items bg-light me-5 p-4 min-w-[300px] border border-borderColor rounded-[5px] shadow-xs mb-4 w-full">
            <div className="card rounded shadow bg-white">
              <div className="card-body p-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h6 className="flex items-center mb-1">
                      <i className="ti ti-circle-filled text-[10px] text-danger me-1" />
                      Lost
                    </h6>
                    <span>15 Leads - $14,89,543</span>
                  </div>
                  <div className="flex items-center">
                    <Link to="#" className="text-info me-2">
                      <i className="ti ti-plus" />
                    </Link>
                    <div className="dropdown relative table-action">
                      <Link
                        to="#"
                        className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                     data-dropdown-toggle="dropdownMenu4" >
                        <i className="ti ti-dots-vertical" />
                      </Link>
                      <div id='dropdownMenu4' className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-drawer-target="offcanvas_edit"
                          data-drawer-show="offcanvas_edit"
                          aria-controls="offcanvas_edit"
                          data-drawer-placement="right"
                        >
                          <i className="ti ti-edit me-1" /> Edit
                        </Link>
                        <Link
                          className="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          to="#"
                          data-modal-target="delete_modal"
                          data-modal-toggle="delete_modal"
                        >
                          <i className="ti ti-trash me-1" /> Delete
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-danger" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">SE</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Steve</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $04,17,593
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        sidney@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 11739-38135
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Manchester, United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-09.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-danger" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-warning-100 text-warning rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-warning">LE</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Leuschke</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $08,81,389
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        brook@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 19302-91043
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Chicago, United States
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-10.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="card-topbar mb-4 pt-1 bg-danger" />
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.leadsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">AY</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.leadsDetails}>Anthony</Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $09,27,193
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        mickey@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 17280-92016
                      </p>
                      <p className="text-default inline-flex items-center mb-0">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Derby, United Kingdom
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span className="w-7 h-7 flex items-center justify-center  border border-borderColor rounded-full p-1">
                        <ImageWithBasePath
                          src="assets/img/icons/company-icon-01.svg"
                          alt="Img"
                        />
                      </span>
                      <div className="icons-social flex items-center gap-1">
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-phone-check" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-message-circle-2" />
                        </Link>
                        <Link
                          to="#"
                          className="w-6 h-6 rounded-full inline-flex items-center justify-center hover:bg-light"
                        >
                          <i className="ti ti-color-swatch" />
                        </Link>
                      </div>
                    </div>
                  </div>
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
    <LeadsModal/>
  </>
  
  )
}

export default LeadsGrid