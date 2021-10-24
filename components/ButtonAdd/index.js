import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './styles.module.scss';

const ButtonAdd = () => {
  const [add, setAdd] = React.useState(false);
  return (
    <button
      onClick={() => setAdd(!add)}
      className={`${styles.buttonAdd} ${add ? styles.active : ''}`}
    >
      {add ? (
        <span>
          <FontAwesomeIcon icon={faCheck} size="xs" />
          Adicionado
        </span>
      ) : (
        'Adicionar'
      )}
    </button>
  );
};

export default ButtonAdd;
