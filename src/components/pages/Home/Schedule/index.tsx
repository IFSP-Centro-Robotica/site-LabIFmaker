export const ScheduleHome = () => {
    return (
        <section className="w-full h-[500px] bg-zinc-300 mt-8 flex flex-col items-center justify-center gap-4">
            <h1 className="text-black font-montserrat font-bold text-4xl max-w-4xl text-center">
                Tem alguma <span className="text-primary">dúvida</span> ou{" "}
                <span className="text-primary">quer agendar</span> um horário para
                visitar nosso laboratório?
            </h1>
            <h2 className="text-zinc-500 font-montserrat text-xl max-w-4xl text-center">
                Então basta entrar em contato através do formulário abaixo.
            </h2>
            <button className="text-2xl bg-primary text-white p-4 rounded font-montserrat font-bold shadow-2xl transition-colors hover:bg-primary-light-100 mt-6">
                Formulario
            </button>
        </section>
    );
};