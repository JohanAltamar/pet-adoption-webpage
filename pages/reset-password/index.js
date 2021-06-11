import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Button from "../../components/ui/Button";
import { resetPassword } from "../../utils/api/passwords";
import { resetPasswordCase as isButtonDisabled } from "../../utils/helpers/isButtonDisabled";
import { toast } from "react-toastify";
import Title from "../../components/ui/Title";
import Container from "../../components/ui/Container";
import InputField from "../../components/ui/Input";

const initialPass = {
  newPass: "",
  confirmedPass: "",
};

const ResetPasswordPage = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [passwords, setPasswords] = useState(initialPass);
  const [passChanged, setPassChanged] = useState(false);
  const [email, setEmail] = useState("");

  const handleInputChange = ({ target }) => {
    setPasswords({ ...passwords, [target.name]: target.value });
  };

  const handlePasswordChange = async ev => {
    ev.preventDefault();
    setLoading(true);
    
    try {
      const email = await resetPassword({
        code: query.code,
        password: newPass,
        passwordConfirmation: confirmedPass,
      });

      setEmail(email);
      setLoading(false);
      setPassChanged(true);
    } catch (error) {
      setLoading(false);
      // console.log(error);
      toast.error(error.toString(), {
        autoClose: 10000,
        position: "top-center",
      });
    }
  };

  return (
    <Container className="bg-gray-50 py-5">
      <form
        className="bg-white p-8 max-w-sm m-auto rounded-lg shadow-lg"
        onSubmit={handlePasswordChange}
      >
        <Title align="center">Cambia la Contraseña</Title>
        <InputField
          label="Contraseña"
          value={passwords.newPass}
          name="newPass"
          type="password"
          required
          placeholder="Contraseña nueva"
          onChange={handleInputChange}
          disabled={passChanged}
        />
        <InputField
          label="Confirma la Contraseña"
          value={passwords.confirmedPass}
          name="confirmedPass"
          type="password"
          required
          placeholder="Confirma la Contraseña"
          onChange={handleInputChange}
          disabled={passChanged}
        />
        {!passChanged ? (
          <Button
            variant="contained"
            color="primary"
            rounded="lg"
            disabled={
              isButtonDisabled(passwords.newPass, passwords.confirmedPass) ||
              loading ||
              passChanged
            }
          >
            Cambiar Contraseña
          </Button>
        ) : (
          <Link href={`/login?email=${email}`}>
            <a>
              <Button
                variant="outlined"
                color="primary"
                rounded="lg"
                type="button"
              >
                Inicia Sesión
              </Button>
            </a>
          </Link>
        )}
      </form>
    </Container>
  );
};

export default ResetPasswordPage;
