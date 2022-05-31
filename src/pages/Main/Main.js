import { useContext, useState } from "react";
import ChapterCard from "../../components/ChapterCard";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import Slider from "../../components/Slider";
import { Context } from "../../Context";
import s from "./Main.module.scss";

const Main = () => {
  const context = useContext(Context);
  const [characterId, setCharacterId] = useState(null);

  const handleReadBioClick = id => {
    setCharacterId(id);
  };

  return (
    <>
      <Slider />
      <section className={s.cardSection}>
        <Container>
          <div className={s.cardTitle}>
            <Heading backLine>
              Marvel Cards
            </Heading>
            <Heading level={2}>
              Collect your best five
            </Heading>
          </div>
          <div className={s.cardWrap}>
            {context.character.map(item => {
              return (
                <div key={item.id}>
                  <ChapterCard
                    id={item.id}
                    name={item.name}
                    src={item.thumbnail.path}
                    humanName={item.humanName}
                    description={item.description}
                    onLikeClick={context.handleLikeClick}
                    isLike={item.isLike}
                    onReadBio={handleReadBioClick} />
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  )
}

export default Main;