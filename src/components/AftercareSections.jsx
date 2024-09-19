import { afterCareInfo } from "../data";
import HeadingTop from "./HeadingTop";

function AftercareSections({ careType }) {
  const selectType = afterCareInfo.filter((item) => item[careType]);

  return (
    <>
      {selectType.map((aftercareSections, index) => {
        const careData = aftercareSections[careType];

        return (
          <div key={index} className="content">
            {careData.map((aftercareType) => {
              const { id, heading, directions } = aftercareType;

              return (
                <div key={id} className="heading">
                  <HeadingTop
                    head={heading}
                    description={
                      <div className="directionsContainer">
                        {directions.map((direction) => {
                          const { id, title, instructions, head } = direction;

                          return (
                            <div key={id} className="directions">
                              <h3>{title}</h3>

                              {instructions && (
                                <div className="instructions">
                                  {instructions.map((instruction) => (
                                    <div
                                      key={instruction.id}
                                      className="description">
                                      {instruction.description}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {head && (
                                <div className="description">{head}</div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    }
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default AftercareSections;
