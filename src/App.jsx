import { useMemo, useState } from 'react'
import ListaRecetas from './components/ListaRecetas'
import { recetas } from './data/recetas'
import './App.css'

const categorias = ['Todas', 'Entrada', 'Fondo', 'Postre']

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')

  const recetasFiltradas = useMemo(() => {
    return categoriaActiva === 'Todas'
      ? recetas
      : recetas.filter((receta) => receta.categoria === categoriaActiva)
  }, [categoriaActiva])

  return (
    <main className="app">
      <section className="hero">
        <div className="hero__texto">
          <span className="hero__badge">RecetApp</span>
          <h1>Recetas ordenadas por categoría</h1>
          <p>Explora entradas, fondos y postres con estilo claro y tarjetas visuales.</p>
        </div>
        <div className="hero__status">
          <div className="hero__card">
            <span>Recetas disponibles</span>
            <strong>{recetas.length}</strong>
          </div>
          <div className="hero__card hero__card--secondary">
            <span>Categoría activa</span>
            <strong>{categoriaActiva}</strong>
          </div>
        </div>
      </section>

      <section className="filters">
        {categorias.map((categoria) => (
          <button
            key={categoria}
            type="button"
            className={`filter-button ${categoriaActiva === categoria ? 'filter-button--active' : ''}`}
            onClick={() => setCategoriaActiva(categoria)}
          >
            {categoria}
          </button>
        ))}
      </section>

      <section className="cards-grid">
        {recetasFiltradas.length > 0 ? (
          <ListaRecetas recetas={recetasFiltradas} />
        ) : (
          <div className="empty-state">No hay recetas disponibles en esta categoría.</div>
        )}
      </section>
    </main>
  )
}

export default App
