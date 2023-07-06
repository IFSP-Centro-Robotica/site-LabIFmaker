"use client";

import { useEffect, useState } from "react";
import { resourcesFields } from "./resources";

export const ResourcesEquipamentos = () => {
    const [width, setWidth] = useState<number>();
    const [isShow, setIsShow] = useState<"h-[300px]" | "">("");
    const [isShowResource, setIsShowResource] = useState<"hidden" | "">()

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setWidth(window.innerWidth);
        if ((width && width < 640) || window.innerWidth < 640) {
            setIsShow("h-[300px]");
            setIsShowResource("hidden")
        } else {
            setIsShow("");
            setIsShowResource("")
        }
    }, []);

    return (
        <section
            className={`bg-zinc-100 w-full flex items-center justify-center flex-col gap-4 p-8 relative overflow-hidden ${isShow}`}
        >
            <div className="w-full flex items-center justify-center ">
                <h1 className="bg-[#cbfcbb] text-primary pt-1 pb-1 pr-3 pl-3 mt-2 rounded-full text-xl font-ubuntu border border-spacing-1 border-primary tracking-tighter uppercase">
                    Recursos
                </h1>
            </div>
            <div>
                <div className="w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 flex-wrap sm:gap-4 gap-8  justify-around">
                    {resourcesFields.map((resource, index) => (
                        <>
                            <div key={resource.description} className={`w-full flex xl:flex-row flex-col xl:text-start text-center gap-4 items-center hover:bg-primary-light/800 transition-colors rounded p-4 cursor-default sm:border-none border-b border-primary ${isShowResource && index > 1 ? isShowResource : ""}`}>
                                <resource.icon />
                                <p className="sm:text-2xl text-xl font-montserrat">
                                    {resource.description}
                                </p>
                            </div>
                        </>
                    ))}
                </div>
                {isShow == "h-[300px]" && (
                    <div className="w-full bg-zinc-200 absolute left-0 bottom-0 p-4 flex items-center justify-center shadow-zinc-200 shadow-3xl">
                        {" "}
                        <button
                            className="text-white font-montserrat font-bold text-2xl bg-primary transition-colors hover:bg-primary-light-200 p-2 rounded"
                            onClick={() => {setIsShow(""); setIsShowResource("")}}
                        >
                            Ver mais...
                        </button>
                    </div>
                )}
                {!isShow && width && width < 640 && (
                    <div className="w-full-light/400 absolute left-0 bottom-0 p-2 flex items-center justify-center">
                        {" "}
                        <button
                            className="text-white font-montserrat font-bold text-xl bg-primary transition-colors hover:bg-primary-light-200 p-2 rounded"
                            onClick={() => {setIsShow("h-[300px]"); setIsShowResource("hidden")}}
                        >
                            Esconder
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};
