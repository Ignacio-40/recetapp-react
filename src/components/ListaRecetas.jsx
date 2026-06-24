import React from 'react'
import RecetaCard from './RecetaCard'

function ListaRecetas({ recetas }) {
  if (!Array.isArray(recetas) || recetas.length === 0) {
    return <p className="lista-recetas__empty">No hay recetas para mostrar.</p>
  }

  return (
    <div className="lista-recetas">
      {recetas.map((receta) => (
        <RecetaCard
          key={receta.id}
          nombre={receta.nombre}
          origen={receta.origen}
          porciones={receta.porciones}
          categoria={receta.categoria}
          descripcion={receta.descripcion}
          ingredientes={receta.ingredientes}
          esVegetariana={receta.esVegetariana}
        />
      ))}
    </div>
  )
}

export default ListaRecetas
