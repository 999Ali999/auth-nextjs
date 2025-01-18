import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if (!session) redirect("/sign-in");

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <div className="flex items-center justify-center space-x-2">
          <Image
            src={
              session.user?.image ||
              "https://img.icons8.com/?size=100&id=98957&format=png&color=000000"
            }
            alt="User Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="text-left space-y-1">
            <p className="">{session.user?.email}</p>
            <p className="text-sm text-gray-500">{session.user?.name}</p>
          </div>
        </div>
      </div>

      <SignOut />
    </>
  );
};

export default Page;
