import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const shemaLogin = z.object({
  email: z.string().email(),
});

type SignInFormValues = z.infer<typeof shemaLogin>;

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(shemaLogin),
  });

  async function handleSignIn(data: SignInFormValues) {
    try {
      console.log(data);

      toast.success(
        "Enviamos um e-mail para você, verifique sua caixa de entrada",
        {
          action: {
            label: "Reenviar e-mail",
            onClick: () => {
              handleSignIn(data);
            },
          },
        },
      );

      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      toast.error("Ops, algo deu errado", {
        action: {
          label: "Tentar novamente",
          onClick: () => {
            handleSignIn(data);
          },
        },
      });
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="outline" asChild className="absolute right-8 top-8">
          <Link to="/sign-up" className="text-sm text-muted-foreground">
            Novo estabelecimento
          </Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
