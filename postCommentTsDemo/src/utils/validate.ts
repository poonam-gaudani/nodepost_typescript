import { Request, Response, NextFunction } from 'express';

export const validate = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        let validationSchema: any = {}

        if (req.body && Object.keys(req.body).length > 0) validationSchema.body = req.body
        if (req.query && Object.keys(req.query).length > 0) validationSchema.query = req.query
        if (req.params && Object.keys(req.params).length > 0) validationSchema.params = req.params

        await schema.validate(validationSchema);
        return next();
    } catch (err: any) {
        return res.status(500).json({ type: err.name, message: err.message });
    }
};