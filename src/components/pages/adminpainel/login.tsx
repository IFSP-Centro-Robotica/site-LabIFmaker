"use client";

import Image from "next/image";
import logo from "@/assets/labifmakerlogopreta.svg";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export const LoginAdminPainel = () => {
  return (
    <div className="w-full min-h-common flex items-center justify-center">
      <Card className="w-[500px]">
        <CardHeader>
          <Image
            src={logo}
            alt="Logo lab-if maker"
            className="w-[90%] h-auto  m-auto"
          />
          <CardTitle>Painel</CardTitle>
          <CardDescription>Digite as seguintes informações:</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="user" className="font-montserrat text-gray-500">
                  User
                </Label>
                <Input id="user" placeholder="Digite um usuario" />
              </div>
            </div>
            <Separator className="my-4" />
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name" className="font-montserrat text-gray-500">
                  Password
                </Label>
                <Input id="name" placeholder="Digite a senha" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button className="bg-primary-light-100 text-white font-montserrat font-bold hover:bg-primary-light-200 transition-all">
            Avançar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
