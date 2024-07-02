# Reto Técnico Reddit

## Decisiones Tomadas y Notas Importantes

### Configuración Inicial del Proyecto

1. **Creación del Proyecto:**
   - **Acción:** Primer commit inicial con la creación del proyecto utilizando el CLI de Vue.
   - **Opciones seleccionadas:** Vue 3.x, Vuex, Linter (ESLint), test unitarios (Jest) y routing.
   - **Motivo:** Configurar un entorno de desarrollo robusto y estandarizado.

2. **Registro en la API de Reddit:**
   - **Acción:** Registro de una app en la API de Reddit para consumir los endpoints y obtención del access token a través de Postman.
   - **Motivo:** Realizar pruebas preliminares con los endpoints.
   - **Observación:** No se necesitaba un access token para acceder al endpoint de las 50 entradas principales: `https://www.reddit.com/top.json?limit=50`.

### Instalación de Dependencias

3. **Instalación de Axios y Configuración de la API:**
   - **Acción:** Instalación de Axios para hacer peticiones HTTP y creación del archivo `getTopEntries.js` para la configuración de la API.
   - **Comando:**
     ```bash
     npm install axios
     ```

### Estructuración y Modularización del Proyecto

4. **Modularización:**
   - **Acción:** Creación de una carpeta `modules` para modularizar la aplicación.
   - **Motivo:** Buenas prácticas de organización del código.
   - **Acciones adicionales:** Eliminación de componentes innecesarios (`HelloWorld` y `About`) y modificación del componente `Home`.

5. **Navbar y Reglas de ESLint:**
   - **Acción:** Creación de un `Navbar` sin estilos iniciales.
   - **Acción:** Adición de una regla en ESLint para permitir nombres simples en los componentes.
   - **Motivo:** Preferencia personal y simplificación del código.

### Estilos y Maquetación

6. **Integración de Bootstrap y FontAwesome:**
   - **Acción:** Instalación de Bootstrap y configuración de FontAwesome mediante CDN.
   - **Comando:**
     ```bash
     npm install bootstrap @fortawesome/fontawesome-free
     npm install --save-dev sass sass-loader
     ```

7. **Estilos Personalizados:**
   - **Acción:** Creación de una carpeta `css` con un archivo `styles.scss` y estilos reset.
   - **Motivo:** Uniformidad de estilos entre diferentes navegadores.

### Desarrollo de Componentes y Funcionalidades

8. **Componentes de Listado y Entrada:**
   - **Acción:** Creación de los componentes `EntryList` y `Entry` con un maquetado inicial.
   - **Motivo:** Separar la lógica y presentación de las entradas.

9. **Pantalla Completa para Imágenes:**
   - **Acción:** Implementación de la funcionalidad para mostrar imágenes en pantalla completa.
   - **Motivo:** Mejorar la experiencia del usuario al visualizar imágenes.

10. **Galería de Imágenes:**
    - **Acción:** Adición de la funcionalidad para guardar imágenes en una galería personal.
    - **Motivo:** Funcionalidad extra útil para los usuarios.

### Integración y Persistencia de Datos

11. **Integración de la API:**
    - **Acción:** Consumo del endpoint de Reddit para obtener las 50 entradas principales.
    - **Motivo:** Obtener los datos necesarios para el listado de entradas.

12. **Persistencia con Firebase:**
    - **Acción:** Configuración de Firebase para almacenar el estado de las entradas leídas y las imágenes guardadas.
    - **Motivo:** Persistencia de datos entre sesiones.

### Testing

13. **Configuración de Jest:**
    - **Acción:** Configuración de Jest para realizar pruebas unitarias.
    - **Motivo:** Asegurar la calidad del código.
    - **Configuración:**
      ```javascript
      module.exports = {
        preset: '@vue/cli-plugin-unit-jest',
        transform: {
          '^.+\\.vue$': 'vue-jest',
          '^.+\\.[t|j]sx?$': 'babel-jest',
        },
        testMatch: [
          '**/tests/**/*.spec.[jt]s?(x)',
        ],
      };
      ```
    - **Ejecución de pruebas:** `npm run test:unit`.

### Notas Finales

- **Persistencia de Entradas Leídas:** Implementada utilizando Firebase.
- **Galería de Imágenes:** Integrada con Firebase.
- **Optimización de Estilos:** Uso de SCSS y Bootstrap.
- **Mejoras de Interfaz:** Tooltips y efectos hover para mejor UX.

---

## Configuración del Proyecto

### Instalación de Dependencias

npm install

### Compilación y Recarga en Caliente para Desarrollo

npm run serve

### Compilación para Producción

npm run build

### Ejecución de Pruebas Unitarias

npm run test:unit

### Linting y Corrección de Archivos

npm run lint
