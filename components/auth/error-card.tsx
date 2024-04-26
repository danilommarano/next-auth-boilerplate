import { Header } from "./header";
import { BackButton } from "./back-button";

import { Card, CardFooter, CardHeader } from "../ui/card";
import { CardWrapper } from "./card-wrapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Opa! Alguma coisa deu errado!"
      backButtonHref="/auth/login"
      backButtonLabel="Fazer login"
    />
  );
};

export default ErrorCard;
