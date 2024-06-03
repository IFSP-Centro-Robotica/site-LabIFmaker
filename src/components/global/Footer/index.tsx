interface IProps {
  isMt?: boolean;
}

export const FooterComponent = ({ isMt }: IProps) => {
  return (
    <div
      className={`w-full bg-primary pt-6 pb-6 text-center flex items-center justify-center ${isMt ? "mt-6" : ""}`}
    >
      <div className="w-[95%] flex flex-row items-center justify-center">
        <p className="text-white font-montserrat">
          © Instituto Federal de Ciencia e Tecnologia{" "}
          <strong>Campus Itapetininga</strong>
        </p>
      </div>
    </div>
  );
};
