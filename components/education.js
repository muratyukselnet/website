import React from "react";

function Education() {
    return <section className="text-gray-600 body-font overflow-hidden" id="education">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full"><h2
                className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900">Education</h2></div>
            <div className="-my-8 divide-y-2 divide-gray-100">
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-2/12 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">2016 - 2017</span>
                    </div>
                    <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Yalova Univ. Master's Degree
                            Computer Sciences - abandoned</h2>
                        <p className="leading-relaxed">Courses finished (Machine learning, wireless networks...),
                            abandoned as I started to work full time didn't have time for working on thesis.</p>
                    </div>
                </div>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-2/12 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">2015 - 2016</span>
                    </div>
                    <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Sakarya Univ. Master's Degree
                            Cyber Security - transferred to Yalova</h2>
                        <p className="leading-relaxed">Courses completed: Intro to Cyber security, TCP/IP Security,
                            Penetration Tests and Security Audit,
                            Cyber Wars. Transferred to Yalova after that.</p>
                    </div>
                </div>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-2/12 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">2010 - 2014 <br/> <span className="text-black">3.23/4 GPA</span></span>
                    </div>
                    <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Yalova Univ. Bachelor Degree
                            Computer Sciences</h2>
                        <p className="leading-relaxed">Computation Club Board Member (20+ Seminars organised,
                            volunteered for lecturing “Intro to web development”)<br/>
                            Graduation project: Auto generating admin panel, a script that provides CRUD interface
                            for a given mysql database just with couple of configurations.</p>
                    </div>
                </div>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-2/12 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">11-23 August 2014</span>
                    </div>
                    <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Web Application Security -
                            Linux Summer Camp</h2>
                        <p className="leading-relaxed">
                            2 weeks, full day, hands on web application security camp with OWASP top 10, network,
                            cryptography topics covered.
                            <br/>
                            {/*https://kamp.linux.org.tr/2014/kurslar/web-uygulama-guvenligi-ve-guvenli-kod-gelistirme*/}
                            Camp content can be found <a target="_blank"
                                                         className="text-blue-700 no-underline hover:underline">sorry
                            dead link</a></p>
                    </div>
                </div>
                <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-2/12 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">2 July - 10 August 2012</span>
                    </div>
                    <div className="md:flex-grow">
                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">StajOkulu 2012</h2>
                        <p className="leading-relaxed">
                            1.5 month courses, mostly seminars from volunteered professionals in IT sector with wide
                            range of topics. Course
                            program can be found <a href="http://stajokulu.com/program-2012/" target="_blank"
                                                    className="text-blue-700 no-underline hover:underline">here</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Education