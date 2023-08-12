"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InterfaceProjectsMock } from "@/mocks/projects/projects";
import { Separator } from "@radix-ui/react-separator";

interface IProps {
  props: InterfaceProjectsMock;
}

export const ModalComponentProject = ({ props }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger className="sm:w-fit text-xl bg-primary text-white text-center font-montserrat font-bold px-4 py-2 rounded">
        Mais informações
      </DialogTrigger>
      <DialogContent className="sm:w-fit w-[90%] ">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-montserrat font-bold text-primary mb-4">
            {props.name}
          </DialogTitle>
          <DialogDescription className="w-full flex items-start justify-center flex-col gap-2">
            <p className="text-xl text-black font-montserrat font-bold">
              Descrição:{" "}
              <span className="text-zinc-600">{props.description}</span>
            </p>

            <Separator />

            <p className="text-xl text-black font-montserrat font-bold">
              {props.authors.length > 1 ? "Autores: " : "Autor: "}
              <div className="flex flex-col pl-3">
                {props.authors.map((author) => (
                  <span className="text-zinc-600" key={author}>
                    {author}
                  </span>
                ))}
              </div>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
