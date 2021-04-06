import Navigation from 'Components/Navigation/Navigation';
import style from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={style.header}>
      <Navigation />
    </header>
  );
}
