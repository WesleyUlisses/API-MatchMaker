import { Request, Response, NextFunction } from 'express';

export class ErrorHandler {
    static handle(err: Error, req: Request, res: Response): void {
        const statusCode = res.statusCode === 200 ? 500 : res.statusCode; // Status 500 se nenhum foi definido

        res.status(statusCode);
        res.json({
            message: err.message,
            stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
        });
    }
}
