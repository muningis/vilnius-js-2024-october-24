import { useState } from "react";

export const experimental_ppr = "false";
export const revalidate = false;
export const dynamic = 'force-dynamic'
export const dynamicParams = true;
export const fetchCache = "force-no-store";
export const runtime = "nodejs";
export const preferredRegion = "home";
export const maxDuration = 5;


export default async function Page() {
  useState();
  return null;
}
