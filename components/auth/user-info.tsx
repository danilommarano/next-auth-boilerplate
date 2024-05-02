import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="w-[600px] shadow-md">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shawdow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate text-xs max-w-[200px] font-mono p-1 rounded-md bg-muted">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shawdow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-xs max-w-[200px] font-mono p-1 rounded-md bg-muted">
            {user?.name}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shawdow-sm">
          <p className="text-sm font-medium">E-mail</p>
          <p className="truncate text-xs max-w-[200px] font-mono p-1 rounded-md bg-muted">
            {user?.email}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shawdow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-xs max-w-[200px] font-mono p-1 rounded-md bg-muted">
            {user?.role}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shawdow-sm">
          <p className="text-sm font-medium">Two Factor Authentication</p>
          <Badge variant={user?.isTwoFactorEnabled ? "success" : "destructive"}>
            {user?.isTwoFactorEnabled ? "Ativado" : "Desativado"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};
