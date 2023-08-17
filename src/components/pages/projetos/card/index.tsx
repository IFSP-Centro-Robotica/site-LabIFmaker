import { InterfaceProjectsMock } from "@/mocks/projects/projects";
import Image from "next/image";
import { ModalComponentProject } from "../modal";

interface IProps {
  props: InterfaceProjectsMock;
}

export const CardComponentProjects = ({ props }: IProps) => {
  return (
    <section className="w-full flex items-center justify-center flex-row gap-4 ">
      <div className="xl:w-[30%] w-[90%] flex items-center justify-start flex-col gap-4 shadow-4xl  rounded p-3">
        <Image src={props.image} alt="image" className="w-auto h-[100%]" />
        <div className=" sm:h-full h-30 flex-col sm:items-start items-center flex gap-3 justify-between py-2">
          <h1 className="text-3xl">{props.name}</h1>
          <div>
            <ModalComponentProject props={props} />
          </div>
        </div>
      </div>
    </section>
  );
};
