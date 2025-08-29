import { useTRPC } from "@/trpc/client";

const Page = () => {
  const trpc = useTRPC ();
  trpc.hello.queryOptions({ text: "Hello! "});
  return (
    <div>
      Heloo World
    </div>
  );
}

export default Page; 