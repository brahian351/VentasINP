import connectionPool from "@/config/db";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const Usuario = searchParams?.get("Usuario");
  const Pass = searchParams?.get("Pass");

  const [user] = await connectionPool.query("SELECT * FROM usuarios");

  console.log("user", user);
}
