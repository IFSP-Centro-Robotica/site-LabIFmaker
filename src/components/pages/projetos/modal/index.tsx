'use client'
import { DialogHeader } from "@/components/ui/dialog"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog"

export const ModalComponentProject = () =>{
    return (
        <Dialog>
            <DialogTrigger className="text-xl bg-primary text-white text-center font-montserrat font-bold px-4 py-2 rounded">
                Mais informações
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-center text-3xl font-montserrat font-bold text-primary mb-4">
                        OII
                    </DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}