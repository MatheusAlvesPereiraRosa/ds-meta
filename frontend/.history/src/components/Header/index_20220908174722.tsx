
import logo from '../../assets/img/logo.svg'


function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="Logo" />
        <h1>DsMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/matchus_mtpr">@matchus_mtpr</a>
        </p>
      </div>
    </header>
  )
}

export default Header
