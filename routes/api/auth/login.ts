import { FreshContext, Handlers } from "$fresh/server.ts";
import { prisma } from "../../../utils/prisma.ts";
import * as bcrypt from "bcrypt";
import { create } from "djwt";
import { type Payload } from "djwt";

const JWT_SECRET = Deno.env.get("JWT_SECRET") || "tu-super-secreto-temporal";

async function getKey(): Promise<CryptoKey> {
    const keyData = new TextEncoder().encode(JWT_SECRET);
    return await crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: "SHA-256" },
        true,
        ["sign", "verify"]
    );
}

export const handler: Handlers = {
  async POST(req: Request, _ctx: FreshContext): Promise<Response> {
    try {
      const { mail, contrasenia } = await req.json();

      if (!mail || !contrasenia) {
        return new Response(JSON.stringify({ error: "Faltan campos requeridos." }), { status: 400 });
      }

      const user = await prisma.usuario.findUnique({ where: { mail } });
      if (!user) {
        return new Response(JSON.stringify({ error: "Credenciales inválidas." }), { status: 401 });
      }

      const isPasswordCorrect = await bcrypt.compare(contrasenia, user.contrasenia);
      if (!isPasswordCorrect) {
        return new Response(JSON.stringify({ error: "Credenciales inválidas." }), { status: 401 });
      }
      
      const key = await getKey();
      const payload: Payload = {
        iss: "pcfix-api",
        sub: user.idUsuario.toString(),
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24), // Expira en 24 horas
        rol: user.rol,
      };

      const jwt = await create({ alg: "HS256", typ: "JWT" }, payload, key);
      
      const { contrasenia: _, ...userToReturn } = user;

      return new Response(JSON.stringify({ user: userToReturn, token: jwt }), { status: 200 });

    } catch (error) {
      console.error("Error en el login:", error);
      return new Response(JSON.stringify({ error: "Error interno del servidor." }), { status: 500 });
    }
  },
};

