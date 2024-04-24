import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-muted">
      <div className="flex flex-col gap-6 text-center">
        <h1 className="text-6xl font-semibold text-foreground drop-shadow-md">
          🔒 Auth
        </h1>
        <p className="text-foreground text-lg">
          Um serviço de autenticação símples!
        </p>
        <LoginButton>
          <Button variant="default">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
