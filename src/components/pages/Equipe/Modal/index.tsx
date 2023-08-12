"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { IContact, ISocialMedias } from "@/mocks/equipe/equipe";
import { ReactNode } from "react";

interface IProps {
  name: string;
  props: {
    formation: string;
    function: string;
    socialMedias?: ISocialMedias[];
    contact?: IContact[];
  };
}

export const ModalComponentEquipe = ({ props, name }: IProps) => {
  return (
    <Dialog>
      <DialogTrigger className="sm:w-fit  text-xl bg-primary text-white text-center font-montserrat font-bold px-4 py-2 rounded">
        Mais informações
      </DialogTrigger>
      <DialogContent className="sm:w-fit w-[90%] ">
        <DialogHeader>
          <DialogTitle className="justify-center text-center sm:text-3xl text-2xl font-montserrat font-bold text-primary mb-4 flex-wrap ">
            {name}
          </DialogTitle>
          <DialogDescription className="w-full flex items-start justify-center flex-col gap-2">
            <p className="text-xl text-black font-montserrat font-bold">
              Formação: <span className="text-zinc-600">{props.formation}</span>
            </p>

            <Separator />

            <p className="text-xl text-black font-montserrat font-bold">
              Função: <span className="text-zinc-600">{props.function}</span>
            </p>

            <Separator />

            {props.socialMedias && (
              <div className="flex items-center justify-center gap-2 flex-row">
                {props.socialMedias.map((socialMedia) => (
                  <a
                    target="_blank"
                    href={socialMedia.link}
                    className="text-primary"
                    key={socialMedia.name}
                  >
                    {socialMedia.name}
                  </a>
                ))}
              </div>
            )}

            {props.contact && (
              <div className="w-full flex items-start justify-start gap-2 flex-col ">
                {props.contact.map((contact) => (
                  <div
                    key={contact.name}
                    className="w-full flex gap-2 flex-row items-center"
                  >
                    {contact.Icon}
                    {contact.isLink ? (
                      <>
                        <p className="text-lg text-gray-600 font-montserrat font-bold">
                          {contact.name}:{" "}
                        </p>
                        <a
                          className="text-lg text-black font-montserrat font-bold underline"
                          target="_blank"
                          href={contact.value}
                        >
                          {contact.mask ? contact.mask : contact.value}
                        </a>
                      </>
                    ) : (
                      <p className="text-lg text-gray-600 font-montserrat font-bold">
                        {contact.name}:{" "}
                        <span className="text-lg text-black font-montserrat font-bold">
                          {" "}
                          {contact.value}
                        </span>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
