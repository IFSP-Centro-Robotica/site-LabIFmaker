import { InterfaceProjectsMock } from "@/mocks/projects/projects";
import { XCircle } from "lucide-react";
import Image from "next/image";
import { ModalComponentProject } from "../modal";

interface IProps {
  props: InterfaceProjectsMock;
}

export const CardComponentProjects = ({ props }: IProps) => {
  return (
    <section className="w-full flex items-center justify-center flex-row gap-4 ">
      <div className=" sm:w-[90%] w-[90%] h-full flex items-center justify-start flex-col gap-4 shadow-4xl  rounded p-3">
        {props.image ? (
          <Image src={props.image} alt="image" className="w-full h-auto" />
        ) : (
          <div className="w-full h-[100%] p-6 bg-zinc-200 rounded flex items-center justify-center gap-2 flex-col">
            <XCircle className="text-primary" size={120} />
            <p className="text-2xl text-center font-montserrat font-bold">
              Imagem não encontrada!!
            </p>
          </div>
        )}
        <div className=" sm:h-full h-30 flex-col items-center flex gap-3 justify-between py-2">
          <h1 className="text-2xl text-center">{props.name}</h1>
          <div>
            <ModalComponentProject props={props} />
          </div>
        </div>
      </div>
    </section>
  );
};
