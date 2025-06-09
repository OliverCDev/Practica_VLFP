enum Type{
    PALABRA_RESERVADA,
    CADENA_DE_TEXTO,
    NUMERO,
    DOS_PUNTOS,
    LLAVE_ABRE,
    LLAVE_CIERRA,
    CORCHETE_ABRE,
    CORCHETE_CIERRA,
    STATS_ABRE,
    IGUAL,
    PUNTO_COMA,
    UNKNOW
}


class Token{

    private row: number;
    private colum: number;
    private lexema: string;
    private typeToken: Type;
    
    constructor(typeToken: Type, lexema: string, row: number, colum: number){
        this.row = row;
        this.colum = colum;
        this.lexema = lexema;
        this.typeToken = typeToken;

    }
}
export { Token , Type}