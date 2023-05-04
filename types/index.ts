export type RootState = {
  auth: {
    userData: {
      username: string,
      email: string
    },
    accessToken: string,
    isAuthenticated: boolean
  };
};