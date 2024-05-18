import type { PageParams } from "~/@types/router";

function Page({ params }: PageParams<{ entityId: string }>) {
  console.log(params);

  return "Hello World";
}

export default Page;
