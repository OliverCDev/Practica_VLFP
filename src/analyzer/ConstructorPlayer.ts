import { Token, Type } from "./Token";
import { Jugador } from "../models/Jugador";
import { Pokemon } from "../models/Pokemon.model";


export function construirJugadores(tokens: Token[]): Jugador[] {
  const jugadores: Jugador[] = [];
  let i: number = 0;

  while (i < tokens.length) {
    const token = tokens[i];

    if (token.getTypeToken() === Type.PALABRA_RESERVADA && token.getLexema() === "Jugador") {
      // Formato esperado: Jugador : "Nombre" {
      if (
        tokens[i + 1].getTypeToken() === Type.DOS_PUNTOS &&
        tokens[i + 2].getTypeToken() === Type.COMILLAS 
      ) {
        const nombreJugador = tokens[i + 3].getLexema();
        const jugador: Jugador = new Jugador(nombreJugador, []);
        i += 4

        while (i < tokens.length && tokens[i].getTypeToken() !== Type.LLAVE_CIERRA) {
          if (
            tokens[i].getTypeToken() === Type.COMILLAS &&
            tokens[i + 1].getTypeToken() === Type.LLAVE_ABRE &&
            tokens[i + 2].getTypeToken() === Type.COMILLAS
          ) {
            const nombrePokemon = tokens[i].lexema.replace(/"/g, "");
            const tipoPokemon = tokens[i + 2].lexema;

            // Verificamos los stats: [salud]=n; [ataque]=n; [defensa]=n;
            const salud = parseInt(tokens[i + 9].lexema);
            const ataque = parseInt(tokens[i + 13].lexema);
            const defensa = parseInt(tokens[i + 17].lexema);

            const pokemon: Pokemon = {
              nombre: nombrePokemon,
              tipo: tipoPokemon,
              salud,
              ataque,
              defensa,
            };

            jugador.pokemons.push(pokemon);

            i += 20; // Avanzar a la siguiente entrada
          } else {
            i++; // Evita bucles infinitos si hay un error
          }
        }

        jugadores.push(jugador);
      }
    }

    i++;
  }

  return jugadores;
}