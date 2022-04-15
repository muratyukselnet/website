import React from "react";

function Photography() {
    return <section className="text-gray-600 body-font" id="photography">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Photography</h1>
                <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">In 2015 I decided to buy a camera as I
                    was traveling frequently. My searches end up with a Sony RX100 M3. Actually as it is not seem like a
                    brilliant camera, I am pretty satisfied with the results. Most important thing is it makes me
                    discover my surroundings and search for beauty in everyday life and ordinary things. In 2021
                    upgraded it to Sony Alpha 6400 and now more excited to take more photos. Generally taking nature,
                    animal photos. You can see some of my favourite shots below.
                    Also you can follow be on Instagram: <a href="https://www.instagram.com/fototropi/" target="_blank"
                                                            className="text-blue-700">@fototropi</a>
                </p>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
                <div className="flex flex-wrap md:w-2/3 sm:w-1">
                    <div className="md:p-2 p-1 w-1/2">
                        <img
                            src="/static/images/close-up-swan.jpg"
                            alt="Close Up Swan"
                            className="w-full object-cover h-full object-center block"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img
                            src="/static/images/ducks.jpg"
                            alt="Ducks"
                            className="w-full object-cover h-full object-center block"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img
                            src="/static/images/small-bird.jpg"
                            alt="Small bird"
                            className="w-full object-cover h-full object-center block"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img
                            src="/static/images/water-droplet-on-leaf.jpg"
                            alt="Water droplet on a leaf"
                            className="w-full object-cover h-full object-center block"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img
                            src="/static/images/winter-munich-olimpiapark.jpg"
                            alt="Winter in Munich Olimpiapark under snow"
                            className="w-full object-cover h-full object-center block"
                            width={500}
                            height={800}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-1/2">
                        <img
                            src="/static/images/stone-and-tree.jpg"
                            alt="Stone and tree"
                            className="w-full object-cover h-full object-center block"
                            width={500}
                            height={800}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap md:w-1/3 sm:w-1">
                    <div className="md:p-2 p-1 w-full">
                        <img
                            src="/static/images/starnberg-man.jpg"
                            alt="Morning routine for Starnberg man"
                            className="w-full object-cover h-full object-center block"
                            width={1000}
                            height={600}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <img
                            src="/static/images/shades-of-green-and-blue.jpg"
                            alt="Shades of green and blue"
                            className="w-full object-cover h-full object-center block"
                            width={1000}
                            height={600}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <img
                            src="/static/images/path-of-love.jpg"
                            alt="Path of love"
                            className="w-full object-cover h-full object-center block"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <img
                            src="/static/images/railways-and-green-nature.jpg"
                            alt="Railroads and green nature"
                            className="w-full object-cover h-full object-center block"
                            width={800}
                            height={400}
                        />
                    </div>
                    <div className="md:p-2 p-1 w-full">
                        <img
                            src="/static/images/sun-behind-clouds-reflection.jpg"
                            alt="Sun behind clouds reflection"
                            className="w-full object-cover h-full object-center block"
                            width={1000}
                            height={800}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Photography