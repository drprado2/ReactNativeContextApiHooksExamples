interface SignInResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

function signIn(): Promise<SignInResponse> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asddasdasd1541asd541ads564s1da56a4s1d65d1s',
        user: {
          name: 'Adriano',
          email: 'drprado2@gmail.com',
        },
      });
    }, 2000);
  });
}

const authService = {
  signIn,
};

export default authService;
