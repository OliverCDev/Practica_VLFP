import { Request, Response } from "express";
import { Token } from "../analyzer/Token";

class LexicalAnalyzer{
    private row: number;
    private column: number;
    private auxChar: string;
    private state: number;
    private tokenList: Token[];
    private errorList: Token[];

    constructor() {
        this.row = 1;
        this.column = 1;
        this.auxChar = '';
        this.state = 0;
        this.tokenList = [];
        this.errorList = [];
    }

    scanner(entrada: string){
        entrada +='#';
        let char: string; 

        for(let i: number = 0 ; i < entrada.length; i++){

            
        }

    }
}
