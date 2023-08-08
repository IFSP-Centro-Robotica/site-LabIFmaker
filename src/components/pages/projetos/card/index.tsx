import { InterfaceProjectsMock } from "@/mocks/projects/projects"
import { ModalComponentProject } from "../modal"

interface IProps  {
    props: InterfaceProjectsMock
}

export const CardComponentProjects = ({props}: IProps) =>{
    return(
            <div className="w-[600px] h-fit flex items-center justify-start flex-col gap-4 shadow-4xl  rounded p-3">
                <div className="w-full flex gap-3">
                    <props.image />
                    <div className=" flex flex-col justify-between w-full font-montserrat">
                        <h1 className="text-3xl">
                            {props.name}
                        </h1>  
                        <div>
                            <ModalComponentProject/>
                        </div>
                    </div>
                </div>
            </div>
    )
}