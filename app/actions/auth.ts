"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ROUTES from "@/constants/routes";

export const signOutAction = async () => {
  await auth.api.signOut({
    headers: await headers(),
  });

  redirect(ROUTES.SIGN_IN);
};
