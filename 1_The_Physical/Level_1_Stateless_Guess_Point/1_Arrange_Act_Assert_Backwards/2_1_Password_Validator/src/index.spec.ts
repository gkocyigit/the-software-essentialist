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

  })
})


