function PageHero({ galleryHero, aftercareHero, piercingsHero, bgText }) {
  return (
    <section id={galleryHero || aftercareHero || piercingsHero}>
      <span className="bgText">{bgText} </span>
    </section>
  );
}

export default PageHero;
