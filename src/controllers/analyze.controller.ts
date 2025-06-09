import { Request, Response } from "express";
import { LexicalAnalyzer } from "../analyzer/LexicalAnalyzer";


export const analyze = (req: Request, res: Response) => {

    const input = req.body;
    let lexicalAnalyzer: LexicalAnalyzer = new LexicalAnalyzer();

    let tokenList = lexicalAnalyzer.scanner(input);
    let errorList = lexicalAnalyzer.getErroList();

    res.json({
        "tokens": tokenList,
        "errors": errorList
    });
}
