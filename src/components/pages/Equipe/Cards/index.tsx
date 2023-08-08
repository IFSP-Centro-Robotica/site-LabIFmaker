import { InterfaceEquipeMock } from "@/mocks/equipe/equipe";
import { Link } from "lucide-react";
import { ModalComponentEquipe } from "../Modal";

interface IProps {
  props: InterfaceEquipeMock;
}

export const CardComponentEquipe = ({ props }: IProps) => {
  

  return (
    <section className="w-full flex items-center justify-center flex-row gap-4 ">
      <div className="sm:w-[80%] sm:h-[250px] flex sm:items-start items-center justify-start sm:flex-row flex-col gap-4 shadow-4xl  rounded p-3">
        <props.image />
        <div className="w-full h-full flex-col sm:items-start items-center flex gap-3 justify-between py-2  ">
          <p className="font-montserrat font-bold text-xl">
            {props.name}
          </p>
          <div>
            <div className="w-full flex-row flex gap-2 font-montserrat font-bold text-xl text-primary ">
              <Link size={25} />
              <a target="_blank" href={props.curriculumLatte}>
                Curriculum Lattes
              </a>
            </div>
            <div className="w-full flex-row flex gap-2 font-montserrat font-bold text-xl text-primary ">
              <Link size={25} />
              <a target="_blank" href={props.linkedin}>
                Linkedin
              </a>
            </div>
          </div>
          <div>
            <ModalComponentEquipe
              name={props.name}
              props={props.moreInformation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
