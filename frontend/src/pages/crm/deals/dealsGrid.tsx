import { Link } from "react-router"
import { useEffect } from "react"
import CommonFooter from "../../../components/common-footer/commonFooter"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { all_routes } from "../../../routes/all_routes"
import DealsModal from "./modal/dealsModal"
import HeaderActions from "../../../components/header-actions/headerActions"
import { closeDropdown } from "../../../utils/dropdownUtils"


const DealsGrid = () => {
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
              Deals
              <span className="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">
                125
              </span>
            </h4>
            <nav aria-label="breadcrumb">
              <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                <li>
                  <Link to={all_routes.dealsGrid} className="hover:underline text-gray-700">
                    Home
                  </Link>
                  <span>
                    <i className="ti ti-chevron-right" />
                  </span>
                </li>
                <li className="text-dark font-medium" aria-current="page">
                  Deals
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
                <div className="filter-header flex items-center justify-between border-b border-borderColor p-3">
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
                          Deals Name
                        </span>
                      </button>
                    </h2>
                    <div
                      id="accordion-body-1"
                      className="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-1"
                      data-accordion-body=""
                    >
                      <ul className="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Konopelski
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Adams
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Gutkowski
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Walter
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
                          Owner
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
                            Hendry Milner
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Guilory Berggren
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Jami Carlile
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Theresa Nelson
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Smith Cooper
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
                          Status
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
                            Won
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
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            open
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
                          Rating
                        </span>
                      </button>
                    </h2>
                    <div
                      id="accordion-body-5"
                      className="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-5"
                      data-accordion-body=""
                    >
                      <ul className="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="rating">
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <span className="ms-1">5.0</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="rating">
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-default" />
                              <span className="ms-1">4.0</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="rating">
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-default" />
                              <i className="ti ti-star-filled text-default" />
                              <span className="ms-1">3.0</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="rating">
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-default" />
                              <i className="ti ti-star-filled text-default" />
                              <i className="ti ti-star-filled text-default" />
                              <span className="ms-1">2.0</span>
                            </span>
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                            />
                            <span className="rating">
                              <i className="ti ti-star-filled text-warning" />
                              <i className="ti ti-star-filled text-default" />
                              <i className="ti ti-star-filled text-default" />
                              <i className="ti ti-star-filled text-default" />
                              <i className="ti ti-star-filled text-default" />
                              <span className="ms-1">1.0</span>
                            </span>
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h2 id="accordion-heading-2">
                      <button
                        type="button"
                        className="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                        data-accordion-target="#accordion-body-2"
                        aria-expanded="true"
                        aria-controls="accordion-body-2"
                      >
                        <span className="text-dark">
                          <i className="ti ti-chevron-right me-2" />
                          Tags
                        </span>
                      </button>
                    </h2>
                    <div
                      id="accordion-body-2"
                      className="hidden p-4 bg-light  border border-borderColor rounded"
                      aria-labelledby="accordion-heading-2"
                      data-accordion-body=""
                    >
                      <ul className="space-y-3 max-h-64 overflow-y-auto">
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Collab
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            Promotion
                          </label>
                        </li>
                        <li>
                          <label className="flex items-center space-x-2 text-gray-700 cursor-pointer">
                            <input
                              type="checkbox"
                              className="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2"
                            />
                            VIP
                          </label>
                        </li>
                      </ul>
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
                to={all_routes.dealsList}
                className="w-7 h-7 flex items-center justify-center rounded text-default me-1"
              >
                <i className="ti ti-list-tree" />
              </Link>
              <Link
                to={all_routes.dealsGrid}
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
              Add Deal
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
                      <i className="ti ti-circle-filled text-[10px] text-info me-1" />
                      Qualify To Buy
                    </h6>
                    <span>45 Leads - $15,44,540</span>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                   data-dropdown-toggle ="dropdown-menu-1" >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-1" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-success-100 text-success rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-success">HT</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Howell, Tremblay <br /> and Rath
                          </Link>
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
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Newyork, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-19.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Darlee Robertson
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-success text-white">
                        85%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 10 Jan 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-warning-100 text-warning rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-warning">RJ</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Robert, John and <br /> Carlos
                          </Link>
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
                        sheron@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 12445-47878
                      </p>
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Exeter, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-20.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Sharon Roy
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-warning text-white">
                        15%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 12 Jan 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-info-100 text-info rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-info">RJ</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Wendy, Star and <br /> David
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $04,22,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        vau@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 12445-47878
                      </p>
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Phoenix, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-21.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Vaughan Lewis
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-info text-white">
                        95%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 14 Jan 2024
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
                      Contact Made
                    </h6>
                    <span>30 Leads - $19,94,938</span>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    data-dropdown-toggle ="dropdown-menu-2">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-2" className=" hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">BR</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Byron, Roman and <br /> Bailey
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $04,22,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        vau@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 12445-47878
                      </p>
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Phoenix, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Jessica Louise
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-danger text-white">
                        47%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 06 Feb 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-success-100 text-success rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-success">RJ</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Robert, John and <br /> Carlos
                          </Link>
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
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Charlotte, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-16.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Carol Thomas
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-success text-white">
                        98%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 15 Jan 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">IC</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Irene, Charles and <br /> Wilston
                          </Link>
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
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Bristol, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-22.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Dawn Mercha
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-danger text-white">
                        45%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 14 Jan 2024
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
                      Presentation
                    </h6>
                    <span>25 Leads - $10,36.390</span>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                     data-dropdown-toggle ="dropdown-menu-3">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-3" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-info-100 text-info rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-info">HT</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Jody, Powell and <br /> Cecil
                          </Link>
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
                        vau@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 17839-93617
                      </p>
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Baltimore, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-23.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Rachel Hampton
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-info text-white">
                        25%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 10 Feb 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">BL</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Bonnie, Linda and <br /> Mullin
                          </Link>
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
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Coventry, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-24.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Jonelle Curtiss
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-danger text-white">
                        70%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 20 Feb 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-success-100 text-success rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-success">CJ</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Carlos, Jones and <br /> Jim
                          </Link>
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
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Seattle
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-25.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Jonathan Smith
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-success text-white">
                        45%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 30 Jan 2024
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
                      Proposal Made
                    </h6>
                    <span>50 Leads - $18,83,013</span>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                   data-dropdown-toggle ="dropdown-menu-4" >
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-4" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-success-100 text-success rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-success">HT</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Howell, Tremblay <br /> and Rath
                          </Link>
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
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Newyork, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-19.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Darlee Robertson
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-success text-white">
                        85%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 10 Jan 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-info-100 text-info rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-info">RJ</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Wendy, Star and <br /> David
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $04,22,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        vau@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 12445-47878
                      </p>
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Phoenix, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-21.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Vaughan Lewis
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-info text-white">
                        95%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 14 Jan 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-warning-100 text-warning rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-warning">RJ</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Robert, John and <br /> Carlos
                          </Link>
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
                        sheron@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 12445-47878
                      </p>
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Exeter, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-20.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Sharon Roy
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-warning text-white">
                        15%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 12 Jan 2024
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
                      Appointment
                    </h6>
                    <span>45 Leads - $15,44,540</span>
                  </div>
                  <div className="dropdown relative table-action">
                    <Link
                      to="#"
                      className="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                    data-dropdown-toggle ="dropdown-menu-5">
                      <i className="ti ti-dots-vertical" />
                    </Link>
                    <div id="dropdown-menu-5" className="hidden absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu">
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
            <div className="kanban-drag-wrap ui-sortable">
              <div>
                <div className="card kanban-card border border-borderColor mt-4 shadow ui-sortable-handle bg-white rounded">
                  <div className="card-body p-4">
                    <div className="block">
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-success-100 text-success rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-success">RJ</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Robert, John and <br /> Carlos
                          </Link>
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
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Charlotte, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-16.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Carol Thomas
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-success text-white">
                        98%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 15 Jan 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">BR</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Byron, Roman and <br /> Bailey
                          </Link>
                        </h6>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-report-money text-dark me-1" />
                        $04,22,000
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-mail text-dark me-1" />
                        vau@example.com
                      </p>
                      <p className="text-default inline-flex items-center mb-2">
                        <i className="ti ti-phone text-dark me-1" />
                        +1 12445-47878
                      </p>
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Phoenix, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Jessica Louise
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-danger text-white">
                        47%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 06 Feb 2024
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
                      <div className="flex items-center mb-3">
                        <Link
                          to={all_routes.dealsDetails}
                          className="w-10 h-10 flex items-center justify-center bg-danger-100 text-danger rounded-full flex-shrink-0 me-2"
                        >
                          <span className="avatar-title text-danger">IC</span>
                        </Link>
                        <h6 className="font-medium text-[14px] hover:text-primary mb-0">
                          <Link to={all_routes.dealsDetails}>
                            Irene, Charles and <br /> Wilston
                          </Link>
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
                      <p className="text-default inline-flex items-center mb-3">
                        <i className="ti ti-map-pin-pin text-dark me-1" />
                        Bristol, United States
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Link
                          to="#"
                          className="w-7 h-7 rounded-full flex flex-shrink-0 me-2"
                        >
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-22.jpg"
                            alt="Img"
                            className="rounded-full"
                          />
                        </Link>
                        <Link
                          to="#"
                          className="text-dark hover:text-primary"
                        >
                          Dawn Mercha
                        </Link>
                      </div>
                      <span className="px-1.5 py-0.5 rounded text-[12px] bg-danger text-white">
                        45%
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-t border-borderColor pt-3 mt-3">
                      <span>
                        <i className="ti ti-calendar-due" /> 14 Jan 2024
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
     <CommonFooter/>
      {/* End Footer */}
    </div>
    {/* /Page Wrapper */}
    <DealsModal/>
  </>
  
  )
}

export default DealsGrid