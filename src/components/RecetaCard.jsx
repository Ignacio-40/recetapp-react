import React from 'react'

function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes, esVegetariana }) {
  const ingredientesList = Array.isArray(ingredientes)
    ? ingredientes
    : typeof ingredientes === 'string'
    ? ingredientes.split(',').map((item) => item.trim())
    : []

  const normalizedCategory = categoria
    ? categoria.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
    : 'general'

  return (
    <article className={`receta-card receta-card--categoria-${normalizedCategory} ${esVegetariana ? 'receta-card--vegetariana' : ''}`}>
      <header className="receta-card__header">
        <h2 className="receta-card__title">{nombre}</h2>
        <p className="receta-card__meta">
          <span className={`receta-card__category receta-card__category--${normalizedCategory}`}>
            {categoria}
          </span>
          <span className="receta-card__origin">Origen: {origen}</span>
          <span className="receta-card__servings">Porciones: {porciones}</span>
        </p>
      </header>

      <section className="receta-card__section receta-card__section--descripcion">
        <h3>Descripción</h3>
        <p>{descripcion}</p>
      </section>

      <section className="receta-card__section receta-card__section--ingredientes">
        <h3>Ingredientes</h3>
        {ingredientesList.length > 0 ? (
          <ul>
            {ingredientesList.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        ) : (
          <p>No hay ingredientes disponibles.</p>
        )}
      </section>
    </article>
  )
}

export default RecetaCard
