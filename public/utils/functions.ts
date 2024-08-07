export namespace CustomValidators {
  export function isValidEmail(email: string): boolean {
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');
    return regex.test(email);
  }

  export function isValidPassword(password: string): boolean {
    return <boolean>password && password.trim().length >= 6;
  }

  export function isEqualStrings(first: string, second: string): boolean {
    return first === second;
  }
}
