import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/app/actions/auth";

const Page = async () => {
  const result = await auth.api.getSession({
    headers: await headers(),
  });

  console.log(result);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      {result && result.user.name}
      <form action={signOutAction}>
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  );
};

export default Page;
