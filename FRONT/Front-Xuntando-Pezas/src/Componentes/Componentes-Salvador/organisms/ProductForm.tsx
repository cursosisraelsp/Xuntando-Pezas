import React, { useState } from 'react';
import InputGroup from '../molecules/InputGroup';
import ImageUploader from '../molecules/ImageUploader';
import Button from '../atoms/Button';
import './ProductForm.css';
import MenuLateral from '../../MenuLateral';

interface ProductFormData {
  nome: string;
  codigo: string;
  stock: number | string;
  tipo: string;
  peso: number | string;
  precio: number | string;
}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<ProductFormData>({
    nome: '',
    codigo: '',
    stock: '',
    tipo: '',
    peso: '',
    precio: '',
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleImageChange = (file: File | null) => {
    setSelectedImage(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData();
    data.append('nome', formData.nome);
    data.append('codigo', formData.codigo);
    data.append('stock', formData.stock.toString());
    data.append('tipo', formData.tipo);
    data.append('peso', formData.peso.toString());
    data.append('precio', formData.precio.toString());

    if (selectedImage) {
      data.append('image', selectedImage);
    }

    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        alert('Producto creado exitosamente');
        setFormData({
          nome: '',
          codigo: '',
          stock: '',
          tipo: '',
          peso: '',
          precio: '',
        });
        setSelectedImage(null);
      } else {
        alert('Error al crear producto');
      }
    } catch (error) {
      console.error('Error enviando formulario:', error);
      alert('Error al enviar');
    }
  };

  const handleSecondaryClick = () => {
    alert('Botón secundario presionado');
  };

  const handleDangerClick = () => {
    alert('Botón eliminar presionado');
  };

  return (
    <div className="proba-centrado-NewProduct">
    <div className="centrando-NewProducto-Salvador">
    <form className="product-form" onSubmit={handleSubmit}>
      {/* Botones posicionados arriba a la derecha */}


      <InputGroup id="nome" label="Nome" value={formData.nome} onChange={handleChange} required />
      <InputGroup id="codigo" label="Codigo" value={formData.codigo} onChange={handleChange} required />
      <InputGroup id="stock" label="Stock" type="number" value={formData.stock} onChange={handleChange} required />
      <InputGroup id="tipo" label="Tipo" value={formData.tipo} onChange={handleChange} required />
      <InputGroup id="peso" label="Peso" type="number" value={formData.peso} onChange={handleChange} required />
      <InputGroup id="precio" label="Precio" type="number" value={formData.precio} onChange={handleChange} required />

      <ImageUploader onImageChange={handleImageChange} />

      <Button type="submit" variant="primary" className="guardar-boton">
      Guardar
      </Button>
    </form>
    </div>
    <MenuLateral />
    </div>
  );
};

export default ProductForm;
