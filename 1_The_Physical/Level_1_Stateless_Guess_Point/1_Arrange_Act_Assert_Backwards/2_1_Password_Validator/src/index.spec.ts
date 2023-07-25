import {PasswordValidator} from './index';

describe('PasswordValidator', () => {

  describe('validate', () => {
    it("should be defined", () => {
      expect(PasswordValidator.validate).toBeDefined();
    });

    it("should return object indicating if the password is valid or not and the reasoning", () => {
      //Arrange
      //Act
      const result = PasswordValidator.validate("123");
      //Assert
      expect(result.isValid).toBeDefined();
      expect(result.errors).toBeDefined();
    });

    it("knows that a password is not valid if it is less than 5 characters", () => {
      //Arrange
      //Act
      const result = PasswordValidator.validate("Aa1");
      //Assert
      expect(result.isValid).toBeFalsy();
      expect(result.errors.length).toBeGreaterThan(0);
    });

  })
})


