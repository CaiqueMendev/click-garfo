import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User, Phone, Lock } from "lucide-react"; 
import axios from "axios";

const formSchema = z.object({
  email: z.string().email("Insira um e-mail válido."),
  name: z.string().min(4, "Por favor preencha seu nome."),
  phone_number: z.string().optional(),
  password: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres."),
  confirm_password: z.string().min(8, "A confirmação precisa ter no mínimo 8 caracteres."),
}).refine((data) => data.password === data.confirm_password, {
  message: "As senhas não coincidem.",
  path: ["confirm_password"],
});

export function FormRestaurant() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCreated, setIsCreated] = useState("");

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
  setIsLoading(true);
  setIsCreated("");

  try {
    const response = await axios.post("https://api/endpoint", data);

    if (response.status === 200 || response.status === 201) {
      setIsCreated("Restaurante cadastrado com sucesso!");
      form.reset();
    } else {
      setIsCreated("Erro ao cadastrar restaurante.");
    }
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    setIsCreated("Erro ao cadastrar restaurante.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="flex flex-col items-center justify-center mt-40 p-6 lg:p-12 bg-white rounded-2xl shadow-md w-full max-w-md">
      <div className="flex flex-col gap-2 w-full">
        <h1 className="text-start text-black text-3xl font-bold">Cadastre-se</h1>
        <p className="text-sm lg:text-base text-gray-700">
          Cadastre o seu restaurante preenchendo os campos abaixo.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 w-full space-y-4">
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
            Nome do Restaurante
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1 focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
            <input
              id="name"
              type="text"
              placeholder="Ex: Restaurante Sabor & Arte"
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

        {/* Confirmar Senha */}
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
            className="w-full cursor-pointer bg-[#E67E22] text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-[#cf6a1c]"
          >
            {isLoading ? "Cadastrando..." : "Cadastrar-se"}
          </button>
          {isCreated && (
            <p className="text-sm text-green-600 text-center mt-2">{isCreated}</p>
          )}
        </div>
      </form>
    </div>
  );
}
