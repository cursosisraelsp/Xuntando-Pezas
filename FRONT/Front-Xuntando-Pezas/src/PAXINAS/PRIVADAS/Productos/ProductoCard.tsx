import React from 'react';

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

interface Props {
    product: Product;
    isEditing: boolean;
    canEdit: boolean;
    onEdit: () => void;
    onDelete: () => void;
    onSave: (updated: Product) => void;
    onCancel: () => void;
}

const ProductoCard: React.FC<Props> = ({
    product,
    isEditing,
    canEdit,
    onEdit,
    onDelete,
    onSave,
    onCancel
}) => {
    const [form, setForm] = React.useState(product);

    const handleChange = (field: keyof Product, value: string | number) => {
        setForm(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="product-card">
            <div className="foto-producto">
                <img src={product.imageUrl} alt={product.name} />
            </div>

            {isEditing ? (
                <>
                    <div className="nome-producto">
                        <input value={form.name} onChange={e => handleChange('name', e.target.value)} />
                    </div>
                    <div className="codigo-producto">
                        <input value={form.code} onChange={e => handleChange('code', e.target.value)} />
                    </div>
                    <div className="stock-producto">
                        <input
                            type="number"
                            value={form.stock}
                            onChange={e => handleChange('stock', +e.target.value)}
                        />
                    </div>
                    <div className="tipo-producto">
                        <input value={form.type} onChange={e => handleChange('type', e.target.value)} />
                    </div>
                    <div className="peso-producto">
                        <input
                            type="number"
                            step="0.01"
                            value={form.weight}
                            onChange={e => handleChange('weight', +e.target.value)}
                        /> kg
                    </div>
                    <div className="precio-producto">
                        <input
                            type="number"
                            step="0.01"
                            value={form.price}
                            onChange={e => handleChange('price', +e.target.value)}
                        /> €
                    </div>
                    <div className="iconos-agregar-quitar">
                        <i className="fas fa-save" title="Gardar" onClick={() => onSave(form)}></i>
                        <i className="fas fa-times" title="Cancelar" onClick={onCancel}></i>
                    </div>
                </>
            ) : (
                <>
                    <div className="nome-producto">{product.name}</div>
                    <div className="codigo-producto">{product.code}</div>
                    <div className="stock-producto">{product.stock}</div>
                    <div className="tipo-producto">{product.type}</div>
                    <div className="peso-producto">{product.weight} kg</div>
                    <div className="precio-producto">{product.price} €</div>
                    {canEdit && (
                        <div className="iconos-agregar-quitar">
                            <i className="fas fa-pencil-alt" title="Editar" onClick={onEdit}></i>
                            <i className="fas fa-trash-alt" title="Eliminar" onClick={onDelete}></i>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default ProductoCard;
