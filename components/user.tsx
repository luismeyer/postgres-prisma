import prisma from "@/lib/prisma";

export async function User() {
  const user = await prisma.users.findUnique({
    where: {
      email: "stey@vercel.com",
    },
  });

  if (!user) {
    return;
  }

  return <div>Unique: {user.name}</div>;
}
