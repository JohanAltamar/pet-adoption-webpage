import { signIn } from "next-auth/client";
import { toast } from "react-toastify";
import translations from "../../i18n";

const login = async ev => {
  ev.preventDefault();
  const loginCredentials = { identifier: "", password: "" };

  Object.keys(loginCredentials).map(
    key => (loginCredentials[key] = ev.target[key].value),
  );

  const data = await signIn("credentials", {
    redirect: false,
    callbackUrl: "/dashboard",
    ...loginCredentials,
  });

  const { error } = data;

  if (error) {
    toast.error(translations[error.toString()], {
      autoClose: 10000,
      position: "top-center",
    });
  }
};

export default login;
