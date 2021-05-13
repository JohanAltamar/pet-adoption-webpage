import { useForm } from "react-hook-form";
import { sendMessage } from "../utils/api";

export default function ContactForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data, ev) => {
    console.log(data);
    const res = await sendMessage(data);
    console.log(res);
    ev.target.reset();
  };

  return (
    <div
      className="w-full p-6 px-10 sm:px-16"
      style={{ backgroundColor: "#fbd10d" }}
    >
      <h1 className="text-center text-2xl font-bold mb-6">Contáctanos</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg m-auto"
        id="contacto"
      >
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3 mb-2 md:mb-0">
            <label
              className="block capitalize tracking-wide text-gray-700 text-base font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre completo
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="fullname"
              type="text"
              placeholder="Jane Doe"
              ref={register({ required: true })}
            />
            {errors.fullname && (
              <span className="text-red-700">Este campo es requerido!</span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block capitalize tracking-wide text-gray-700 text-base font-bold mb-2"
              htmlFor="grid-password"
            >
              Correo Electrónico
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              name="email"
              placeholder="example@gmail.com"
              type="email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <span className="text-red-700">Este campo es requerido!</span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full px-3">
            <label
              className="block capitalize tracking-wide text-gray-700 text-base font-bold mb-2"
              htmlFor="grid-password"
            >
              Mensaje
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-30 resize-none"
              name="message"
              placeholder="Escribe tu mensaje aquí ..."
              ref={register({ required: true })}
            ></textarea>
            {errors.message && (
              <span className="text-red-700">Este campo es requerido!</span>
            )}
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-blue-600 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Enviar
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}
