import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { galleries } from "../galleries/galleries";

function GalleryPageContent({ name }) {
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
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{galleries[name].title}</h1>
                <p className="mx-auto leading-relaxed text-base">
                    {galleries[name].description}
                    <br/>
                </p>
            </div>
        </div>
        <Gallery photos={galleries[name].photos} direction={"column"} onClick={openLightbox} />
        <ModalGateway>
            {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        currentIndex={currentImage}
                        views={galleries[name].photos.map(x => ({
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