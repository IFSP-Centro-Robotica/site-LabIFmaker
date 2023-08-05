import { InterfaceEquipeMock } from "@/mocks/equipe/equipe";
import { Link } from "lucide-react";

interface IProps {
  props: InterfaceEquipeMock;
}

export const CardComponentEquipe = ({ props }: IProps) => {
  return (
    <section className="w-full flex items-center justify-center flex-row gap-4 ">
      <div className="w-[80%] h-[250px] flex items-start justify-start flex-row gap-4 shadow-4xl  rounded p-2">
            <props.image />
        <div className="w-full h-full flex-col flex gap-2 justify-between py-2  ">
          <p className="font-montserrat font-bold text-xl">
            Nome: {props.name}
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
            <button className="text-xl bg-primary text-white text-center font-montserrat font-bold px-4 py-2 rounded">
              Mais informações
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
