import { useState } from 'react';
import PropTypes from "prop-types";
import cn from 'classnames';
import Heading from '../Heading';
import Text from '../Text';

import s from './ChapterCard.module.scss';

import { ReactComponent as Like } from './assets/heart.svg'

const ChapterCard = ({
  id,
  name,
  src,
  humanName,
  description,
  isLike,
  onLikeClick,
  onBioClick,
}) => {

  const handleClick = () => {
    onLikeClick(id);
  };
  const handleBioClick = () => {
    onBioClick(id);
  };
  return (
    <div className={s.root}>
      <img
        src={src}
        alt={name}
        className={s.cardImage}
      />
      <div className={s.cardDetails}>
        <Heading level={2} className={s.cardName}>
          {name}
        </Heading>
        <Heading level={4} className={s.cardHumanName}>
          {humanName}
        </Heading>
        <Text className={s.cardDescription}>
          {description}
        </Text>

        <div className={s.cardMeta}>
          <div
            onClick={handleClick}
            className={cn(s.like, {
              [s.active]: isLike
            })}>
            <Like />
          </div>
          <div
            className={s.readBio}
            onClick={handleBioClick}
          >
            <a href="#">Read bio</a>
          </div>
        </div>
      </div>
    </div>
  );
};

ChapterCard.defaultProps = {
  isLike: false,
}

ChapterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string,
  humanName: PropTypes.string,
  description: PropTypes.string,
  isLike: PropTypes.bool,
  onLikeClick: PropTypes.func,
  onBioClick: PropTypes.func,
}

export default ChapterCard;