# Manual del Usuario Final

Bienvenido a la aplicación de análisis de jugadores y Pokémons. Este sistema te permite cargar un archivo con información, visualizar a los jugadores con sus respectivos Pokémons y detectar errores léxicos en caso de que existan problemas en los datos.

## 🏠 Página Principal - Editor

Al ingresar a la aplicación, verás un editor donde puedes pegar o cargar contenido en formato especial (probablemente un lenguaje estructurado con jugadores y Pokémons).

### Opciones disponibles:

- **Botón "Analizar"**: Envía el contenido para ser procesado.
- **Botón "Descargar archivo"**: Guarda el contenido escrito en un archivo `.pklfp`.
- **Botón "Cargar archivo"**: Permite seleccionar un archivo `.pklfp` desde tu computadora para cargarlo al editor.

---

## 📋 Resultados del Análisis

Luego de hacer clic en “Analizar”, el sistema procesará el contenido y dependiendo del resultado, te mostrará una de estas dos páginas:

### ✅ Página de Jugadores y Pokémons

- Verás una tabla para cada jugador.
- Cada tabla muestra:
  - Imagen oficial del Pokémon.
  - Nombre del Pokémon.
  - Tipo (agua, fuego, eléctrico, etc.).
  - Estadísticas: Salud, Ataque, Defensa, IVs.

- Al final de la página, hay un botón **“Volver al Editor”** para regresar y cargar nuevo contenido.

---

### ⚠️ Página de Errores Léxicos

Si el contenido tiene errores de formato, se mostrará una tabla con los errores detectados.

Cada error incluye:
- **#**: Número del error.
- **Fila**: Línea donde se encuentra el error.
- **Columna**: Posición en la línea.
- **Lexema**: Fragmento de texto con problema.
- **Token**: Descripción del tipo de error (ej. COMILLAS).

Si no hay errores, se mostrará un mensaje indicando que no se encontraron errores léxicos.

---

## ℹ️ Recomendaciones

- Asegúrate de que el archivo o contenido que cargas esté correctamente estructurado.
- En caso de errores léxicos, verifica la línea y el carácter que lo provoca.