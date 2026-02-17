import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export default async function getAccessToken(): Promise<string> {
  // Obtém os dados do token no banco
  const tokenData = await prisma.accessToken.findFirst();

  if (!tokenData || !tokenData.token || !tokenData.refreshToken) {
    throw new Error("Access token ou refresh token ausente no banco de dados");
  }

  const now = new Date();

  if (tokenData.expiresAt && new Date(tokenData.expiresAt) > now) {
    // Token ainda é válido, retorna o token atual
    console.log("Token ainda válido, retornando o token atual.");
    return tokenData.token;
  }

  console.log("Token expirado. Renovando...");

  // Faz a requisição para renovar o token
  const response = await fetch("https://api.rd.services/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      grant_type: "refresh_token",
      client_id: process.env.RD_CLIENT_ID,
      client_secret: process.env.RD_CLIENT_SECRET,
      refresh_token: tokenData.refreshToken,
    }),
  });

  if (!response.ok) {
    console.error("Erro ao renovar o token.");
    const error = await response.json();
    throw new Error(`Erro ao renovar o token: ${error.message}`);
  }

  const tokens: TokenResponse = await response.json();

  // Calcula o novo expiresAt
  const expiresAt = new Date(Date.now() + tokens.expires_in * 1000);

  // Atualiza os tokens no banco de dados
  await prisma.accessToken.update({
    where: { id: tokenData.id },
    data: {
      token: tokens.access_token,
      refreshToken: tokens.refresh_token,
      expiresAt,
    },
  });

  console.log("Novo token salvo com sucesso no banco de dados.");
  return tokens.access_token;
}
