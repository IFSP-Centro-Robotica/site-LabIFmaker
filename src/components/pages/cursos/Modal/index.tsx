"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InterfaceCoursesMock } from "@/mocks/courses/courses";

interface IProps {
  name: string;
  props: InterfaceCoursesMock;
}

export const ModalComponentCourse = ({ props, name }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger className="sm:w-auto w-auto  text-xl bg-primary text-white text-center font-montserrat font-bold px-4 py-2 rounded">
        Mais informações
      </DialogTrigger>
      <DialogContent className="sm:w-auto w-[90%] max-h-[95vh] overflow-scroll border border-primary lg:border-transparent rounded-lg">
        <DialogHeader className="pt-6">
          <DialogTitle className="justify-center text-center sm:text-3xl text-2xl font-montserrat font-bold text-primary mb-4 flex-wrap">
            {name}
          </DialogTitle>
          <DialogDescription className="w-full flex items-start justify-center flex-col gap-2">
            {props && (
              <div className="w-full flex items-start justify-start gap-2 flex-col">
                <p className="text-xl text-black font-montserrat font-bold pr-5 text-justify hyphens-auto">
                  <span className="text-zinc-600">{props.description}</span>
                </p>
                <a
                  href={props.moodleLink}
                  className="bg-primary text-xl w-full text-white rounded font-montserrat font-bold transition-colors hover:bg-primary-light-100 text-center p-3"
                >
                  Acessar
                </a>
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
