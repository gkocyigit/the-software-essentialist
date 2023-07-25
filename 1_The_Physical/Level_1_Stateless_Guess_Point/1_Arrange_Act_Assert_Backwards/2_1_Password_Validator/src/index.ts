export class PasswordValidator{
    static validate(password: string) {
        if (password.length >= 5 && password.length <= 15) {
            return {
                isValid: true,
                errors: []
            }
        }
        return {
            isValid: false,
            errors: ["Password must be at least 5 characters long"]
        }
    }
}