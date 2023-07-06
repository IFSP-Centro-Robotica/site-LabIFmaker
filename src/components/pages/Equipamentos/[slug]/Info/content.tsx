import { IEquipamentFields } from "@/mocks/equipaments/equipament";
import { styleTextStrong, styledLinks, styledText } from ".";

interface IProps {
  data: IEquipamentFields;
}

export const ContentComponent = ({ data }: IProps) => {
  const equipament = data.content;

  return (
    <div>
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
          {equipament.website && (
            <p className={styledText}>
              <strong className={styleTextStrong}>
                {equipament.website!.title}
              </strong>
              <a
                href={equipament.website.website}
                className={styledLinks}
                target="_blank"
              >
                {equipament.website!.website}
              </a>
            </p>
          )}
          {equipament?.handbook && (
            <div className="w-full bg-zinc-300 p-1 rounded">
              <strong className={styleTextStrong}>
                {equipament.handbook!.title}
              </strong>
              {equipament.handbook.handbook.map((handbook) => (
                <p className={styledText}>
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
