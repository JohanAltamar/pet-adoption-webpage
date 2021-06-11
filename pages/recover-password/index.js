import { useState } from "react";
import { toast } from "react-toastify";

import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import InputField from "../../components/ui/Input";
import Title from "../../components/ui/Title";
import { passwordRecovery } from "../../utils/api/passwords";
import isEmailValid from "../../utils/helpers/isEmailValid";

const PasswordRecoveryPage = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePasswordRecovery = async (ev) => {
    setLoading(true);
    try {
      const { ok } = await passwordRecovery(ev, email);
      if (ok) setEmailSent(true);
    } catch (error) {
      toast.error(error.toString(), {
        position: "top-center",
        autoClose: false,
      })
    }
    setLoading(false);
  }

  return (
    <Container className="bg-gray-50 py-5">
      <form
        className="bg-white p-8 max-w-sm m-auto rounded-lg shadow-lg"
        onSubmit={handlePasswordRecovery}
      >
        <Title align="center">Recupera tu contraseña</Title>
        <InputField
          name="email"
          label="Correo Electrónico"
          type="email"
          defaultValue={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="example@gmail.com"
          required
        />
        <div className="flex justify-between">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            rounded="lg"
            disabled={loading || emailSent || !isEmailValid(email)}
          >
            Enviar
          </Button>
          {emailSent && (
            <Button
              type="submit"
              className="ml-4"
              variant="outlined"
              color="primary"
              rounded="lg"
              disabled={loading}
            >
              Reenviar Correo
            </Button>
          )}
        </div>
      </form>
    </Container>
  );
};

export default PasswordRecoveryPage;
