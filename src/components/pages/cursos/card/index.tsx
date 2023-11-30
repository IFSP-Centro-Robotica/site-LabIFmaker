"use client";

import { InterfaceCoursesMock } from "@/mocks/courses/courses";
import { XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { ModalComponentCourse } from "../Modal";

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
    <div className="lg:w-[60%] w-[95%] h-fit flex lg:items-start items-center justify-start lg:flex-row flex-col gap-4 shadow-4xl  rounded p-3">
      <div className=" w-full lg:h-[600] lg:items-start flex-col items-center content-between flex flex-wrap gap-3 py-2">
        <h1 className="text-3xl font-montserrat font-bold lg:text-start text-center">
          {props.name}
        </h1>
        {props.link ? (
          <iframe
            className="lg:h-[500px] sm:h-[400px] h-[250px] w-full"
            src={link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="w-full lg:h-[500px] sm:h-[400px] h-[250px] bg-zinc-200 rounded p-2 flex items-center justify-center flex-col gap-2">
            <XCircle className="text-primary" size={120} />
            <p className="text-2xl text-center font-montserrat font-bold">
              Vídeo não encontrado!!
            </p>
          </div>
        )}
        <ModalComponentCourse name={props.name} props={props} />
      </div>
    </div>
  );
};
