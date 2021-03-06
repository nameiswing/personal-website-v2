import { useEffect } from "react"

const Hero = () => {
    
    return (
        <header className="flex-container justify-center h-screen min-h-max" id="about">
            <div class="sub-container px-8 md:px-16 xl:px-20">
                <div className="flex flex-col lg:flex-row justify-center items-center gap-16 -translate-y-6">
                    <h1 className="flex flex-col text-slate-800 font-semibold text-5xl tracking-[0.25rem] relative m-0 max-h-max z-50 uppercase" >
                        <div className="flex flex-row h-12">
                            <span className="inline-block font-normal text-8xl -translate-y-10">L</span>emuel
                        </div>
                        <div className="flex flex-row h-12">
                            <span className="inline-block font-normal text-8xl -translate-y-2 -mr-2">E</span>naldo
                        </div>
                    </h1>
                    <div className="text-left text-md sm:text-lg transition-all duration-75 text-slate-800">
                        <p className="tracking-normal mb-4">
                            A <span className="text-orange-600 font-semibold">Full-stack Web Developer</span> specializing in Front-end Development. Highly values clean code, simplicity of the UI, and the website&apos;s SEO.
                        </p>
                        <p className="tracking-normal">
                            A passionate and fast learner &mdash; looking for new challenges and opportunities to utilize and improve skills.
                        </p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero