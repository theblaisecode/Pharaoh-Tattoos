import AftercareWrapper from "./AftercareWrapper";
import PageHero from "../../components/PageHero";
import AftercareSections from "../../components/AftercareSections";

function Aftercare() {
  const aftercareHero = "aftercareHero";
  const piercingAftercareHero = "piercingAftercareHero";
  const bgText = "After Care";
  const tattooAftercare = "tattooAftercare";
  const piercingsAftercare = "piercingsAftercare";

  return (
    <AftercareWrapper>
      <PageHero aftercareHero={aftercareHero} bgText={bgText} />

      <div className="aftercare">
        <div className="container">
          <AftercareSections careType={tattooAftercare} />
        </div>
      </div>

      <PageHero aftercareHero={piercingAftercareHero} bgText={bgText} />

      <div className="aftercare">
        <div className="container">
          <AftercareSections careType={piercingsAftercare} />
        </div>
      </div>
    </AftercareWrapper>
  );
}

export default Aftercare;
