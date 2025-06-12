# servidorNM
Este proyecto consta de Licencia MIT,con test de prueba "Jest" creando jest.config.js,mediante prueba matematica + una de login.

La integracion jsdom de JAVA ya no está incluida por defecto cuando se instala el paquete de Jest desde su version 28,(hay que buscar la version de jsdom JAVA para jest e instalarla separadamente)

Probando Workflow,cuidado si estais trabajando en main, que "no le gusta" a los Workflows, (en otras ramas no hay notificaciones de fallos). Se fueron cambiando package.json y tsconfig.json por "recomendaciones".

Pagina sencilla visualmente con un reproductor de video de la Asociacion de Empresarios del Milladoiro y un enlace a su pagina Oficial,pero que en Vercel https://servidor-nm.vercel.app/ (integrada desde GitHub) funciona
he selecionado la carpeta Front como Root, pero en Back está el formulario de logueo cd .. Front (npm run dev) / cd .. Back (node server)

Env (test)
 Copiar `.env.example` a `.env`
 Completar los valores según tu entorno local


Resumen de instalaciones:
🔧 Instalaciones en el Backend (Node.js + Express + SQLite)
● Node.js y npm (preinstalado o instalado previamente)

Express:
bash
npm install express

TypeScript:
bash
npm install
--save-dev
typescript

ts-node para ejecutar
TypeScript directamente:
bash
npm install
--save-dev ts-node

ESM (ECMAScript
Modules): configurado
con "type": "module"
en package.json

SQLite3:
bash
npm install sqlite3 // (aunque se ha instalado Dbeaver de BBDD que lo tiene integrado)

Posiblemente: nodemon,
para reiniciar el servidor
automáticamente:
bash
npm install
--save-dev nodemon

💻 Instalaciones en el Frontend (React + Vite) (Bash)
Vite (cuando creaste el
proyecto):
npm create
vite@latest
+Verificar que
instalado
npm install vite
(--save-dev)
+Plugins
1-npm install
--save-dev vite
@vitejs/plugin-react
2-npm install
@vitejs/plugin-react
--save-dev

React y ReactDOM
(Instal. automáticamente
con Vite):
npm install react
react-dom
+types
npm install
--save-dev (-D en
vez de esto,si
problemas
/typescript)
@types/react
@types/react-dom
+plugins
npm install
@vitejs/plugin-react
--save-dev

TypeScript (si usaste
plantilla TypeScript):
npm install
--save-dev
typescript

JEST
npm install --save-dev ts-jest jest @types/jest
npm install --save-dev jest ts-jest @types/jest
npm install --save-dev jest-environment-jsdom
npm install --save-dev jest ts-jest @types/jest jest-environment-jsdom
Ejecutar pruebas:
# Para el frontend
cd .. cd Front
npm run test // npm run dev
# Para el backend
cd .. cd Back
npm run test // node server
gestionar variables de entorno:
npm install dotenv

si node.js < 18: npm install node-fetch // npm install axios (mas potente)
