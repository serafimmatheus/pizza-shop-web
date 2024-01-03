import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const schemaRegister = z.object({
  restaurantName: z.string(),
  manegerName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

type SignUpFormValues = z.infer<typeof schemaRegister>;

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(schemaRegister),
  });

  async function handleSignUp(data: SignUpFormValues) {
    try {
      console.log(data);

      //   throw new Error("Ops, algo deu errado");

      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
        },
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      toast.error("Ops, algo deu errado", {
        action: {
          label: "Tentar novamente",
          onClick: () => {
            handleSignUp(data);
          },
        },
      });
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="outline" asChild className="absolute right-8 top-8">
          <Link to="/sign-in" className="text-sm text-muted-foreground">
            Fazer login
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Cadastre-se
            </h1>
            <p className="text-sm text-muted-foreground">
              Seja um parceiro e comece suas vendas!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                id="restaurantName"
                type="text"
                {...register("restaurantName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="manegerName">Seu nome</Label>
              <Input
                id="manegerName"
                type="text"
                {...register("manegerName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu telefone</Label>
              <Input id="phone" type="tel" {...register("phone")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao acessar o painel do parceiro, você concorda com os{" "}
              <Link
                to="/terms"
                className="text-primary underline underline-offset-4"
              >
                termos de uso
              </Link>{" "}
              e{" "}
              <Link
                to="/privacy"
                className="text-primary underline underline-offset-4"
              >
                política de privacidade
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
