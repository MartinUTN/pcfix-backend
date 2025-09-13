import { FreshContext, Handlers } from "$fresh/server.ts";
import { prisma } from "../../../utils/prisma.ts";
import * as bcrypt from "bcrypt";

export const handler: Handlers = {
  async POST(req: Request, _ctx: FreshContext): Promise<Response> {
    try {
      const { nombre, apellido, mail, contrasenia } = await req.json();

      if (!nombre || !mail || !contrasenia) {
        return new Response(JSON.stringify({ error: "Faltan campos requeridos." }), { status: 400 });
      }

      const existingUser = await prisma.usuario.findUnique({ where: { mail } });
      if (existingUser) {
        return new Response(JSON.stringify({ error: "El correo electrónico ya está registrado." }), { status: 409 });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(contrasenia, salt);

      const newUser = await prisma.usuario.create({
        data: {
          nombre,
          apellido: apellido || '', // Apellido es opcional
          mail,
          contrasenia: hashedPassword,
        },
      });
      
      const { contrasenia: _, ...userToReturn } = newUser;

      return new Response(JSON.stringify(userToReturn), { status: 201 });
    } catch (error) {
      console.error("Error en el registro:", error);
      return new Response(JSON.stringify({ error: "Error interno del servidor." }), { status: 500 });
    }
  },
};

