import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

function GalleryPageContent({ page }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="container px-5 mx-auto">
            <div className="flex flex-col w-full mb-20 text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{page.title}</h1>
                <p className="mx-auto leading-relaxed text-base">
                    {page.description}
                    <br/>
                </p>
            </div>
        </div>
        <Gallery photos={page.photos} direction={"column"} onClick={openLightbox} />
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={page.photos.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                    />
                </Modal>
            ) : null}
        </ModalGateway>
        </div>
    );
}

export default GalleryPageContent