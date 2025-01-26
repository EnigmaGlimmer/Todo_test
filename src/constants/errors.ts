export enum ErrorCategory {
  ENTITY_NOT_FOUND,
  INVALID_REQUEST,
  INTERNAL_ERROR,
  UNAUTHORIZED,
  FORBIDDEN
}

export class ErrorCode {
  private constructor(
    public readonly code: string,
    public readonly message: string,
    public readonly category: ErrorCategory,
  ) {};

  toString() {
    return this.code;
  };

  static readonly EMAIL_NOT_REGISTERED = new ErrorCode(
    "EMAIL_NOT_REGISTERED",
    "This is a not registered",
    ErrorCategory.ENTITY_NOT_FOUND
  );

  static readonly WRONG_LOGIN_CREDENTIALS = new ErrorCode(
    "WRONG_LOGIN_CREDENTIALS",
    "Invalid email or password",
    ErrorCategory.INVALID_REQUEST
  );

  static readonly TASK_NOT_FOUND = new ErrorCode(
    "TASK_NOT_FOUND",
    "There is no task with such that id.",
    ErrorCategory.INVALID_REQUEST
  );

  static readonly DB_CONNECTED_FAILED = new ErrorCode(
    "DB_CONNECTED_FAILED",
    "MongoDB connection failed.",
    ErrorCategory.INTERNAL_ERROR
  );

  static readonly DB_FETCHING_FAILED = new ErrorCode(
    "DB_FETCHING_FAILED",
    "An Error occured in getting data from MongoDB.",
    ErrorCategory.INTERNAL_ERROR
  );

  static readonly DB_ADD_FAILED = new ErrorCode(
    "DB_ADD_FAILED",
    "An error occured in updating data from MongoDB",
    ErrorCategory.INTERNAL_ERROR
  );

  static readonly DB_UPDATE_FAILED = new ErrorCode(
    "DB_UPDATE_FAILED",
    "An error occured in updating data of MongoDB",
    ErrorCategory.INTERNAL_ERROR
  );

  static readonly DB_DELETE_FAILED = new ErrorCode(
    "DB_DELETE_FAILED",
    "An error occured in delete data from MongoDB",
    ErrorCategory.INTERNAL_ERROR
  );
}