import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Your own logic for dealing with plaintext password strings; be careful!
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        try {
          // logic to verify if the user exists
          const res = await axios.post(
            "https://stagingapi.simplitaught.com/token/login",
            {
              email: credentials.email,
              password: credentials.password,
            }
          );

          const decodedToken: any = jwtDecode(res.data.token);

          user = decodedToken;
        } catch (error) {
          console.log(error);
          new Error("Invalid email or password. Please try again.");
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
