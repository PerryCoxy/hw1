import {useState} from "react";
import Slider from "../../components/Slider";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import ChapterCard from "../../components/ChapterCard";
import s from "./Main.module.scss";

import {CHARACTER} from "../../constants/characters";

const Main = () => {
  const [character, setCharacter] = useState(CHARACTER);
  const [characterId, setCharacterId] = useState(null);

  const handleLikeClick = id => {
    setCharacter(prevState =>
      prevState.map(item => {
        return item.id === id ? {...item, isLike: !item.isLike} : item;
      })
    )
  };

  const handleReadBioClick = id => {
    setCharacterId(id);
  };

  return (
    <>
      <Slider/>
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
            {character.map(item => {
              return (
                <div key={item.id}>
                  <ChapterCard
                    id={item.id}
                    name={item.name}
                    src={item.thumbnail.path}
                    humanName={item.humanName}
                    description={item.description}
                    onLikeClick={handleLikeClick}
                    isLike={item.isLike}
                    onReadBio={handleReadBioClick}/>
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