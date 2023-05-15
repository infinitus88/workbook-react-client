export type RootState = {
  auth: {
    userData: {
      username: string,
      email: string
    },
    verifCode: string,
    accessToken: string,
    isAuthenticated: boolean
  };
};