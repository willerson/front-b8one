import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './styles.module.scss';

const ButtonWishList = () => {
  const [added, setAdded] = React.useState(false);

  return (
    <span
      onClick={() => setAdded(!added)}
      className={`${styles.buttonWishList} ${added ? styles.active : ''}`}
    >
      <FontAwesomeIcon icon={!added ? farHeart : faHeart} size="lg" />
    </span>
  );
};

export default ButtonWishList;
