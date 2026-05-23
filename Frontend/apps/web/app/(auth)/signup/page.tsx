import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <div className="rounded-3xl border bg-card p-8 shadow-sm">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Create your account
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Start building your secure financial workspace.
        </p>
      </div>

      <form className="mt-8 space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full name</label>
          <Input type="text" placeholder="MANZI RURANGIRWA Elvis" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input type="email" placeholder="name@example.com" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Password</label>
          <Input type="password" placeholder="Create a strong password" />
        </div>

        <Button className="w-full">
          Create account
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-foreground hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}