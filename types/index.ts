export type RootState = {
  auth: {
    userData: {
      username: string,
      email: string
    },
    verifCode: string,
    accessToken: string,
    isAuthenticated: boolean
  },
  user: {
    userData: {
      id: number,
      profileImage: string,
      username: string,
      email: string,
    } | null;
    showGuide: boolean;
    error: string | null;
  }
};