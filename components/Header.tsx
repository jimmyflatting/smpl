import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./ui/modeToggle";
import Container from "./ui/container";
import ProfileSettings from "./ProfileSettings";
import Login from "./ui/login";

export default function Header() {
  const auth = true;

  return (
    <header className="py-2 border-b mb-5">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <div className="logo">
            <Link href={"/"}>
              <h1 className="text-3xl">smpl</h1>
            </Link>
          </div>
          <nav className="flex items-center gap-4">
            <Button asChild variant={"outline"}>
              <p>Wallet: $100</p>
            </Button>
            <ModeToggle />
            {auth ? <ProfileSettings /> : <Login />}
          </nav>
        </div>
      </Container>
    </header>
  );
}
