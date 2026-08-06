import { Link } from "react-router";
import CommonFooter from "../../../components/common-footer/commonFooter";
import ImageWithBasePath from "../../../components/image-with-base-path";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { useEffect, useRef, useState } from 'react';
import { all_routes } from "../../../routes/all_routes";

interface Card {
  id: string;
  content: string;
  author?: string;
  type: 'quote' | 'fullscreen' | 'profile' | 'image' | 'success' | 'dark';
  title?: string;
  image?: string;
  footer?: string;
  buttonText?: string;
  subtitle?: string;
  isInfo?: boolean;
}

interface Column {
  id: string;
  title: string;
  cards: Card[];
}

const UiDragula = () => {
  const [columns, setColumns] = useState<Column[]>([
    {
      id: 'left',
      title: 'Left Column',
      cards: [
        { 
          id: '1', 
          type: 'quote',
          content: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.', 
          author: 'Helen Keller',
          title: 'Inspirational Quote'
        },
        { 
          id: '2', 
          type: 'fullscreen',
          title: 'Card With Fullscreen Button',
          content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words',
          buttonText: 'Read More'
        },
        { 
          id: '3', 
          type: 'image',
          title: 'Image Overlay',
          content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even.',
          image: 'assets/img/media/media-35.jpg',
          footer: 'Last updated 3 mins ago'
        },
        { 
          id: '4', 
          type: 'profile',
          author: 'Atharva Simon',
          content: 'Correspondent Professor',
          image: 'assets/img/profiles/avatar-02.jpg'
        },
        { 
          id: '5', 
          type: 'profile',
          author: 'Alicia Keys',
          content: 'Department Of Commerce',
          subtitle: '24 Years, Female',
          image: 'assets/img/profiles/avatar-01.jpg',
          isInfo: true
        }
      ],
    },
    {
      id: 'right',
      title: 'Right Column',
      cards: [
        { 
          id: '6', 
          type: 'image',
          title: 'Image Overlay',
          content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even.',
          image: 'assets/img/media/media-36.jpg',
          footer: 'Last updated 3 mins ago'
        },
        { 
          id: '7', 
          type: 'success',
          author: 'Samantha sid',
          content: 'In leave for 1 month',
          image: 'assets/img/profiles/avatar-11.jpg'
        },
        { 
          id: '8', 
          type: 'image',
          content: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
          image: 'assets/img/media/img-02.jpg'
        },
        { 
          id: '9', 
          type: 'dark',
          author: 'Pope Adam',
          content: 'Completed on 24,may',
          image: 'assets/img/profiles/avatar-06.jpg'
        }
      ],
    },
  ]);

  const [simpleItems, setSimpleItems] = useState([
    { id: 'simple-1', color: 'bg-primary', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in Source Title' },
    { id: 'simple-2', color: 'bg-success', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in Source Title' },
    { id: 'simple-3', color: 'bg-warning', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in Source Title' },
    { id: 'simple-4', color: 'bg-danger', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in Source Title' },
    { id: 'simple-5', color: 'bg-info', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in Source Title' },
    { id: 'simple-6', color: 'bg-dark', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.', footer: 'Someone famous in Source Title' },
  ]);

  const fullscreenCardRef = useRef<HTMLDivElement | null>(null);
  const [isCardFullscreen, setIsCardFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsCardFullscreen(document.fullscreenElement === fullscreenCardRef.current);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleCardFullscreen = () => {
    if (!fullscreenCardRef.current) return;

    if (!document.fullscreenElement) {
      fullscreenCardRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) return;

    // If dropped in the same position
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    const sourceColumn = columns.find(col => col.id === source.droppableId);
    const destColumn = columns.find(col => col.id === destination.droppableId);

    if (!sourceColumn || !destColumn) return;

    const sourceCards = Array.from(sourceColumn.cards);
    const [removed] = sourceCards.splice(source.index, 1);

    const destCards = Array.from(destColumn.cards);
    destCards.splice(destination.index, 0, removed);

    const newColumns = columns.map(col => {
      if (col.id === source.droppableId) {
        return {
          ...col,
          cards: sourceCards,
        };
      } else if (col.id === destination.droppableId) {
        return {
          ...col,
          cards: destCards,
        };
      }
      return col;
    });

    setColumns(newColumns);
  };

  const onSimpleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.index === destination.index) return;

    const items = Array.from(simpleItems);
    const [removed] = items.splice(source.index, 1);
    items.splice(destination.index, 0, removed);

    setSimpleItems(items);
  };

  const renderCard = (card: Card, dragHandleProps?: any) => {
    const renderImage = (src: string | undefined, className: string, alt: string) => {
      if (!src) return null;
      return (
        <ImageWithBasePath
          src={src}
          className={className}
          alt={alt}
        />
      );
    };

    switch (card.type) {
      case 'quote':
        return (
          <div className="card bg-primary border-borderColor rounded-[5px] shadow-xs mb-6" {...dragHandleProps}>
            <div className="card-body p-4">
              <blockquote className="blockquote mb-0 text-center">
                <h6 className="text-white">{card.content}</h6>
                <footer className="blockquote-footer mt-3 fs-14 text-white opacity-70">
                  Someone famous as <cite title="Source Title">-{card.author || ''}</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        );
      case 'fullscreen':
        return (
          <div
            ref={fullscreenCardRef}
            className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6"
          >
            <div className="card-header p-4 border-b flex items-center justify-between" {...dragHandleProps}>
              <div className="card-title">{card.title || ''}</div>
              <button
                type="button"
                onClick={toggleCardFullscreen}
                aria-label="Toggle fullscreen"
                className="text-gray-600 hover:text-gray-900"
              >
                <i
                  data-feather={isCardFullscreen ? 'minimize' : 'maximize'}
                  className="feather-zap"
                />
              </button>
            </div>
            <div className="card-body p-4">
              <h6 className="card-text font-semibold mb-2">FullScreen Card</h6>
              <p className="card-text mb-0">{card.content}</p>
            </div>
            <div className="card-footer border-t p-4">
              <button className="btn btn-primary">{card.buttonText || 'Read More'}</button>
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="card overlay-card border-borderColor rounded-[5px] shadow-xs bg-white mb-6 relative" {...dragHandleProps}>
            {renderImage(card.image, "card-img w-full rounded", "...")}
            <div className="card-img-overlay flex flex-col justify-between p-0 absolute top-0 right-0 bottom-0 left-0 text-white">
              <div className="card-body text-white p-4">
                <div className="card-text text-white">
                  {card.title || 'Image Overlays Are Awesome!'}
                </div>
                <div className="card-text mb-2">{card.content}</div>
                {card.footer && <div className="card-text">{card.footer}</div>}
              </div>
              {card.footer && (
                <div className="card-footer p-4 border-t text-white">
                  {card.footer}
                </div>
              )}
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className={`card ${card.isInfo ? 'border border-info' : ''} rounded-[5px] shadow-xs bg-white mb-6`} {...dragHandleProps}>
            <div className="card-body p-4">
              <div className="flex items-center">
                <div className="me-3">
                  <span className="w-12 flex h-12">
                    {renderImage(card.image, "rounded", "img")}
                  </span>
                </div>
                <div>
                  <p className={`card-text mb-1 fs-14 font-semibold ${card.isInfo ? 'text-info' : ''}`}>
                    {card.author || ''}
                  </p>
                  <div className="card-title fs-12 mb-0">
                    {card.content}
                  </div>
                  {card.subtitle && (
                    <div className="card-title text-muted fs-11 mb-0">
                      {card.subtitle}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 'success':
        return (
          <div className="card bg-success rounded p-4 mb-6" {...dragHandleProps}>
            <div className="card-body">
              <div className="flex items-center w-full">
                <div className="me-2">
                  <span className="w-10 h-10 flex rounded-full">
                    {renderImage(card.image, "rounded-full", "img")}
                  </span>
                </div>
                <div>
                  <div className="fs-15 text-white font-semibold">
                    {card.author || ''}
                  </div>
                  <p className="mb-0 text-white opacity-70 fs-12">
                    {card.content}
                  </p>
                </div>
                <div className="ms-auto">
                  <Link to="#" className="text-white">
                    <i className="fa-solid fa-ellipsis-vertical" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      case 'dark':
        return (
          <div className="card bg-dark rounded p-4 mb-6" {...dragHandleProps}>
            <div className="card-body">
              <div className="flex items-center w-full">
                <div className="me-2">
                  <span className="w-10 h-10 flex rounded-full">
                    {renderImage(card.image, "rounded-full", "img")}
                  </span>
                </div>
                <div>
                  <div className="fs-15 text-white font-semibold">
                    {card.author || ''}
                  </div>
                  <p className="mb-0 op-7 fs-12 text-white">
                    {card.content}
                  </p>
                </div>
                <div className="ms-auto">
                  <Link to="#" className="text-white">
                    <i className="fa-solid fa-ellipsis-vertical" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
   <>
  {/* Page Wrapper */}
  <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
    <div className="content p-5 pb-0">
      {/* Page Header */}
      <div className="mb-7">
        <h4 className="mb-1 text-xl font-bold flex items-center">Dragula</h4>
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
              Dragula
            </li>
          </ol>
        </nav>
      </div>
      {/* End Page Header */}
      <div className="grid grid-cols-1 gap-x-6">
        <div className="col-xl-12">
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header p-4 border-b border-borderColor  flex items-center justify-between">
              <div className="card-title">Card With Fullscreen Button</div>
            </div>
            <div className="card-body p-4">
              <DragDropContext onDragEnd={onSimpleDragEnd}>
                <Droppable droppableId="simple-dragula" direction="horizontal">
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="grid grid-cols-1 xl:grid-cols-3 gap-6"
                    >
                      {simpleItems.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`p-5 ${item.color} rounded-[5px] text-white`}
                            >
                              <p className="mb-4">{item.content}</p>
                              <p>Someone famous in <em>Source Title</em></p>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header p-4 border-b border-borderColor  flex items-center justify-between">
              <div className="card-title">Move stuff between containers</div>
            </div>
            <div className="card-body p-4">
              <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {columns.map((column, _columnIndex) => (
                    <Droppable key={column.id} droppableId={column.id}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="col-span-1 p-5 bg-light rounded-[5px] min-h-[320px]"
                        >
                          <h5>{column.title}</h5>
                          <div className="flex flex-col gap-4 mt-8">
                            {column.cards.map((card, cardIndex) => (
                              <Draggable key={card.id} draggableId={card.id} index={cardIndex}>
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                  >
                                    {renderCard(card, provided.dragHandleProps)}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  ))}
                </div>
              </DragDropContext>
            </div>
          </div>
          <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div className="card-header p-4 border-b border-borderColor  flex items-center justify-between">
              <div className="card-title">
                Move stuff between containers using handle
              </div>
            </div>
            <div className="card-body p-4">
              <div
                className="grid grid-cols-1 xl:grid-cols-2 gap-6"
                data-plugin="dragula"
                data-containers='["handle-dragula-left", "handle-dragula-right"]'
                data-handleclass="dragula-handle"
              >
                <div className="col-span-1 p-5 bg-light rounded-[5px]">
                  <h5>Part 1</h5>
                  <div
                    className="flex flex-col gap-4 mt-8"
                    id="handle-dragula-left"
                  >
                    <div className="flex items-center justify-between p-4 border border-borderColor rounded-[5px] bg-white">
                      <div className="flex flex-wrap items-center gap-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-07.jpg"
                          className="size-10 rounded-full border border-borderColor"
                          alt="user-image"
                        />
                        <div>
                          <h5 className="text-[16px]">Luoise K. Bond</h5>
                          <p className="text-xs">Founder &amp; CEO</p>
                        </div>
                      </div>
                      <i className="ti ti-arrows-move text-2xl cursor-move dragula-handle" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-borderColor rounded-[5px] bg-white">
                      <div className="flex flex-wrap items-center gap-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-08.jpg"
                          className="size-10 rounded-full border border-borderColor"
                          alt="user-image"
                        />
                        <div>
                          <h5 className="text-[16px]">Dennis N. Cloutier</h5>
                          <p className="text-xs">Software Engineer</p>
                        </div>
                      </div>
                      <i className="ti ti-arrows-move text-2xl cursor-move dragula-handle" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-borderColor rounded-[5px] bg-white">
                      <div className="flex flex-wrap items-center gap-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-09.jpg"
                          className="size-10 rounded-full border border-borderColor"
                          alt="user-image"
                        />
                        <div>
                          <h5 className="text-[16px]">Susan J. Sander</h5>
                          <p className="text-xs">Web Designer</p>
                        </div>
                      </div>
                      <i className="ti ti-arrows-move text-2xl cursor-move dragula-handle" />
                    </div>
                  </div>
                </div>
                <div className="col-span-1 p-5 bg-light rounded-[5px]">
                  <h5>Part 2</h5>
                  <div
                    className="flex flex-col gap-4 mt-8"
                    id="handle-dragula-right"
                  >
                    <div className="flex items-center justify-between p-4 border border-borderColor rounded-[5px] bg-white">
                      <div className="flex flex-wrap items-center gap-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-10.jpg"
                          className="size-10 rounded-full border border-borderColor"
                          alt="user-image"
                        />
                        <div>
                          <h5 className="text-[16px]">Gabriel J. Snyder</h5>
                          <p className="text-xs">Web Developer</p>
                        </div>
                      </div>
                      <i className="ti ti-arrows-move text-2xl cursor-move dragula-handle" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-borderColor rounded-[5px] bg-white">
                      <div className="flex flex-wrap items-center gap-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-12.jpg"
                          className="size-10 rounded-full border border-borderColor"
                          alt="user-image"
                        />
                        <div>
                          <h5 className="text-[16px]">James M. Short</h5>
                          <p className="text-xs">Business Analyst</p>
                        </div>
                      </div>
                      <i className="ti ti-arrows-move text-2xl cursor-move dragula-handle" />
                    </div>
                    <div className="flex items-center justify-between p-4 border border-borderColor rounded-[5px] bg-white">
                      <div className="flex flex-wrap items-center gap-2">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-13.jpg"
                          className="size-10 rounded-full border border-borderColor"
                          alt="user-image"
                        />
                        <div>
                          <h5 className="text-[16px]">Louie C. Mason</h5>
                          <p className="text-xs">Human Resources</p>
                        </div>
                      </div>
                      <i className="ti ti-arrows-move text-2xl cursor-move dragula-handle" />
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
</>

  );
};

export default UiDragula;