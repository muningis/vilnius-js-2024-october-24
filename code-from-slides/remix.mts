// routes/category.$slug.tsx

// OLD
export async function loader({ params }: LoaderFunctionArgs) {
  params; // { readonly [key: string]: string }
  const slug = params.slug as string;
}

export default function Page() {
  const loaderData = useLoader<typeof loader>();
}

// NEW
import type * as Route from "./+types.category.$slug";

export async function loader({ params }: Route.LoaderArgs) {
  params; // { slug: string }
  const slug = params.slug; // no need typecast!
}

export default function Page({ loaderData }: Route.ComponentProps) {
}