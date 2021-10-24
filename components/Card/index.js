import React from 'react';
import ButtonAdd from '../ButtonAdd';
import ButtonWishList from '../ButtonWishList';
import styles from './styles.module.scss';

const Card = ({
  id,
  src,
  titulo,
  nome,
  precoTotal,
  precoDesconto,
  parcelamento,
}) => {
  return (
    <div className={styles.card} key={id}>
      <div className={styles.header}>
        <img src={src} alt={titulo} />
        <ButtonWishList />
      </div>
      <p className={styles.title}>{nome}</p>
      <p className={styles.precoTotal}>R$ {precoTotal}</p>
      <p className={styles.precoDesconto}>R$ {precoDesconto}</p>
      <p className={styles.parcelamento}>
        em até{' '}
        <span>
          10x de R$ {(parcelamento / 10).toFixed(2).replace('.', ',')}
        </span>{' '}
        sem juros
      </p>
      <ButtonAdd />
    </div>
  );
};

export default Card;
