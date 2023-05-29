import * as React from 'react'
import { Link } from 'gatsby'

export default function Layout({ children }) {
    <>
        <header>
            <div>
                <Link to="/">Obino energies</Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/chauffage">Chaudiére</Link>
                    </li>
                    <li>
                        <Link to="/plomberie">Climatisation</Link>
                    </li>
                    <li>
                        <Link to="/plomberie">Pompe à chaleur</Link>
                    </li>
                    <li>
                        <Link to="/plomberie">Chauffe-eau</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>{children}</main>
        <footer>
            <div>
                <Link to="/">Obino energies</Link>
            </div>
        </footer>
    </>

}

