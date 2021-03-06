import React from 'react'
import {NavLink} from "react-router-dom"

const MainMenu = () => (
    <header class="main-header">
      <div class="ed-grid s-grid-5 lg-grid-4">
        <div class="s-cols-4 lg-cols-1 s-cross-center">
            <a href="/">
                <img class="main-logo" src="https://ed.team/static/images/logo/logo.svg" alt="logo" />
            </a>
        </div>
        <div class="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
          <nav class="main-menu" id="main-menu">
            <ul>
              <li><NavLink exact to="/" activeClassName="activo" >Inicio</NavLink></li>
              <li><NavLink to="/cursos" activeClassName="activo">Cursos</NavLink></li>
              <li><NavLink to="/formulario" activeClassName="activo">Formulario</NavLink></li>
            </ul>
          </nav>
          <div class="main-menu-toggle to-l" id="main-menu-toggle"></div>
        </div>
      </div>
    </header>


)

export default MainMenu