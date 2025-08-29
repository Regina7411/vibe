import { useTRPC } from "@/trpc/client";

const Page = () => {
  const trpc = useTRPC();
  const { data } = trpc.createAI.useQuery({ text: "Hello from the client!" });

  return (
    <div>
      <p>Hello World</p>
      {data && <p>{data.greeting}</p>}
    </div>
  );
};

export default Page;