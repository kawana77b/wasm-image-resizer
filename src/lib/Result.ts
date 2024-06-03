interface IResult {
  ok: boolean;
}

export type Result<T, U> = Ok<T> | Err<U>;

class Ok<T> implements IResult {
  readonly ok = true;
  readonly value: T;
  constructor(value: T) {
    this.value = value;
  }
}

class Err<U> implements IResult {
  readonly ok = false;
  readonly error: U;
  constructor(error: U) {
    this.error = error;
  }

  throw() {
    throw this.error;
  }
}

export class NewResult {
  static ok<T>(value: T) {
    return new Ok(value);
  }

  static err<U>(error: U) {
    return new Err(error);
  }

  static success(): Ok<true> {
    return new Ok(true);
  }

  static fail(reason: string): Err<Error> {
    return new Err(new Error(reason));
  }
}
