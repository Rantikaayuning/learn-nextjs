import headerStyles from '../styles/Header.module.css';

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Learn NextJS</span>
      </h1>
      <p className={headerStyles.description}>Keep up to date</p>
    </div>
  );
}

export default Header;
