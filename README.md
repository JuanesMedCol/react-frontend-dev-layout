# Espacio de Pruebas de Entrenamiento Front-End

## Indice Tematico
 0. [Requisitos previos](#0)
 1. [Instalacion](#1)
 2. [Ejecución](#2)
 
 ------
 
 ## Requisitos previos <a id="0">
1. Instalar [Node.JS](https://nodejs.org/en/)

## Instalación <a id="1">
1. Clonar el proyecto
2. Lanzar comando **npm install** para instalar las dependencias.
3. Crear archivo **.env** usando como plantilla el archivo **.env-example**
4. Definir las credenciales del acceso al back-end en el archivo **.env**

Según lo anterior, la configuración de las variables quedaría de la siguiente forma:
- **REACT_APP_URL_API=http://127.0.0.1:8000/v1/** (según el entorno en que se despliegue)
- **REACT_APP_URL_SEE_FILES=http://127.0.0.1:8000/app/** (según el entorno en que se despliegue)

## Ejecución <a id="2">
1. Despues de realizar el proceso de instalacion, ejecutar el comando  **npm start** en la carpeta del proyecto.
2. Abrir la direccion [http://localhost:3000](http://localhost:3000) o la direccion del entorno, para verla en el navegador.

-----------
