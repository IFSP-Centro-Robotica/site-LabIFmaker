import { IEquipamentFields } from "@/mocks/equipaments/equipament";
import { styleTextStrong, styledLinks, styledText } from ".";

interface IProps {
  data: IEquipamentFields;
}

export const ContentComponent = ({ data }: IProps) => {
  const equipament = data.content;

  return (
    <div className="w-full h-full flex flex-col gap-1">
      {equipament && (
        <>
          {equipament?.brand && (
            <p className={styledText}>
              <strong className={styleTextStrong}>
                {equipament!.brand!.title}
              </strong>
              {equipament.brand!.brand}
            </p>
          )}
          {equipament?.extensions && (
            <p className={styledText}>
              <strong className={styleTextStrong}>
                {equipament.extensions!.title}
              </strong>
              {equipament.extensions!.extensions}
            </p>
          )}
          {equipament?.recommendedMaterialsTobeUsed && (
            <p className={styledText}>
              <strong className={styleTextStrong}>
                {equipament.recommendedMaterialsTobeUsed!.title}
              </strong>
              {
                equipament.recommendedMaterialsTobeUsed!
                  .recommendedMaterialsTobeUsed
              }
            </p>
          )}
          {equipament.softwares && (
            <p className={styledText}>
              <strong className={styleTextStrong}>
                {equipament.softwares!.title}
              </strong>
              {equipament.softwares!.softwares}
            </p>
          )}
          {equipament.type && (
            <p className={styledText}>
              <strong className={styleTextStrong}>
                {equipament.type!.title}
              </strong>
              {equipament.type!.type}
            </p>
          )}
          {equipament.website && equipament?.handbook && (
            <div className="w-full mt-3 p-1 rounded flex flex-col">
              <p className={styledText}>
                <strong className={styleTextStrong}>
                  {equipament.website!.title}
                </strong>
              </p>
              <a
                href={equipament.website.website}
                className={styledLinks + styledText}
                target="_blank"
              >
                {equipament.website!.website}
              </a>

              <strong className={styleTextStrong}>
                {equipament.handbook!.title}
              </strong>
              {equipament.handbook.handbook.map((handbook, index) => (
                <p className={styledText} key={index}>
                  <a
                    href={handbook.link}
                    className={styledLinks}
                    target="_blank"
                  >
                    {handbook.title}
                  </a>
                </p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
