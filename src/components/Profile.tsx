import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/brunosb.png" alt="Bruno Barbosa" />
      <div>
        <strong>Bruno Silva Barbosa</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level 1
        </p>
      </div>
    </div>
  );
}