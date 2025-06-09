import { Pokemon } from "./Pokemon.model";

class Jugador {
    name: string;
    pokemons: Pokemon[];

    constructor(name: string, pokemons: Pokemon[]){
        this.name = name;
        this.pokemons = pokemons;
    }
    getName(): string {
        return this.name;
    }
    getPokemons(): Pokemon[] {
        return this.pokemons;
    }
    setName(name: string): void {
        this.name = name;
    }
    setPokemons(pokemons: Pokemon[]): void {
        this.pokemons = pokemons;
    }
    addPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }
}

export { Jugador};