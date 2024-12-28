# Bibliotecas compartida en npm

### 1. **¿Como funcionan las librerias en npm?**

Las librerias en **npm** son paquetes de codigo que se pueden instalar en un proyecto particular para añadir funcionalidades reutilizables. Estos paquetes pueden ser librerias, herramientas, frameworks, utilidades, etc. Los paquetes en npm estan disponibles en su registro central, y se puede instalar, actualizar y gestionar dependencias a traves de la herramienta de linea de comandos de npm.

Para usar una libreria, se instala usando el comando `npm install <nombre-del-paquete>`.

### 2. **Pasos para crear una libreria en npm**

#### Paso 1: **Preparar el proyecto**

Primero, crear una carpeta para la libreria, por ejemplo:

```bash
mkdir saludar-lib
cd saludar-lib
mkdir src
cd src
```

Luego, iniciar el proyecto con el comando:

```bash
npm init
```

Este comando pedira informacion sobre la libreria, como su nombre, version, descripcion, entrada principal (`main, index, etc`), etc. Si no quieres pasar por todas las preguntas, puedes usar `npm init -y` para aceptar los valores por defecto.

#### Paso 2: **Escribir el codigo de la funcion**

Crear el archivo de JavaScript que contendra la libreria. Por ejemplo `saludar.js`:

```javascript
// saludar.js

function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

module.exports = saludar;
```

El codigo anterior contiene la funcion `saludar` que saluda a una persona. La libreria se puede importar en otros proyectos usando `require` (o `import`, dependiendo de la configuracion).

#### Paso 3: **Probar la libreria localmente**

Para asegurar que la libreria funciona correctamente, puede instalarse localmente en un proyecto de prueba. Para ello, crear y navegar al proyecto de prueba y usar `npm link`:

```bash
cd ../../
mkdir prueba-saludar-lib
cd prueba-saludar-lib
mkdir src
cd src
npm link ../../saludar-lib/src
```

Ahora, se puede importar y usar la libreria en el proyecto de prueba:

```javascript
// app.js en prueba-saludar-lib
const saludar = require("saludar-lib");

console.log(saludar("FG")); // Salida: Hola, FG!
```

#### Paso 4: **Preparar la libreria para publicarla**

Asegurar que el archivo `package.json` contiene la informacion adecuada, especialmente los campos:

- `name`: Nombre unico para tu libreria.
- `version`: La version de la libreria (por ejemplo, `1.0.0`).
- `description`: Una breve descripcion.
- `main`: El archivo principal, p.e. `index.js`.

Ejemplo del archivo de configuracion:

```json
{
  "name": "saludar-lib",
  "version": "1.0.0",
  "description": "Una libreria simple para saludar",
  "main": "index.js",
  "scripts": {
    "test": "echo Error: prueba no especificada && exit 1"
  },
  "keywords": ["saludar", "libreria"],
  "author": "FGalan",
  "license": "MIT"
}
```

#### Paso 5: **Publicar en npm**

Para publicar en npm, es necesario tener una cuenta. Si no tienes una, crear una cuenta en [npm.js](https://www.npmjs.com/). Una vez creada la cuenta establecer la conexion con el siguiente comando:

```bash
npm adduser
```

Seguir las instrucciones para ingresar el nombre de usuario, la contraseña y el correo electronico. Una vez establecida la identidad del usuario se podra regresar a la consola.

Luego, para publicar la libreria en npm, usar el comando:

```bash
npm publish
```

Si todo esta bien, npm subira tu libreria y sera accesible para otros usuarios.

#### Paso 6: **Usar y mantener tu libreria**

Una vez publicada, la libreria estara disponible en el registro de npm. Otros usuarios podran instalarla usando el comando:

```bash
npm install saludar-lib
```

Si se modifica la libreria, como agregar nuevas funcionalidades o corregir errores, actualiza la version en el archivo `package.json` (siguiendo la nomenclatura [versionado semantico](https://semver.org/)) y luego vuelve a publicar la nueva version, usando el comando:

```bash
npm version patch  # o minor, major segun corresponda
npm publish
```

### Consejos adicionales

- **Documentacion**: Asegurate de proporcionar documentacion clara sobre como usar la libreria. Incluir un archivo `README.md` en la raiz del proyecto para explicar el uso de las fuciones.
- **Pruebas**: Considera agregar pruebas a tu libreria, por ejemplo, con [Jest](https://jestjs.io/) o [Mocha](https://mochajs.org/), para asegurar que funcione correctamente.
- **Licencia**: Es importante agregar una licencia (como MIT o GPL) en el `package.json` para que otros sepan como pueden usar tu libreria.

Happy coding!.
