import { Link } from "react-router"
import BreadcrumbHeader from "../../../components/breadcrumb/breadcrumb"
import CommonFooter from "../../../components/common-footer/commonFooter"
import { all_routes } from "../../../routes/all_routes"
import ImageWithBasePath from "../../../components/image-with-base-path"
import { useState } from "react"
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd"
import KanbanModal from "./kanbanModal"

// Types
interface Task {
    id: string
    content: string
    priority: 'High' | 'Medium' | 'Low'
    title: string
    budget: string
    dueDate: string
    progress: string
}

interface Column {
    title: string
    tasks: Task[]
    id: string
}

// Initial data
const initialColumns: Column[] = [
    {
        id: "column1",
        title: "New",
        tasks: [
            {
                id: "task1",
                title: "Doccure",
                content: "Task 1",
                priority: "Low",
                budget: "$24,000",
                dueDate: "15 Apr 2024",
                progress: "12/15"
            },
            {
                id: "task2",
                title: "Dreams Tour",
                content: "Task 2",
                priority: "Medium",
                budget: "$18,000",
                dueDate: "20 Apr 2024",
                progress: "8/15"
            }
        ]
    },
    {
        id: "column2",
        title: "In Progress",
        tasks: [
            {
                id: "task3",
                title: "Cara",
                content: "Task 3",
                priority: "High",
                budget: "$32,000",
                dueDate: "10 Apr 2024",
                progress: "5/10"
            }
        ]
    },
    {
        id: "column3",
        title: "On-hold",
        tasks: [
            {
                id: "task4",
                title: "Travelling",
                content: "Task 4",
                priority: "Medium",
                budget: "$15,000",
                dueDate: "25 Apr 2024",
                progress: "3/8"
            }
        ]
    },
    {
        id: "column4",
        title: "Completed",
        tasks: [
            {
                id: "task5",
                title: "Completed Project",
                content: "Task 5",
                priority: "Low",
                budget: "$10,000",
                dueDate: "5 Apr 2024",
                progress: "10/10"
            }
        ]
    }
]

