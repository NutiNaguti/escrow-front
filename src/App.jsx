import logo from './logo.svg';
import styles from './App.module.css';

function App() {
  return (
    <div class={styles.App}>
      <header>
        <div className={styles.Navbar}>
          <div className={styles.NavbarItem}>
            Hello
          </div>
          <div className={styles.NavbarItem}>
            Buy
          </div>
          <div className={styles.NavbarItem}>
            Sell
          </div>
          <div className={styles.NavbarItem}>
            Log in
          </div>
        </div>
      </header >
      <div className={styles.Content}>
        <div className={styles.Main}>
          Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
        </div>
      </div>
    </div >
  );
}

export default App;
