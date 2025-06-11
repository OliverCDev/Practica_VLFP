# Manual Técnico: Analizador Léxico y AFD

## Índice
- [Manual Técnico: Analizador Léxico y AFD](#manual-técnico-analizador-léxico-y-afd)
  - [Índice](#índice)
  - [Introducción](#introducción)
  - [Descripción del Analizador Léxico](#descripción-del-analizador-léxico)
  - [Estructura del Código](#estructura-del-código)
  - [Funcionamiento del Analizador](#funcionamiento-del-analizador)
  - [Alfabeto y Tokens Reconocidos](#alfabeto-y-tokens-reconocidos)
  - [Autómata Finito Determinista (AFD)](#autómata-finito-determinista-afd)
  - [Generación del Diagrama AFD](#generación-del-diagrama-afd)
  - [Enumeración `Type` y Clase `Token`](#enumeración-type-y-clase-token)
    - [Enumeración `Type`](#enumeración-type)
    - [Clase `Token`](#clase-token)
  - [Construcción de Jugadores desde Tokens](#construcción-de-jugadores-desde-tokens)
    - [Resumen del funcionamiento](#resumen-del-funcionamiento)
  - [Interfaz Web del Analizador de Pokémons](#interfaz-web-del-analizador-de-pokémons)
    - [Funcionalidades principales:](#funcionalidades-principales)
  - [Vista de Jugadores y sus Pokémons](#vista-de-jugadores-y-sus-pokémons)
    - [Características principales:](#características-principales)
  - [Vista de Errores Léxicos](#vista-de-errores-léxicos)
    - [Descripción de la Funcionalidad:](#descripción-de-la-funcionalidad)
    - [Características Técnicas:](#características-técnicas)
    - [Uso de `localStorage`:](#uso-de-localstorage)

---

## Introducción
Este manual describe el analizador léxico desarrollado en TypeScript para identificar tokens específicos de un lenguaje ficticio con palabras reservadas y símbolos especiales. Además, se incluye la descripción y generación del Autómata Finito Determinista (AFD) que modela el comportamiento del analizador.

## Descripción del Analizador Léxico
El analizador léxico procesa una cadena de texto de entrada para dividirla en tokens, tales como palabras reservadas, números, símbolos y cadenas de texto. Se emplea un autómata de estados finitos para controlar la transición entre diferentes tipos de tokens.

## Estructura del Código

- **Variables internas:**
  - `row` y `column`: controlan la posición del cursor en el texto.
  - `auxChar`: almacena caracteres temporales para formar tokens simples.
  - `auxWord`: almacena cadenas para tokens tipo palabra o texto.
  - `state`: estado actual del autómata.
  - `tokenList`: lista de tokens reconocidos.
  - `errorList`: lista de errores léxicos detectados.

- **Constantes:**
  - `RESERVED_WORDS`: arreglo con las palabras reservadas del lenguaje.

- **Métodos principales:**
  - `scanner(input: string)`: ejecuta el análisis léxico sobre la cadena de entrada.
  - `addCharacter(char: string)`, `addCharacterWord(char: string)`: métodos auxiliares para acumular caracteres.
  - `addToken(type: Type, lexeme: string, row: number, column: number)`: agrega un token reconocido.
  - `addError(type: Type, lexeme: string, row: number, column: number)`: registra errores léxicos.

## Funcionamiento del Analizador

1. El analizador comienza en el estado `0`.
2. Lee carácter a carácter la cadena de entrada.
3. Según el carácter y el estado actual, cambia de estado y acumula caracteres.
4. Cuando se completa un token, se añade a la lista `tokenList`.
5. En caso de caracteres no reconocidos, se genera un error léxico.
6. El análisis finaliza al encontrar el carácter `#`.

## Alfabeto y Tokens Reconocidos

- **Símbolos:** `{`, `}`, `[`, `]`, `:`, `:=`, `=`, `;`, `"`, `(`, `)`
- **Palabras reservadas:** `"Jugador"`, `"salud"`, `"atque"`, `"defensa"`, `"agua"`, `"dragon"`, `"planta"`, `"psiquico"`, `"fuego"`, `"normal"`
- **Números:** secuencia de dígitos
- **Cadenas de texto:** texto encerrado en comillas dobles `"texto"`
- **Errores:** caracteres no definidos o inválidos

## Autómata Finito Determinista (AFD)

El autómata consta de los siguientes estados y transiciones principales:

- Estado `0`: Estado inicial, espera reconocimiento de símbolos, palabras o números.
- Estados terminales: `2` (Llave abre), `3` (Comillas), `4` (Corchete abre), `5` (Corchete cierra), `6` (Asignación `:=`), `7` (Dos puntos), `8` (Igual), `9` (Punto y coma), `10` (Número), `11` (Palabra o cadena de texto), `12` (Llave cierra), `13` (Paréntesis abre), `14` (Paréntesis cierra).

Transiciones representadas en formato Graphviz `.dot` (ver siguiente sección).

## Generación del Diagrama AFD

Se utilizó el lenguaje Graphviz para la generación del siguiente diagrama:

![Diagrama AFD](./afd.png)


## Enumeración `Type` y Clase `Token`

### Enumeración `Type`
Define los diferentes tipos de tokens que el analizador léxico puede identificar, tales como palabras reservadas, cadenas de texto, números, símbolos de puntuación y otros elementos sintácticos.

### Clase `Token`
Representa un token individual con los siguientes atributos:

- **row** y **column**: indican la posición del token en el texto de entrada.
- **lexema**: la cadena de texto exacta reconocida como token.
- **typeToken**: el tipo del token basado en la enumeración `Type`.
- **typeTokenString**: representación en texto del tipo de token para facilitar la depuración y visualización.

Esta clase es fundamental para almacenar y manipular la información lexical de forma estructurada durante el proceso de análisis.

## Construcción de Jugadores desde Tokens

Esta función procesa una lista de tokens generados por el analizador léxico para construir objetos `Jugador`. 

### Resumen del funcionamiento

- Recorre los tokens para identificar la palabra reservada que indica un nuevo jugador.
- Extrae el nombre del jugador y luego sus pokemones asociados.
- Para cada Pokémon, obtiene su nombre, tipo y atributos como salud, ataque y defensa.
- Finalmente, devuelve un arreglo con todos los jugadores construidos, cada uno con su lista de pokemones y sus estadísticas.

Esta función es fundamental para transformar la representación léxica del archivo de entrada en una estructura de datos manejable para la lógica del programa.

## Interfaz Web del Analizador de Pokémons

Se implementó una interfaz web en HTML y Bootstrap para facilitar la interacción del usuario con el analizador léxico y sintáctico de Pokémons y jugadores.

### Funcionalidades principales:

- **Editor de texto**: Área para que el usuario pueda escribir o cargar el código fuente a analizar.
- **Barra de navegación**: Permite acceder a las secciones principales como Home, Reporte de errores y opciones para limpiar, cargar o guardar archivos.
- **Análisis de código**: Al enviar el formulario, el texto es enviado mediante una petición POST al backend para su análisis.
- **Visualización de tokens**: Muestra una tabla con los tokens identificados por el analizador, con información de fila, columna, lexema y tipo de token.
- **Gestión de resultados**: En función de los datos recibidos, se almacenan en el almacenamiento local y se abren ventanas nuevas para mostrar jugadores o errores detectados.
- **Carga y guardado de archivos**: Permite al usuario cargar archivos con extensión `.pklfp` para analizar, y guardar el contenido del editor en archivos con esa misma extensión.
- **Diseño responsivo**: Utiliza Bootstrap para asegurar una buena experiencia en distintos dispositivos.

Esta interfaz mejora la usabilidad del proyecto, facilitando la prueba y visualización del análisis de manera sencilla y organizada.

## Vista de Jugadores y sus Pokémons

Se desarrolló una página web dinámica que muestra la información de los jugadores y sus respectivos Pokémons, usando plantillas de servidor (EJS o similar) y Bootstrap para un diseño responsivo.

### Características principales:

- **Listado de jugadores**: Por cada jugador se muestra su nombre y una tabla con sus Pokémons.
- **Datos mostrados de cada Pokémon**: Imagen, nombre, tipo, salud, ataque, defensa e IVs.
- **Carga dinámica de imágenes**: Las imágenes oficiales de los Pokémons se obtienen mediante llamadas a la API externa de Pokémon, mostrando su artwork oficial.
- **Manejo de errores en carga de imágenes**: Si no se puede cargar una imagen, se muestra un texto alternativo.
- **Interactividad**:
  - Los datos se obtienen idealmente desde el backend y se inyectan en el HTML mediante una plantilla.
  - También se usa `localStorage` para almacenar la información y poder acceder a ella desde esta vista.
- **Navegación fácil**: Botón para regresar al editor principal.

Esta página permite al usuario visualizar de forma clara y atractiva los resultados del análisis, facilitando la revisión de los datos obtenidos del sistema.

## Vista de Errores Léxicos

Esta vista muestra los errores léxicos encontrados durante el análisis del código fuente ingresado por el usuario en el editor principal.

### Descripción de la Funcionalidad:

- Se carga una tabla dinámica con los errores almacenados previamente en `localStorage` bajo la clave `"errores"`.
- Si no hay errores, se muestra un mensaje indicando que no se encontraron errores léxicos.
- Se presentan los siguientes datos por cada error detectado:
  - **#**: Número consecutivo del error.
  - **Fila**: Línea del código donde se encontró el error.
  - **Columna**: Posición exacta en la línea.
  - **Lexema**: Fragmento del código que provocó el error.
  - **Token**: Tipo o clasificación del error léxico (por ejemplo: símbolo no reconocido, carácter inválido, etc.).

### Características Técnicas:

- Se utiliza **Bootstrap 5.3** para la estructura y diseño responsivo de la tabla.
- El contenido se inyecta dinámicamente al cargar la página usando JavaScript puro (`window.onload`).
- La navegación incluye un botón para regresar al editor principal.

### Uso de `localStorage`:

Esta vista depende de que la información de errores ya haya sido guardada previamente en `localStorage`. Si se accede directamente sin haber ejecutado un análisis previo, mostrará la tabla vacía.
