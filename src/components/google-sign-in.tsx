import { Button } from "@/components/ui/button";
import { Google } from "@/components/ui/google";
import { signIn } from "@/lib/auth";

const GoogleSignIn = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button className="w-full" variant="outline">
        <Google />
        Continue with Google
      </Button>
    </form>
  );
};

export { GoogleSignIn };
