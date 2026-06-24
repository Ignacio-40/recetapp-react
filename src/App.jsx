import { useMemo, useState } from 'react'
import ListaRecetas from './components/ListaRecetas'
import FiltroCategoria from './components/FiltroCategoria'
import { recetas } from './data/recetas'
import './App.css'

const categorias = ['Todas', 'Entrada', 'Fondo', 'Postre']

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const recetasFiltradas = useMemo(() => {
    return recetas
      .filter((receta) => categoriaActiva === 'Todas' || receta.categoria === categoriaActiva)
      .filter((receta) =>
        receta.nombre.toLowerCase().includes(busqueda.trim().toLowerCase())
      )
  }, [categoriaActiva, busqueda])

  return (
    <main className="app">
      <section className="hero">
        <div className="hero__texto">
          <span className="hero__badge">RecetApp</span>
          <h1>Recetas ordenadas por categoría</h1>
          <p>Filtra por categoría y busca recetas por nombre con una interfaz clara.</p>
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

      <section className="toolbar">
        <FiltroCategoria
          categorias={categorias}
          categoriaActiva={categoriaActiva}
          onCambiarCategoria={setCategoriaActiva}
        />
        <div className="search-bar">
          <label htmlFor="busqueda-nombre" className="search-label">
            Buscar por nombre
          </label>
          <input
            id="busqueda-nombre"
            type="search"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
            placeholder="Ej. Tarta de Verduras"
            className="search-input"
          />
        </div>
      </section>

      <section className="cards-grid">
        {recetasFiltradas.length > 0 ? (
          <ListaRecetas recetas={recetasFiltradas} />
        ) : (
          <div className="empty-state">No hay recetas que coincidan.</div>
        )}
      </section>
    </main>
  )
}

export default App
