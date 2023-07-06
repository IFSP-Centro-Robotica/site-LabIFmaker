import Link from "next/link";
import { equipamentFields } from "@/mocks/equipaments/equipament";

export const EquipamentEquipamentos = () => {
  return (
    <section className="w-full flex flex-row pr-4 pl-4 pt-8 pb-8 flex-wrap gap-8 items-center justify-center">
      {equipamentFields.map((equipament) => (
        <div
          key={equipament.href}
          className="max-w-[380px] bg-zinc-100 p-6 rounded border border-spacing-1 border-primary transition flex flex-col gap-4 hover:shadow-2xl"
        >
          <h1 className="text-2xl font-montserrat font-bold text-primary">
            {equipament.title}
          </h1>
          {<equipament.image />}
          <p className="text-lg font-montserrat text-zinc-800 text-justify">
            {equipament.description}
          </p>
          <Link
            href={equipament.href}
            className="bg-primary text-white rounded font-montserrat font-bold transition-colors hover:bg-primary-light-100 text-center p-3"
          >
            Acessar
          </Link>
        </div>
      ))}
    </section>
  );
};
