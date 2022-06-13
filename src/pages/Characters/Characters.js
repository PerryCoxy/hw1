import { useContext, useState } from "react";
import ChapterCard from "../../components/ChapterCard";
import Heading from "../../components/Heading";
import { Context } from "../../Context";
import s from './Characters.module.scss';

const Characters = () => {
  const characterContext = useContext(Context);

  return (
    <>
      <Heading>Characters</Heading>
      <div className={s.cardWrap}>
        {characterContext.character.map(item => {
          return (
            <div key={item.id}>
              <ChapterCard
                id={item.id}
                name={item.name}
                src={item.thumbnail.path}
                humanName={item.humanName}
                description={item.description}
                onLikeClick={characterContext.handleLikeClick}
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