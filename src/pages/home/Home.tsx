function Home() {
  return (
    <>
      <div className="bg-red-50 flex justify-center">
        <div className='container grid grid-cols-2 text-purple-400'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl font-bold'>
              Seja Bem Vindo!
            </h2>
            <p className='text-xl'>
              Aqui você encontra tudo sobre o ramo farmacêutico.
            </p>
          </div>

          <div className="flex justify-center ">
            <img
              src="/foto_farmacia.png"
              alt="Imagem Página Home"
              className='w-3/4'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home