import React from 'react'

function FiltroCategoria({ categorias, categoriaActiva, onCambiarCategoria }) {
  return (
    <div className="filtro-categoria">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          type="button"
          className={`filter-button ${categoriaActiva === categoria ? 'filter-button--active' : ''}`}
          onClick={() => onCambiarCategoria(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  )
}

export default FiltroCategoria
