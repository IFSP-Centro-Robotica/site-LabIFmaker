export const Map = () => {
  return (
    <div className="mt-10  w-full flex flex-col items-center justify-center gap-3">
      <h2 className="mb-3 text-3xl font-montserrat font-medium">Localização</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2932843709214!2d-48.02112402375198!3d-23.59381246278688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5cbf41ebfcf31%3A0xa65e4fb6d75446bf!2sInstituto%20Federal%20de%20Educa%C3%A7%C3%A3o%2C%20Ci%C3%AAncia%20e%20Tecnologia%20de%20S%C3%A3o%20Paulo%2C%20Campus%20Itapetininga!5e0!3m2!1spt-BR!2sbr!4v1691101618891!5m2!1spt-BR!2sbr"
        loading="lazy"
        className="lg:w-[70%] lg:h-[30vw] w-[95%] h-[70vw] rounded-md"
      ></iframe>
    </div>
  );
};
