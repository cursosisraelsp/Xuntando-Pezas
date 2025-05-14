# En React existe contenteditable
Sí, **en React también existe `contentEditable`**, pero con algunas particularidades importantes respecto a cómo se usa y se comporta:

---

### ✅ Uso básico de `contentEditable` en React

En React, se usa **`contentEditable` (con E mayúscula)** como prop JSX:

```jsx
function EditableDiv() {
  return <div contentEditable={true}>Texto editable</div>;
}
```

> ⚠️ A diferencia de HTML puro, **en JSX las propiedades HTML se escriben en *camelCase***, por eso es `contentEditable` y no `contenteditable`.

---

### ⚠️ Consideraciones importantes

#### 1. **No se actualiza automáticamente el estado**

* React **no controla el contenido interno** de un `div` con `contentEditable`. Por tanto, si quieres capturar los cambios, necesitas manejar eventos como `onInput`.

```jsx
import { useState } from "react";

function EditableDiv() {
  const [text, setText] = useState("Texto editable");

  return (
    <div
      contentEditable
      onInput={(e) => setText(e.currentTarget.textContent)}
      suppressContentEditableWarning={true}
    >
      {text}
    </div>
  );
}
```

#### 2. **`suppressContentEditableWarning`**

* React muestra una advertencia si usas `contentEditable` junto con `children` (como el texto en el ejemplo anterior), porque no puede garantizar que los datos estén sincronizados.
* Puedes suprimir esa advertencia con esta prop: `suppressContentEditableWarning={true}`.

---

### ✅ Cuándo usar `contentEditable` en React

Usa `contentEditable` **solo si necesitas edición de texto libre**, sin un campo de formulario tradicional (`input` o `textarea`), como por ejemplo:

* Editores de texto enriquecido
* Campos inline que parecen texto plano
* Interfaces WYSIWYG

---

¿Te gustaría un ejemplo más completo con estilos y botón para guardar el texto editado?
