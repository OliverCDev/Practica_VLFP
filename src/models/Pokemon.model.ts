class Pokemon{
    name: string;
    type: string;
    health: number;
    attack: number;
    defense: number;
    ivs: number;
    urlImg: string;

    constructor(name: string, type: string, health: number, attack: number, defense: number) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.attack = attack;
        this.defense = defense;
        this.ivs = Math.round(((health + attack + defense) / 45) * 100);;
        this.urlImg = `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`;
    }
    getName(): string {
        return this.name;
    }
    getType(): string {
        return this.type;
    }
    getHealth(): number {
        return this.health;
    }
    getAttack(): number {
        return this.attack;
    }
    getDefense(): number {
        return this.defense;
    }
    setName(name: string): void {
        this.name = name;
    }
    setType(type: string): void {
        this.type = type;
    }
    setHealth(health: number): void {
        this.health = health;
    }
    setAttack(attack: number): void {
        this.attack = attack;
    }
    setDefense(defense: number): void {
        this.defense = defense;
    }

    getIvs(): number {
        return this.ivs;
    }

}
export { Pokemon };