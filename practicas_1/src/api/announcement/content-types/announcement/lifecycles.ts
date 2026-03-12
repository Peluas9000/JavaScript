import { errors } from "@strapi/utils";

const { ApplicationError } = errors;

// Función auxiliar para limpiar el título: sin números, sin espacios extra y Capitalizada
const cleanTitleBase = (title: string): string => {
  const noNumbers = title.replace(/[0-9]/g, ""); // Quita números
  const trimmed = noNumbers.trim(); // Quita espacios inicio/fin
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
};

// Función para generar slug básico
const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Espacios por guiones
    .replace(/[^\w\-]+/g, "") // Quitar caracteres especiales
    .replace(/\-\-+/g, "-"); // Quitar guiones dobles
};

export default {
  async beforeCreate(event) {
    const { data } = event.params;

    if (data.title) {
      // 1. Limpieza y Capitalización
      data.title = cleanTitleBase(data.title);
      // 2. Generar Slug
      data.slug = generateSlug(data.title);
    }
  },

  async afterCreate(event) {
    const { result } = event;
    // Simulación de email con datos del registro
    console.log(`\n--- 📧 Simulating email: new announcement created ---`);
    console.log(`Message: ${result.message || "No message provided"}\n`);
  },

  async beforeUpdate(event) {
    const { data, where } = event.params;

    // Buscamos el registro actual para comparar y obtener el contador previo
    const existingEntity = await strapi
      .documents("api::announcement.announcement")
      .findFirst({
        filters: { id: where.id },
      });

    if (!existingEntity) return;

    if (data.title && data.title !== existingEntity.title) {
      // 1. Limpiar (sin números, sin espacios)
      let cleaned = data.title.replace(/[0-9]/g, "").trim();

      // 2. Convertir TODAS a mayúsculas (Requisito del ejercicio para Update)
      data.title = cleaned.toUpperCase();

      // 3. Regenerar Slug
      data.slug = generateSlug(data.title);

      // 4. Aumentar contador
      data.updateCount = existingEntity.updateCount + 1;
    }
  },

  async afterUpdate(event) {
    console.log(`\n--- 📧 Simulating email: announcement updated ---`);
  },
};
