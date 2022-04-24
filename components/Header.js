import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.header}>
        <span>Hola</span> Diego
      </h1>
      <p className={headerStyles.description}>Te estas esforzando un monton y te sigues preocupando por las cosas que te importan, lo haz hecho bien y con paciencia obtendras lo que anhelas</p>
    </div>
  )
}

export default Header