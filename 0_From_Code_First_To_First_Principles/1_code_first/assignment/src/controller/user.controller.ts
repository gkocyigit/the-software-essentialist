import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from 'express'
import { User } from '../entity/user'
import { UserService } from '../service/user.service'
import { CreateUserDto } from '../dto/create-user.dto'
import { validate } from 'class-validator'
import { ResponseDto } from '../dto/response.dto'
import { ValidationError } from '../error/http-errors'

export class UserController {
    private userService: UserService

    constructor() {
        this.userService = new UserService()
    }

    async create(request: Request, response: Response, next: NextFunction) {
        try {
            const { email, username, firstName, lastName } = request.body

            const createUserDto: CreateUserDto = {
                email,
                username,
                firstName,
                lastName,
            }

            if (await validate(createUserDto)) {
                throw new ValidationError()
            }

            const serviceResponse = this.userService.create(createUserDto)

            const res: ResponseDto = {
                error: undefined,
                data: serviceResponse,
                success: true,
            }

            return res
        } catch (error) {
            const res: ResponseDto = {
                error: error.message,
                data: undefined,
                success: false,
            }
            response.status(error.code).json(res)
        }
    }

    // async edit(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)

    //     const { firstName, lastName, age } = request.body;

    //     const user = await this.userRepository.findOne({
    //         where: { id }
    //     })

    //     if (!user) {
    //         return "unregistered user"
    //     }

    //     user.firstName = firstName
    //     user.lastName = lastName

    //     return this.userRepository.save(user)
    // }

    // async get(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)

    //     const user = await this.userRepository.findOne({
    //         where: { id }
    //     })

    //     if (!user) {
    //         return "unregistered user"
    //     }
    //     return user
    // }
}
