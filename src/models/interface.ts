export interface ApiResult<T> {
  isSuccess: boolean;
  result: T;
  statusCode: number;
  failureReason: string;
  data: object;
}
