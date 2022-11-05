export interface AuthorizationDto {
  grant_type: string;
  code: string;
  redirect_uri: string;
  client_id: string;
  code_verifier: string;
}

export interface AuthorizationSuccess {
  access_token: string;
  token_type: string;
  scope: string;
  expire_in: bigint;
  refresh_token: string;
}

export function isAuthorizationSuccess(data: unknown): data is AuthorizationSuccess {
  return (
    (data as AuthorizationSuccess).access_token !== undefined &&
    (data as AuthorizationSuccess).refresh_token !== undefined &&
    (data as AuthorizationSuccess).token_type !== undefined
  );
}
