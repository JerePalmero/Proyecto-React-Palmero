 import logo from '../logo.png';

function NavBar () {
    return( 
        <nav class="nav-cont">
            <div>
            <img src={logo} alt="logo" class="logo-nav" width="150px"/>
            </div>
            <ul class="cont-nav">
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Viajes
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Nosotros
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Contactos
                    </a>
                </li>
            </ul>
      
        </nav>
      
    
          )
                    }

export default NavBar;
