import { Request, Response, NextFunction } from 'express';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

export const validateDTO = (DTOClass: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToClass(DTOClass, req.body);
    validate(dto).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const errorMessages = errors.map(error => Object.values(error.constraints || {})).flat();
        res.status(400).json({ errors: errorMessages });
      } else {
        req.body = dto;
        next();
      }
    });
  };
};
