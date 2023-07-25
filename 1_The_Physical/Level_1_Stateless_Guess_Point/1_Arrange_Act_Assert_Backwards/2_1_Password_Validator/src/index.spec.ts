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

    it("knows that a password is not valid if it is more than 15 characters", () => {
      //Arrange
      //Act
      const result = PasswordValidator.validate("Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1Aa1");
      //Assert
      expect(result.isValid).toBeFalsy();
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it("knows that a password is not valid if it does not contain a number", () => {
      //Arrange
      //Act
      const result = PasswordValidator.validate("AaAaA");
      //Assert
      expect(result.isValid).toBeFalsy();
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it("knows that a password is not valid if it does not contain a uppercase letter", () => {
      //Arrange
      //Act
      const result = PasswordValidator.validate("aaaa1");
      //Assert
      expect(result.isValid).toBeFalsy();
      expect(result.errors.length).toBeGreaterThan(0);
    });

    it.each(["Aaaa1","AaAa1","Aa1Aa1Aa1Aa1Aa1"])
    ("knows that a password is valid if it contains a uppercase letter, a number and lenght is between 5 and 15 like: %s", (pass) => {
      //Arrange
      //Act
      const result = PasswordValidator.validate(pass);
      //Assert
      expect(result.isValid).toBeTruthy();
      expect(result.errors.length).toBe(0);
    });
    
    it.each(["A","a1","Thisisnotavalidpassword","a","_!","thisisnotavalidpassword"])
    ("knows that a password is not valid if it doesn't obey the multiple constraints: like %s",(pass)=>{
      //Arrange
      //Act
      const result = PasswordValidator.validate(pass);
      //Assert
      expect(result.isValid).toBeFalsy();
      expect(result.errors.length).toBeGreaterThan(1);
    });

  })
})


