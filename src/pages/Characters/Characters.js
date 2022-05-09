import s from './Characters.module.scss';
import Heading from "../../components/Heading";
import ChapterCard from "../../components/ChapterCard";
import {useState} from "react";
import {CHARACTER} from "../../constants/characters";

const Characters = () => {
  const [character, setCharacter] = useState(CHARACTER);

  const handleLikeClick = id => {
    setCharacter(prevState =>
      prevState.map(item => {
        return item.id === id ? {...item, isLike: !item.isLike} : item;
      })
    )
  };
  return (
    <>
      <Heading>Characters</Heading>
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
              />
            </div>
          );
        })}
      </div>
    </>
  )
};

export default Characters;