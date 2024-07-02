# reto-tecnico

- Primer commit inicial con la creacion del proyecto utilizando el CLI de vue, seleccione vue 3.x, vuex, linter, test unitarios y routing en el asistente.

- Registre una app en la api de reddit para poder consumir los endpoints y obtuve el access token a través de postman para realizar una pequeña prueba golpeando a uno de estos endpoints.

- Me di cuenta q no necesitaba un access token para poder pegarle al endpoint de las 50 entradas principales, sino que se accede a traves de este endpoint: https://www.reddit.com/top.json?limit=50, esto segun la documentacion misma de la API

- Instale axios para hacer las peticiones http a la api de reddit y cree un archivo getTopEntries para tener ahi la config de la API

---

- cree una carpeta modulos para modularizar la app, se que no es necesario por el tamaño del proyecto, pero lo considero una buena práctica y me servira de ejemplo para implementar un routing propio en el modulo de entradas de reddit.

- Elimine los componentes helloWorld y about que no los voy a estar necesitando y modifique el componente home para que me sirva a modo de entrada a la aplicación, todo ello para poder probar el routing.

- cambie el logo de vue por el logo de reddit,

- cree un nav aun sin estilos (Para esto estoy pensando utilizar boostrap por temas de tiempo),

- Agregué una regla al Eslint para que me permita tener nombres simples en mis componentes por ejemplo Navbar en vez de NavbarVue o NavbarComponent, esto por preferencia personal.

- Agregué alguna estructura de carpetas q pienso que voy a estar necesitando a futuro dentro del modulo de las entradas de reddit.

---

- Agregué boostrap para tener algunos estilos predefinidos.

- Agregué una carpeta css con un archivo styles.scss (voy a estar usando sass para esto tuve q instalar sass y sass loader como dependencias de desarrollo) y unos estilos reset del css para evitar que algunos estilos difieran segun el navegador.

---

- Agregué un componente para contener el listado (Entry list) de entradas (Entry).
- Agregué un maquetado inicial con la data que se requiere mostrar por entrada.

![Maquetado inicial Desktop](https://res.cloudinary.com/dhromiae3/image/upload/v1710781925/reto-tecnico/uzrd8rd2pmliga5qnlfc.png)

![Maquetado inicial Mobile](https://res.cloudinary.com/dhromiae3/image/upload/v1710782114/reto-tecnico/iyg1xebuauyajac4saj4.png)

---

- Agregué el cdn de fontawesome para poder utilizar algunos iconos que voy a estar necesitando (como el de los comentarios o el avatar, salir de la aplicacion, etc)

- Agregué una maquetación con la informacion sobre si la entrada ha sido leida, el nro de comentarios de la entrada.

![Maquetado número de comentarios y entrada vista](https://res.cloudinary.com/dhromiae3/image/upload/v1710784590/reto-tecnico/ayisc1zl61moqrk75lxe.png)

- Agregué la funcionalidad de mostrar en pantalla completa la imagen una vez seleccionada.

![Maquetado imagen seleccionada en pantalla completa](https://res.cloudinary.com/dhromiae3/image/upload/v1710784591/reto-tecnico/ckymehlkc6t3t6rfsbob.png)

---

- Agregué la maquetación y funcionalidad de paginación en la lista de entradas.

![Maquetado paginación](https://res.cloudinary.com/dhromiae3/image/upload/v1710786308/reto-tecnico/tqiyjwdmxyucnspkq5ua.png)

---

- Cambié el diseño para soportar doble vista (izq (entrada) - der (detalle)) q se pide en la 2da parte del reto.

- Algunos ajustes en el color del texto.

![Maquetado izq - der](https://res.cloudinary.com/dhromiae3/image/upload/v1710790116/reto-tecnico/ifkys7imj1z1mtadwba5.png)

---

- Agregué la pegada a la API de top entradas, agregue las configuraciones necesarias para poder tener la data en un store para poder tener toda esta data centralizada y pueda manejarse de manera correcta.

- Hice el mapeo de la data, segun lo q solicita el reto.

- Agregue algunos Helpers y funciones para trabajar las imagenes y devolver las horas en el formato requerido en el reto.

![Integración](https://res.cloudinary.com/dhromiae3/image/upload/v1710796074/reto-tecnico/zlkyuy1xgcuzqxnyiwtz.png)

---

- Agregué una condicional para ocultar las imagenes cuando el post no tienen un thumbnail.

- Agregué la funcionalidad de al hacer click en el thumbnail se cargue la imagen en tamaño completo, o en su defecto se muestre el propio thumbnail (cuando la imagen en tamaño completo no sea válida).

- Ya estoy mostrando los posts en el lado derecho.

- Corregí la paginacion, de momento tiene 10 items por pagina y solo los botones para la pagina anterior y siguiente.

(\*) Ya me falta muy poco para terminar, en el proximo commit estare enviando el estado persistido de los post leídos o no leídos, no me quedan claros un par de requerimiento:
• Guardar imágenes en la galería de imágenes.
• Botón Descartar publicación.

asumiré que se necesita persistir en una base de datos para esto entiendo que puedo usar algo como firebase, entiendo que reddit no tiene una funcionalidad incorporada para marcar posts como leídos o no leídos, para esto tambien creo que puedo usar un restApi en firebase para persistir esta data no solo de manera local con el store, sino tambien para cuando vuelva a entrar a la aplicación a traves de esta db.

---

- Arreglando el ancho y alto de las imagenes y de la pantalla de bienvenida.

---

- Arreglando algunos estilos y navegación.

- Creé una base de datos en firebase para guardar la data q necesito para saber si una entrada ha sido leida y posteriormente su imagen para poder listarla posteriormente en una galeria.

- Ya se muestran las entradas leidas segun la respuesta de la base de datos de firebase.

![Leido desde firebase](https://res.cloudinary.com/dhromiae3/image/upload/v1710812214/reto-tecnico/n0hprvahqxzurdiifbfo.png)

---

- Ya se actualizan y se marcan en tiempo real las entradas seleccionadas como leídas.

---

- Agregué una vista para mostrar la galería de imagenes, se puede guardar una imagen en la galería desde el menu de fullscreen de las entradas.

---

- Agregué las ultimas funcionalidades faltantes para remover una entrada en particular y varias (todas las entradas de esa pagina).

- Agregué algunos tooltip de ayuda en los botones para una mejor experiencia de usuario.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
