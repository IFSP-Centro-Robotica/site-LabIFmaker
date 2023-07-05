import Image from "next/image";
import background from "@/assets/OpeningFundo.png";
import { Lightbulb } from "lucide-react";

export const AboutHome = () => {
    return (
        <section className="w-full xl:h-[900px] xl:flex-row h-auto flex flex-col gap-12 items-center justify-center pt-4 pb-4 sm:pr-12 sm:pl-12 pr-6 pl-6 mt-4">
            <div className="w-full h-full">
                <Image
                    src={background}
                    alt="fundo"
                    className="w-full h-full object-cover rounded shadow-xl shadow-zinc-600"
                />
            </div>
            <div className="w-full h-full rounded flex flex-col gap-12">
                <div className="w-full flex flex-col gap-8">
                    <h1 className="font-montserrat font-bold sm:text-6xl text-5xl">
                        O que é o Lab
                        <span className="text-primary">IF</span> Maker?
                    </h1>
                    <p className="font-montserrat text-xl text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis a tellus non tellus bibendum sollicitudin. Sed at
                        orci sem. Nullam dignissim eros sed eleifend porttitor.
                        Etiam nec ante egestas, laoreet sem et, lacinia diam.
                        Aliquam mi massa, dapibus ut elit in, auctor varius
                        erat. Donec sit amet pellentesque leo, a viverra odio.
                        Quisque id ligula sed nisl porta lacinia eu quis nisi.
                        Maecenas vitae viverra odio.
                    </p>
                </div>
                <div className="w-full flex flex-col gap-12">
                    <div className="w-full flex sm:flex-row flex-col sm:border-none border-b pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
                        <div className="rounded-[50%] border border-spacing-1 border-black flex items-center justify-center p-4 ">
                            <Lightbulb size={60} />
                        </div>
                        <p className="font-montserrat text-xl text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis a tellus non tellus bibendum
                            sollicitudin. Sed at orci sem. Nullam dignissim eros
                            sed eleifend porttitor. Etiam nec ante egestas,{" "}
                        </p>
                    </div>
                    <div className="w-full flex sm:flex-row flex-col sm:border-none border-b pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
                        <div className="rounded-[50%] border border-spacing-1 border-black flex items-center justify-center p-4 ">
                            <Lightbulb size={60} />
                        </div>
                        <p className="font-montserrat text-xl text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis a tellus non tellus bibendum
                            sollicitudin. Sed at orci sem. Nullam dignissim eros
                            sed eleifend porttitor. Etiam nec ante egestas,{" "}
                        </p>
                    </div>
                    <div className="w-full flex sm:flex-row flex-col  pb-8 border-spacing-1 border-black gap-4 items-center justify-center">
                        <div className="rounded-[50%] border border-spacing-1 border-black flex items-center justify-center p-4 ">
                            <Lightbulb size={60} />
                        </div>
                        <p className="font-montserrat text-xl text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Duis a tellus non tellus bibendum
                            sollicitudin. Sed at orci sem. Nullam dignissim eros
                            sed eleifend porttitor. Etiam nec ante egestas,{" "}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
