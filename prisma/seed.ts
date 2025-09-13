import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const provincias = [
  { idProvincia: 1, nombreProvincia: "Buenos Aires" },
  { idProvincia: 2, nombreProvincia: "Catamarca" },
  { idProvincia: 3, nombreProvincia: "Chaco" },
  { idProvincia: 4, nombreProvincia: "Chubut" },
  { idProvincia: 5, nombreProvincia: "Ciudad Autónoma de Buenos Aires" },
  { idProvincia: 6, nombreProvincia: "Córdoba" },
  { idProvincia: 7, nombreProvincia: "Corrientes" },
  { idProvincia: 8, nombreProvincia: "Entre Ríos" },
  { idProvincia: 9, nombreProvincia: "Formosa" },
  { idProvincia: 10, nombreProvincia: "Jujuy" },
  { idProvincia: 11, nombreProvincia: "La Pampa" },
  { idProvincia: 12, nombreProvincia: "La Rioja" },
  { idProvincia: 13, nombreProvincia: "Mendoza" },
  { idProvincia: 14, nombreProvincia: "Misiones" },
  { idProvincia: 15, nombreProvincia: "Neuquén" },
  { idProvincia: 16, nombreProvincia: "Río Negro" },
  { idProvincia: 17, nombreProvincia: "Salta" },
  { idProvincia: 18, nombreProvincia: "San Juan" },
  { idProvincia: 19, nombreProvincia: "San Luis" },
  { idProvincia: 20, nombreProvincia: "Santa Cruz" },
  { idProvincia: 21, nombreProvincia: "Santa Fe" },
  { idProvincia: 22, nombreProvincia: "Santiago del Estero" },
  { idProvincia: 23, nombreProvincia: "Tierra del Fuego" },
  { idProvincia: 24, nombreProvincia: "Tucumán" },
];

async function main() {
  console.log(`Iniciando siembra de datos...`);

  for (const provincia of provincias) {
    // `upsert` es una operación segura: crea la provincia si no existe,
    // o la actualiza si ya existe (en este caso, no hace nada).
    // Esto permite ejecutar el script múltiples veces sin errores.
    const p = await prisma.provincia.upsert({
      where: { idProvincia: provincia.idProvincia },
      update: {},
      create: provincia,
    });
    console.log(`Creada o actualizada la provincia con id: ${p.idProvincia}`);
  }

  console.log(`Siembra de datos completada.`);
}

main()
  .catch((e) => {
    console.error(e);
    Deno.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
