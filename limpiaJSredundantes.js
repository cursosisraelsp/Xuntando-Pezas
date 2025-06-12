import fs from 'fs';
import path from 'path';

// Carpeta raíz del backend relativa a donde esté este script
const ROOT_DIR = path.resolve('./BACK/Back-Xuntando-Pezas');

function eliminarJSRedundantes(directorio) {
  const archivos = fs.readdirSync(directorio);

  for (const archivo of archivos) {
    const rutaCompleta = path.join(directorio, archivo);
    const stats = fs.statSync(rutaCompleta);

    if (stats.isDirectory()) {
      eliminarJSRedundantes(rutaCompleta);
    } else if (archivo.endsWith('.js')) {
      const base = archivo.slice(0, -3);
      const tsPath = path.join(directorio, `${base}.ts`);

      if (fs.existsSync(tsPath)) {
        console.log(`🗑️ Eliminando: ${rutaCompleta}`);
        fs.unlinkSync(rutaCompleta);
      }
    }
  }
}

eliminarJSRedundantes(ROOT_DIR);
console.log('✅ Limpieza completada.');