const KanbanView = () => {
    const [columns, setColumns] = useState<Column[]>(initialColumns)

    const onDragEnd = (result: DropResult) => {
        const { source, destination, type } = result

        // If dropped outside a valid droppable area
        if (!destination) return

        // Handle column reordering
        if (type === 'COLUMN') {
            const newColumns = [...columns]
            const [movedColumn] = newColumns.splice(source.index, 1)
            newColumns.splice(destination.index, 0, movedColumn)
            setColumns(newColumns)
            return
        }

        // Handle task reordering within the same column
        if (source.droppableId === destination.droppableId) {
            const columnIndex = columns.findIndex(col => col.id === source.droppableId)
            const newColumns = [...columns]
            const newTasks = [...newColumns[columnIndex].tasks]
            const [movedTask] = newTasks.splice(source.index, 1)
            newTasks.splice(destination.index, 0, movedTask)

            newColumns[columnIndex] = {
                ...newColumns[columnIndex],
                tasks: newTasks
            }

            setColumns(newColumns)
            return
        }

        // Handle moving task between columns
        const sourceColIndex = columns.findIndex(col => col.id === source.droppableId)
        const destColIndex = columns.findIndex(col => col.id === destination.droppableId)
        const newColumns = [...columns]

        const sourceTasks = [...newColumns[sourceColIndex].tasks]
        const destTasks = [...newColumns[destColIndex].tasks]
        const [movedTask] = sourceTasks.splice(source.index, 1)
        destTasks.splice(destination.index, 0, movedTask)

        newColumns[sourceColIndex] = {
            ...newColumns[sourceColIndex],
            tasks: sourceTasks
        }

        newColumns[destColIndex] = {
            ...newColumns[destColIndex],
            tasks: destTasks
        }

        setColumns(newColumns)
    }

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className="page-wrapper relative pt-[50px] ml-[240px]">
                    <div className="content p-5">
                        <BreadcrumbHeader
                            title="Kanban View"
                            items={[
                                { label: "Home", href: all_routes.dealsDashboard },
                                { label: "Applications" },
                                { label: "Kanban View" },
                            ]}
                        />

                        <div className="card">
                            <div className="flex items-center justify-between flex-wrap gap-3 p-4 border-b border-borderColor bg-white rounded-t">
                                <div className="sm:col-span-4">
                                    <div className="flex items-center">
                                        <h6 className="text-[16px]">Kanban View</h6>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-3 lg:justify-end justify-start">
                                    <div className="flex -space-x-3 rtl:space-x-reverse me-3">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <ImageWithBasePath
                                                key={i}
                                                className="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                                                src={`assets/img/profiles/avatar-${i < 10 ? '0' + i : i}.jpg`}
                                                alt={`avatar-${i}`}
                                            />
                                        ))}
                                        <Link
                                            className="flex items-center justify-center size-6 text-xs font-medium text-white bg-primary border border-white rounded-full hover:bg-primary shrink-0"
                                            to="#"
                                        >
                                            +1
                                        </Link>
                                    </div>
                                    <p className="mb-0 me-3 pe-3 border-r text-14">
                                        Total Task: <span className="text-dark"> 15 </span>
                                    </p>
                                    <p className="mb-0 me-3 pe-3 border-r text-14">
                                        Pending: <span className="text-dark"> 8 </span>
                                    </p>
                                    <p className="mb-0 text-14">
                                        Completed: <span className="text-dark"> 7 </span>
                                    </p>
                                    <div className="relative ml-3">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                                            <i className="ti ti-search" />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-4">
                                <Droppable droppableId="board" type="COLUMN" direction="horizontal">
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className="flex overflow-x-auto pb-4"
                                        >
                                            {columns.map((column, columnIndex) => (
                                                <Draggable
                                                    key={column.id}
                                                    draggableId={column.id}
                                                    index={columnIndex}
                                                >
                                                    {(provided) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            className="w-[300px] min-w-[300px] mr-4"
                                                        >
                                                            <div className="bg-gray-50 rounded-lg p-4 h-full">
                                                                <div
                                                                    {...provided.dragHandleProps}
                                                                    className="flex justify-between items-center mb-4 cursor-move bg-white p-4 border border-borderColor rounded mb-2"
                                                                >
                                                                    <div className="flex items-center">
                                                                        <span className="bg-warning-100 p-1 flex rounded-full me-2">
                                                                            <span className="bg-warning rounded-full block p-1" />
                                                                        </span>
                                                                        <h6 className="me-2 text-dark">{column.title}</h6>
                                                                        <span className="inline-flex items-center p-1.5 rounded-full text-xs leading-none font-semibold bg-light rounded-full text-dark">
                                                                            {column.tasks.length}
                                                                        </span>
                                                                    </div>
                                                                    <div className="dropdown">
                                                                        <Link
                                                                            to="#"
                                                                            data-dropdown-toggle={`column-dropdown-${column.id}`}
                                                                        >
                                                                            <i className="ti ti-dots-vertical text-dark" />
                                                                        </Link>
                                                                        <ul
                                                                            id={`column-dropdown-${column.id}`}
                                                                            className="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                                                        >
                                                                            <li>
                                                                                <Link
                                                                                    to="#"
                                                                                    className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                    data-modal-target="delete_modal"
                                                                                    data-modal-toggle="delete_modal"
                                                                                >
                                                                                    <i className="ti ti-trash me-1" />
                                                                                    Delete
                                                                                </Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>

                                                                <Droppable droppableId={column.id} type="TASK">
                                                                    {(provided) => (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.droppableProps}
                                                                            className="space-y-3"
                                                                        >
                                                                            {column.tasks.map((task, taskIndex) => (
                                                                                <Draggable
                                                                                    key={task.id}
                                                                                    draggableId={task.id}
                                                                                    index={taskIndex}
                                                                                >
                                                                                    {(provided, snapshot) => (
                                                                                        <div
                                                                                            ref={provided.innerRef}
                                                                                            {...provided.draggableProps}
                                                                                            {...provided.dragHandleProps}
                                                                                            className={`bg-white p-4 rounded-lg border border-borderColor shadow-sm hover:shadow-md transition-shadow ${snapshot.isDragging ? 'shadow-lg' : ''
                                                                                                }`}
                                                                                        >
                                                                                            <div className="flex items-center justify-between mb-4">
                                                                                                <div className="flex items-center">
                                                                                                    <span className={`inline-flex items-center py-1 px-2 rounded text-xs leading-none font-medium ${task.priority === 'High'
                                                                                                            ? 'bg-danger text-white'
                                                                                                            : task.priority === 'Medium'
                                                                                                                ? 'bg-warning text-white'
                                                                                                                : 'bg-success text-white'
                                                                                                        }`}>
                                                                                                        <i className="fas fa-circle text-[6px] me-1" />
                                                                                                        {task.priority}
                                                                                                    </span>
                                                                                                </div>
                                                                                                <div className="dropdown">
                                                                                                    <Link
                                                                                                        to="#"
                                                                                                        data-dropdown-toggle={`task-dropdown-${task.id}`}
                                                                                                    >
                                                                                                        <i className="ti ti-dots-vertical text-dark" />
                                                                                                    </Link>
                                                                                                    <ul
                                                                                                        id={`task-dropdown-${task.id}`}
                                                                                                        className="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg"
                                                                                                    >
                                                                                                        <li>
                                                                                                            <Link
                                                                                                                to="#"
                                                                                                                className="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                                                                                                data-modal-target="delete_modal"
                                                                                                                data-modal-toggle="delete_modal"
                                                                                                            >
                                                                                                                <i className="ti ti-trash me-1" />
                                                                                                                Delete
                                                                                                            </Link>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="flex items-center mb-4">
                                                                                                <span className="size-6 rounded-full flex items-center justify-center bg-warning me-2">
                                                                                                    <ImageWithBasePath
                                                                                                        src="assets/img/icons/kanban-arrow.svg"
                                                                                                        className="w-auto h-auto"
                                                                                                        alt="Img"
                                                                                                    />
                                                                                                </span>
                                                                                                <h6 className="flex items-center">{task.title}</h6>
                                                                                            </div>

                                                                                            <div className="flex items-center border-b border-borderColor mb-4 pb-4">
                                                                                                <div className="me-3 pe-3 border-r border-borderColor">
                                                                                                    <span className="font-medium text-[12px] block mb-1">
                                                                                                        Budget
                                                                                                    </span>
                                                                                                    <p className="text-[13px] text-dark">{task.budget}</p>
                                                                                                </div>
                                                                                                <div className="me-3 pe-3 border-r border-borderColor">
                                                                                                    <span className="font-medium text-[12px] block mb-1">
                                                                                                        Tasks
                                                                                                    </span>
                                                                                                    <p className="text-[13px] text-dark">{task.progress}</p>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <span className="font-medium text-[12px] block mb-1">
                                                                                                        Due on
                                                                                                    </span>
                                                                                                    <p className="text-[13px] text-dark">
                                                                                                        {task.dueDate}
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>

                                                                                            <div className="flex items-center justify-between">
                                                                                                <div className="flex -space-x-3 rtl:space-x-reverse me-3">
                                                                                                    {[1, 2, 3].map((i) => (
                                                                                                        <ImageWithBasePath
                                                                                                            key={i}
                                                                                                            className="size-6 border-2 border-white rounded-full"
                                                                                                            src={`assets/img/profiles/avatar-0${i}.jpg`}
                                                                                                            alt={`User ${i}`}
                                                                                                        />
                                                                                                    ))}
                                                                                                    <Link
                                                                                                        className="flex items-center justify-center size-6 text-xs font-medium text-white bg-primary border-2 border-white rounded-full hover:bg-primary shrink-0"
                                                                                                        to="#"
                                                                                                    >
                                                                                                        +1
                                                                                                    </Link>
                                                                                                </div>
                                                                                                <div className="flex items-center">
                                                                                                    <Link
                                                                                                        to="#"
                                                                                                        className="flex items-center text-dark me-2"
                                                                                                    >
                                                                                                        <i className="ti ti-message-circle text-gray me-1" />
                                                                                                    </Link>
                                                                                                    <Link
                                                                                                        to="#"
                                                                                                        className="flex items-center text-dark"
                                                                                                    >
                                                                                                        <i className="ti ti-paperclip text-gray me-1" />
                                                                                                    </Link>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    )}
                                                                                </Draggable>
                                                                            ))}
                                                                            {provided.placeholder}
                                                                        </div>
                                                                    )}
                                                                </Droppable>

                                                                <button className="btn bg-warning text-white hover:bg-primary flex items-center justify-center w-full mt-2" data-modal-target="add_new_project" data-modal-toggle="add_new_project">
                                                                    <i className="ti ti-plus mr-2" />
                                                                    New Project
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}

                                            {/* Add New Column */}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                    </div>
                    <CommonFooter />
                </div>
            </DragDropContext>
            <KanbanModal />
        </>
    )
}

export default KanbanView