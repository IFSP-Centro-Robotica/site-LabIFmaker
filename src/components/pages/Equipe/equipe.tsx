import { CardComponentEquipe } from "./Cards";
import {EquipeMock} from "@/mocks/equipe/equipe";

export const Equipe = () => {
  return (
    <section className="w-full min-h-common flex flex-col">
      <div className="w-full flex items-center justify-center my-6">
        <h1 className="text-4xl font-montserrat font-bold text-primary">
          Equipe
        </h1>
      </div>
      {EquipeMock && EquipeMock.map(people => (
        <CardComponentEquipe props={people} key={people.name}/>
      ))}
    </section>
  );
};
