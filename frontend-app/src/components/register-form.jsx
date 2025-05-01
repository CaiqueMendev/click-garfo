import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { User, Lock, Mail, Phone } from "lucide-react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState("");

  const formSchema = z
    .object({
      email: z.string().email("Insira um e-mail válido."),
      name: z.string().min(4, "Por favor preencha seu nome."),
      phone_number: z.string().optional(),
      password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
      confirm_password: z
        .string()
        .min(8, "A confirmação precisa ter no mínimo 8 caracteres."),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "As senhas não coincidem.",
      path: ["confirm_password"],
    });

  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      phone_number: "",
      password: "",
      confirm_password: "",
    },
  });

  const onSubmit = async (data) => {
    const { email, name, phone_number, password, confirm_password } = data;
    setIsLoading(true);

    try {
      const response = await axios
        .post("/api/de/caique", {
          email,
          name,
          phone_number,
          password,
          confirm_password,
        })
        .then((res) => res.data);

      console.log("Cadastro feito com sucesso!", response);
      setIsCreated(`Parabéns ${name}, obrigado por escolher a nossa plataforma!`);

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Erro na requisição da API", error);
    }

    setIsLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="bg-white rounded-xl shadow-md w-full max-w-md p-8 border border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800">Cadastre-se</h1>
        <p className="text-sm text-gray-500 mt-1">
          Preencha os campos abaixo para se cadastrar na plataforma.
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <input
                id="email"
                type="email"
                placeholder="exemplo@email.com"
                {...form.register("email")}
                className="flex-1 outline-none text-sm"
              />
              <Mail size={18} className="text-gray-400 ml-2" />
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <input
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                {...form.register("name")}
                className="flex-1 outline-none text-sm"
              />
              <User size={18} className="text-gray-400 ml-2" />
            </div>
          </div>
          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
              Telefone
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <input
                id="phone_number"
                type="tel"
                placeholder="+55 (99) 99999-9999"
                {...form.register("phone_number")}
                className="flex-1 outline-none text-sm"
              />
              <Phone size={18} className="text-gray-400 ml-2" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <input
                id="password"
                type="password"
                placeholder="Crie uma senha"
                {...form.register("password")}
                className="flex-1 outline-none text-sm"
              />
              <Lock size={18} className="text-gray-400 ml-2" />
            </div>
          </div>
          <div>
            <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">
              Confirmar senha
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
              <input
                id="confirm_password"
                type="password"
                placeholder="Repita a senha"
                {...form.register("confirm_password")}
                className="flex-1 outline-none text-sm"
              />
              <Lock size={18} className="text-gray-400 ml-2" />
            </div>
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full cursor-pointer bg-[#E67E22] text-white font-semibold py-2 rounded-lg transition duration-300"
            >
              {isLoading ? "Cadastrando..." : "Cadastrar-se"}
            </button>
            {isCreated && (
              <p className="text-sm text-green-600 text-center mt-2">{isCreated}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
