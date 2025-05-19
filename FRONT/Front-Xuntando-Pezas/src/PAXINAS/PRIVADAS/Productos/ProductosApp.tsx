import React, { useEffect, useState } from 'react';
import ProductoRow from './ProductosRow';
import ProductoCard from './ProductoCard';

interface Product {
  id: number;
  name: string;
  code: string;
  stock: number;
  type: string;
  weight: number;
  price: number;
  imageUrl: string;
}

const ProductosApp: React.FC = () => {
  const [productos, setProductos] = useState<Product[]>([]);
  const [view, setView] = useState<'list' | 'card'>('list');
  const [editingId, setEditingId] = useState<number | null>(null);

  const rol = localStorage.getItem("rol");
  const canEdit = rol === "user" || rol === "admin";

  useEffect(() => {
    if (rol === "cliente") {
      document.body.classList.add("role-cliente");
    } else {
      document.body.classList.remove("role-cliente");
    }
    return () => {
      document.body.classList.remove("role-cliente");
    };
  }, [rol]);

  useEffect(() => {
    fetch('http://localhost:3000/api/productos')
      .then(res => res.json())
      .then(data => setProductos(data))
      .catch(() => setProductos([]));
  }, []);

  const handleEdit = (id: number) => {
    if (editingId !== null && editingId !== id) return;
    setEditingId(id);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleSave = (updated: Product) => {
    setProductos(prev => prev.map(p => p.id === updated.id ? updated : p));
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    if (!window.confirm("Seguro que queres eliminar este produto?")) return;
    setProductos(prev => prev.filter(p => p.id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <div className={`body body--${view}`}>
      <div className="header logo">Logo</div>
      <div className="barralateral">Barra Lateral</div>
      <div className="tituloProducto">Produtos</div>

      {canEdit && (
        <div className="botonAgregarProducto">
          <button onClick={() => alert("Novo produto")}>+ Novo producto</button>
        </div>
      )}

      <div className="selectoresIconasLista">
        <i
          className={`fas fa-grip-horizontal ${view === 'card' ? 'active-view-icon' : ''}`}
          onClick={() => setView('card')}
        ></i>
        <i
          className={`fas fa-bars ${view === 'list' ? 'active-view-icon' : ''}`}
          onClick={() => setView('list')}
        ></i>
      </div>

      <div className="taboaDeProductos">
        <div className="productos-grid">
          {productos.length === 0 ? (
            <p>Cargando produtos...</p>
          ) : view === 'list' ? (
            <>
              <div className="celda-cabecera foto-cabecera"></div>
              <div className="celda-cabecera">Nome</div>
              <div className="celda-cabecera">Código</div>
              <div className="celda-cabecera">Stock</div>
              <div className="celda-cabecera">Tipo</div>
              <div className="celda-cabecera">Peso</div>
              <div className="celda-cabecera">Prezo</div>
              <div className="celda-cabecera">Editar</div>
              {productos.map(producto => (
                <ProductoRow
                  key={producto.id}
                  product={producto}
                  isEditing={editingId === producto.id}
                  canEdit={canEdit}
                  onEdit={() => handleEdit(producto.id)}
                  onDelete={() => handleDelete(producto.id)}
                  onSave={handleSave}
                  onCancel={handleCancel}
                />
              ))}
            </>
          ) : (
            productos.map(producto => (
              <ProductoCard
                key={producto.id}
                product={producto}
                isEditing={editingId === producto.id}
                canEdit={canEdit}
                onEdit={() => handleEdit(producto.id)}
                onDelete={() => handleDelete(producto.id)}
                onSave={handleSave}
                onCancel={handleCancel}
              />
            ))
          )}
        </div>
      </div>

      <div className="selectoresAvanzarRetroceder">
        <i className="fas fa-chevron-left"></i>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default ProductosApp;