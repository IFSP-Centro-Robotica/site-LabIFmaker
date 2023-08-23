import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  const data = fs.readFileSync("./src/db/login.json", "utf8");
  const jsonData = JSON.parse(data);

  return NextResponse.json(jsonData);
}

export async function POST(request: NextRequest) {
  const { name, password } = await request.json();

  console.log(name, password);

  if (!name || !password)
    return NextResponse.json({
      status: 400,
      statusText: "Bad Request",
    });

  const readLogin = await fs.readFileSync("./src/db/login.json", "utf8");
  const jsun = JSON.parse(readLogin);

  const newData = [...jsun, { name, password: bcrypt.hashSync(password, 8) }];

  fs.writeFileSync("./src/db/login.json", JSON.stringify(newData, null, 2));

  return NextResponse.json({
    status: 200,
    body: "Usuário criado com sucesso!",
  });
}
