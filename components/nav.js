import React from "react";

function Navigation() {
    return <header className="text-gray-600 body-font">
        <div className="fixed container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-white">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                <span className="ml-3 text-xl">Murat Yüksel</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap text-base justify-center">
                <a className="mr-5 hover:text-gray-900" href="/#experience">Experience</a>
                <a className="mr-5 hover:text-gray-900" href="/#education">Education</a>
                <a className="mr-5 hover:text-gray-900" href="/#aboutme">About Me</a>
                <a className="mr-5 hover:text-gray-900" href="/#photography">Photography</a>
                <a className="mr-5 hover:text-gray-900" href="/galleries">Galleries</a>
            </nav>
        </div>
    </header>
}

export default Navigation