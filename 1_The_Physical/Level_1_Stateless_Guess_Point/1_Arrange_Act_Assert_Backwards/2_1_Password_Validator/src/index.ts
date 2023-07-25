export class PasswordValidator{
    static validate(password: string) {

        let isValid = true;
        const errors = [];

        if(!/\d/.test(password)) {
            isValid = false;
            errors.push("Password must contain a number");
        }
        if (password.length < 5 || password.length > 15) {
            isValid = false;
            errors.push("Password must be between 5 and 15 characters");
        }
        return {
            isValid,
            errors,
        }
    }
}