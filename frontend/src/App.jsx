import { useState } from 'react'
import './App.css'
const reactLogoUrl = '/react.svg'
const viteLogoUrl = '/vite.svg'

function imagesUrl(name) {
  return new URL(`./assets/${name}`, import.meta.url).href
}

function App() {
  return (
    <> 
      <header className="header">
        <div className="container header-content">
          <div className="logo">
            <a href="#inicio"><img src={imagesUrl('logo.png')} alt="Logo" /></a>
          </div>
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
            <a className="btn" href="#contacto">Contáctanos</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-overlay">
          <h1>SOLUCIONES<br />PARA SU NEGOCIO</h1> 
          <p>Impulsando su éxito</p>
          <a className="btn" href="#">Ver Más</a>
        </div>
      </section>

      <section className="about" id="nosotros">
        <div className="container">
          <h2>¿Quiénes Somos?</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={imagesUrl('quienes_somos.jpg.jpeg')} alt="Quiénes Somos" />
            </div>
            <div className="about-text">
              <p>Somos una empresa dedicada a brindar soluciones integrales para su negocio.</p>
              <p>Nuestro equipo está comprometido con la excelencia y la satisfacción de nuestros clientes.</p>
              <p>Trabajamos con pasión para ayudarle a alcanzar sus objetivos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="servicios">
        <div className="container">
          <h2>Nuestros Servicios</h2>
          <div className="divider"></div>

          <div className="services-grid">
            <div className="service-card">
              <img src={imagesUrl('3.png')} alt="Consultoría Empresarial" />
              <h3>Consultoría Empresarial</h3>
              <p>Asesoría y estrategias para su negocio.</p>
            </div>
            <div className="service-card">
              <img src={imagesUrl('4.png')} alt="Desarrollo Tecnológico" />
              <h3>Desarrollo Tecnológico</h3>
              <p>Innovación y software.</p>
            </div>
            <div className="service-card">
              <img src={imagesUrl('2.png')} alt="Marketing Digital" />
              <h3>Marketing Digital</h3>
              <p>Publicidad y redes sociales.</p>
            </div>
            <div className="service-card">
              <img src={imagesUrl('1.png')} alt="Gestión Financiera" />
              <h3>Gestión Financiera</h3>
              <p>Optimización de recursos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="container">
          <h2>Contáctenos</h2>
          <div className="divider"></div>

          <div className="contact-content">
            <form className="contact-form">
              <input type="text" placeholder="Nombre" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Mensaje"></textarea>
              <button type="submit">Enviar</button>
            </form>

            <div className="contact-info">
              <p>
                <img src={imagesUrl('tel.png')} alt="telefono" />
                <strong>Teléfono:</strong> +56 9 1234 5678
              </p>
              <p>
                <img src={imagesUrl('correo.png')} alt="email" />
                <strong>Email:</strong> info@tuempresa.com
              </p>
              <p>
                <img src={imagesUrl('dire.png')} alt="ubicacion" />
                <strong>Dirección:</strong> Av. Example 123, Santiago, Chile
              </p>

              <div className="socials">
                <a href="#"><img src={imagesUrl('facebook.png')} alt="Facebook" /></a>
                <a href="#"><img src={imagesUrl('twi.png')} alt="Twitter" /></a>
                <a href="#"><img src={imagesUrl('linkedin.png')} alt="LinkedIn" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default App;

