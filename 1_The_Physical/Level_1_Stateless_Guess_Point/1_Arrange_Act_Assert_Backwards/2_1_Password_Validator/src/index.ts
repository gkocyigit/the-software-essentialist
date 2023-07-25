export class PasswordValidator{
    static validate(password: string) {
        return {
            isValid: false,
            errors: ["Password must be at least 5 characters long"]
        }
    }
}