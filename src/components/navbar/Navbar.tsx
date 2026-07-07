import { type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate();

    let component: ReactNode

    

        component = (

            <div className='w-full flex justify-center py-4
                         bg-sky-200 text-red-400'>

                <div className="container flex justify-between text-lg mx-8">
                    <Link to='/home' className="text-2xl font-bold">Farmacia</Link>

                    <div className='flex gap-4'>
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categoria</Link>
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

export default Navbar