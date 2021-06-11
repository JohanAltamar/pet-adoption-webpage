import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import Link from "next/link";

import login from "../../utils/api/auth/login";
import Spinner from "../../components/ui/Spinner";
import Button from "../../components/ui/Button";
import InputField from "../../components/ui/Input";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";
import { loginCase as isButtonDisabled } from "../../utils/helpers/isButtonDisabled";

export default function LoginPage() {
  const [session, loading] = useSession();
  const router = useRouter();

  const [userInfo, setUserInfo] = useState({
    identifier: router.query.email || "",
    password: ""
  });

  useEffect(() => {
    if (session) router.replace("/dashboard");
  }, [session, router]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  return loading ? (
    <Spinner />
  ) : (
    <>
      {!session && (
        <Container className="bg-gray-50 py-5">
          <form
            className="bg-white p-8 max-w-sm m-auto rounded-lg shadow-lg"
            onSubmit={login}
          >
            <Title align="center">Inicia sesión</Title>
            <InputField
              className="first:mt-0"
              value={userInfo.email}
              label="Email"
              name="identifier"
              placeholder="example@gmail.com"
              required
              type="email"
              onChange={handleInputChange}
            />
            <InputField
              label="Contraseña"
              name="password"
              placeholder="Escribe la contraseña"
              required
              type="password"
              onChange={handleInputChange}
            />
            <Link href="/recover-password">
              <a className="block mb-4 underline text-blue-600 hover:text-blue-800">
                ¿Olvidaste la contraseña?
              </a>
            </Link>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              rounded="lg"
              disabled={isButtonDisabled(userInfo.identifier, userInfo.password)}
            >
              Ingresar
            </Button>
          </form>
        </Container>
      )}
    </>
  );
}
