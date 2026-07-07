import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { type ReactNode } from "react"


function Footer() {

    let data = new Date().getFullYear()




    let component: ReactNode



    component = (

        <div className="flex justify-center bg-sky-200 text-red-400">
            <div className="container flex flex-col items-center py-4">
                <p className='text-xl font-bold'>
                    Farmacia | {data}
                </p>
                <p className='text-lg'>Acesse minhas redes sociais</p>
                <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/in/devalanissantos/" target="_blank">
                        <LinkedinLogoIcon size={48} weight='bold' />
                    </a>
                    <a href="https://github.com/alanis-santos" target="_blank">
                        <GithubLogoIcon size={48} weight='bold' />
                    </a>
                </div>
            </div>
        </div>

    )


    return (
        <>
            {component}
        </>
    )
}

export default Footer