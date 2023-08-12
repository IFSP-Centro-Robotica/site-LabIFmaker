"use client";

import { InterfaceCoursesMock } from "@/mocks/cursos/cursos";
import { useEffect, useState } from "react";

interface IProps {
  props: InterfaceCoursesMock;
}

export const CardComponentCourse = ({ props }: IProps) => {
  const [link, setLink] = useState("");

  useEffect(() => {
    if (props && props.link) {
      let code;
      const indexOfCheck = props.link.indexOf("?v=");
      if (indexOfCheck >= 0) {
        code = props.link.split("?v=")[1];
        setLink(`https://www.youtube.com/embed/${code}`);
      }
    }
  }, [props]);

  return (
    <section className="w-full flex items-center justify-center flex-row gap-4 ">
      <div className="sm:w-[80%] w-[90%] sm:h-[300px] h-[550px] flex sm:items-start items-center justify-start sm:flex-row flex-col gap-4 shadow-4xl  rounded p-3">
        <iframe
          className="sm:w-auto sm:h-[100%] w-[100%] h-[350px]"
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className=" sm:h-full h-30 flex-col sm:items-start items-center flex gap-3 py-2">
          <h1 className="text-3xl font-montserrat font-bold">{props.name}</h1>
          <h1 className="text-xl text-gray-500 font-montserrat font-bold">
            {props.description}
          </h1>
        </div>
      </div>
    </section>
  );
};
