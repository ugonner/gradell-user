import { Response } from "express";
import { IGenericResponse } from "../typings/api-response.typings";
import { HttpStatus } from "../enums/httpstatus.enum";

export class ApiResponse {
    static success<T>(message: string, data: T, statusCode?: HttpStatus): IGenericResponse<T> {
        return {
            message,
            status: "Success",
            statusCode: statusCode ? statusCode : HttpStatus.OK,
            data
        }
    }
    static error(message: string, error: unknown, statusCode?: HttpStatus): IGenericResponse<unknown> {
        return {
            message,
            status: "Error",
            statusCode: statusCode ? statusCode : HttpStatus.BAD_REQUEST,
            error
        }
    }

    static httpResponse(res: Response, data: IGenericResponse<unknown>){
        res.status(data.statusCode).json(data);
    }
}