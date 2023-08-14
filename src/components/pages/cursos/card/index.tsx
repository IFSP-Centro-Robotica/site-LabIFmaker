"use client";

import { InterfaceCoursesMock } from "@/mocks/courses/courses";
import { useEffect, useState } from "react";
import { Link } from "lucide-react";

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
      <div className="lg:w-[80%] w-[90%] lg:h-[300px] h-[660px] flex lg:items-start items-center justify-start lg:flex-row flex-col gap-4 shadow-4xl  rounded p-3">
        <iframe
          className="lg:w-[500px] lg:h-[100%] w-[100%] h-[450px]"
          src={link}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className=" lg:h-full h-30 flex-col lg:items-start items-center flex gap-3 py-2">
          <h1 className="text-3xl font-montserrat font-bold lg:text-start text-center">
            {props.name}
          </h1>

          <h1 className="text-xl text-gray-500 font-montserrat font-bold">
            {props.description}
          </h1>
          <div className="w-full flex-row flex gap-2 font-montserrat font-bold text-xl text-primary ">
            <Link size={25} />
            <a target="_blank" href={props.moodleLink}>
              Moodle
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
