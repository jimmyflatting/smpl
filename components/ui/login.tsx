import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./button";
import LoginTab from "./login-tab";

export default function Login() {
  return (
    <>
      <Dialog>
        <Button asChild variant={"default"}>
          <DialogTrigger>Login</DialogTrigger>
        </Button>
        <DialogContent>
          <LoginTab />
        </DialogContent>
      </Dialog>
    </>
  );
}
