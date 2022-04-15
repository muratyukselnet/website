import React from "react";

function Aboutme() {
    return <section className="text-gray-600 body-font" id="aboutme">
        <div className="container px-5 mx-auto">
            <div className="flex flex-col w-full mb-20">
                <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ABOUT ME</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">What Does Murat Yüksel
                    Do?</h1>
                <p className="mx-auto leading-relaxed text-base">
                    Before corona I was traveling in almost all holidays. Started with Japan May 2017 and that was
                    really a nice experience. My goal was visiting a different country every year but currently paused.
                    After moving to Munich for my job more focused on closer area.<br/>
                    As I try to avoid even trains currently, trying to increase my reach with bicycle. Time to time
                    planning 50-100km rides to visit lakes, small villages... New goal is making a century (100 miles a
                    day) until the end of summer. Still not fit enough, generally my average speed is too slow to reach
                    this goal (20-22km).
                    <br/>
                    <iframe height='350' width='500' className="m-2" frameBorder='0' allowTransparency='true'
                            scrolling='no'
                            src='https://www.strava.com/activities/5026363236/embed/e1d7829e9e32269085f7ebd744873e5117f72749'/>
                    <br/>
                </p>

                <p className="mx-auto leading-relaxed text-base mb-1">I like photography, especially how it forces me to
                    look around and find beauty while life flows at
                    full speed. Below I am adding a section for this topic. Not too active but here is my Instagram:
                    @fototropi Generally I share 4-5 photos a week.
                </p>

                <p className="mx-auto leading-relaxed text-base mb-1">
                    Besides cycling actually, I like "tasting" hobbies. Tried calligraphy (failed miserably :D), went to
                    creative writing course (but couldn't write a piece yet, still have some ideas though), tried
                    playing piano but at that time of my life had a lot of overtime so couldn't practice enough, now an
                    electric guitar is resting at the corner of the room. No rush, no broken hearts if it wont work.
                    Just enjoying the time.
                </p>

                <p className="mx-auto leading-relaxed text-base mb-1">
                    On the technical side, time to time I do trial and error style mini projects. For example tried
                    Forex with MQL4 programming, machine learning with basic principles using Python. Here for this web
                    site I learned little bit react, next, tailwind etc. Would like to try Go next. Beside these
                    interesting topics abandoned several nontrivial projects, mostly written in PHP.
                </p>
            </div>
        </div>
    </section>
}

export default Aboutme