import { NextResponse } from "next/server";
import fs from "fs";

export async function GET(request: Request) {
  const data = {
    name: "Exemplo",
  };

  const jsonData = JSON.stringify(data, null, 2);

  const teste = fs.writeFile("./src/db/example.json", jsonData, (err) => {
    if (err) {
      console.error("Erro ao criar o arquivo JSON:", err);
    } else {
      console.log(`Arquivo JSON criado com sucesso `);
    }
  });

  setTimeout(() => {
    console.log(teste);
  }, 1000);

  return NextResponse.json({
    status: 200,
    body: "Hello, world!",
  });
}
