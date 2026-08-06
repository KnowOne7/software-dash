import { useState } from 'react';
import { Link } from 'react-router-dom';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import CommonFooter from '../../../components/common-footer/commonFooter';
import { all_routes } from '../../../routes/all_routes';
import ImageWithBasePath from '../../../components/image-with-base-path';

type Slide = {
    src: string;
    title?: string;
    description?: string;
}

const UiLightbox = () => {
    const [openSingle, setOpenSingle] = useState(false);
    const [openDesc, setOpenDesc] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const singleImages = [
        { src: 'src/assets/img/media/img-01.jpg' },
        { src: 'src/assets/img/media/img-02.jpg' }
    ];

    const descImages = [
        {
            src: 'src/assets/img/media/img-03.jpg',
            title: 'Title 01',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
        },
        {
            src: 'src/assets/img/media/img-04.jpg',
            title: 'Title 02',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
        },
        {
            src: 'src/assets/img/media/img-05.jpg',
            title: 'Title 03',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
        }
    ];

    const openSingleLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setOpenSingle(true);
    };

    const openDescLightbox = (index: number) => {
        setCurrentImageIndex(index);
        setOpenDesc(true);
    };

    return (
        <div className="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
            <div className="content p-5 pb-0">
                {/* Page Header */}
                <div className="mb-7">
                    <h4 className="mb-1 text-xl font-bold flex items-center">Lightbox</h4>
                    <nav aria-label="breadcrumb">
                        <ol className="flex flex-wrap space-x-1 text-sm text-gray-500">
                            <li>
                                <Link to={all_routes.dealsDashboard} className="hover:underline text-gray-700">
                                    Home
                                </Link>
                                <span><i className="ti ti-chevron-right" /></span>
                            </li>
                            <li>
                                <Link to="#" className="hover:underline text-gray-700">
                                    Advanced UI
                                </Link>
                                <span><i className="ti ti-chevron-right" /></span>
                            </li>
                            <li className="text-dark font-medium" aria-current="page">
                                Lightbox
                            </li>
                        </ol>
                    </nav>
                </div>
                {/* End Page Header */}

                <div className="grid grid-cols-1 gap-x-6">
                    {/* Single Image Lightbox */}
                    <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div className="card-header py-4 px-5 border-b border-borderColor">
                            <h5>Single Image Lightbox</h5>
                        </div>
                        <div className="card-body p-5">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                                <div className="md:col-span-4">
                                    <div className="cursor-pointer" onClick={() => openSingleLightbox(0)}>
                                        <ImageWithBasePath
                                            src="assets/img/media/img-01.jpg"
                                            className="img-fluid rounded"
                                            alt="image"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-4">
                                    <div className="cursor-pointer" onClick={() => openSingleLightbox(1)}>
                                        <ImageWithBasePath
                                            src="assets/img/media/img-02.jpg"
                                            className="img-fluid rounded"
                                            alt="image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image with Description Lightbox */}
                    <div className="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div className="card-header py-4 px-5 border-b border-borderColor">
                            <h5>Image with Description</h5>
                        </div>
                        <div className="card-body p-5">
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
                                <div className="md:col-span-4">
                                    <div className="cursor-pointer" onClick={() => openDescLightbox(0)}>
                                        <ImageWithBasePath
                                            src="assets/img/media/img-03.jpg"
                                            className="img-fluid rounded"
                                            alt="work-thumbnail"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-4">
                                    <div className="cursor-pointer" onClick={() => openDescLightbox(1)}>
                                        <ImageWithBasePath
                                            src="assets/img/media/img-04.jpg"
                                            className="img-fluid rounded"
                                            alt="work-thumbnail"
                                        />
                                    </div>
                                </div>
                                <div className="md:col-span-4">
                                    <div className="cursor-pointer" onClick={() => openDescLightbox(2)}>
                                        <ImageWithBasePath
                                            src="assets/img/media/img-05.jpg"
                                            className="img-fluid rounded"
                                            alt="work-thumbnail"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CommonFooter />

            {/* Single Image Lightbox */}
            <Lightbox
                open={openSingle}
                close={() => setOpenSingle(false)}
                slides={singleImages}
                index={currentImageIndex}
                styles={{
                    container: { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
                    icon: { color: '#fff' }
                }}
            />

            {/* Image with Description Lightbox */}
            <Lightbox
                open={openDesc}
                close={() => setOpenDesc(false)}
                slides={descImages}
                index={currentImageIndex}
                render={{
                    slide: ({ slide }: { slide: Slide }) => (
                        <div className="yarl__slide_content">
                            <ImageWithBasePath
                                src={slide.src}
                                alt={slide.title || 'Image'}
                                className="yarl__slide_image"
                            />
                            {slide.title && (
                                <div className="yarl__slide_title">
                                    {slide.title}
                                </div>
                            )}
                            {slide.description && (
                                <div className="yarl__slide_description">
                                    {slide.description}
                                </div>
                            )}
                        </div>
                    )
                }}
                styles={{
                    container: { backgroundColor: 'rgba(0, 0, 0, 0.85)' },
                    icon: { color: '#fff' }
                }}
            />
        </div>
    );
};

export default UiLightbox;