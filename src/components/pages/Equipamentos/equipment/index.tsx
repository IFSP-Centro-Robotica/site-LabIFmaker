import { equipamentFields } from "@/mocks/equipaments/equipament";
import Image from "next/image";
import Link from "next/link";

const equipamentStyle = "rounded";

export const EquipamentEquipamentos = () => {
  return (
    <section className="w-full flex flex-row pr-4 pl-4 pt-8 pb-8 flex-wrap gap-8 items-center justify-center">
      {equipamentFields.map((equipament) => (
        <div
          key={equipament.slug}
          className="max-w-[380px] bg-white p-6 rounded border border-spacing-1 border-primary transition flex flex-col items-center gap-4 hover:shadow-2xl"
        >
          <Image
            src={equipament.image.src}
            alt={equipament.image.alt}
            className={
              equipament.image.className
                ? equipament.image.className
                : equipamentStyle
            }
          />
          <h1 className="text-2xl font-montserrat font-bold text-primary">
            {equipament.title}
          </h1>
          <Link
            href={`/equipamentos/${equipament.slug}`}
            className="bg-primary w-full text-white rounded font-montserrat font-bold transition-colors hover:bg-primary-light-100 text-center p-3"
          >
            Acessar
          </Link>
        </div>
      ))}
    </section>
  );
};
