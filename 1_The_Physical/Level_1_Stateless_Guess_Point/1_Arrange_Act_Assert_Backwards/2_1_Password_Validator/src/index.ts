export class PasswordValidator{
    static validate(password: string) {
        return {
            isValid: false,
            errors: []
        }
    }
}