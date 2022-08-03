import { Response } from 'express'

export interface ResponseEntity extends Response {
    json<T>(data?: ModelResponse<T>): any
    send<T>(data?: ModelResponse<T>): any
}

export interface ModelResponse<M> {
    status: number
    message: string
    data: M
}
