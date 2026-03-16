export default {
  routes: [
    {
      method: "GET",
      // La URL final será: /api/announcements/frequently-updated
      path: "/announcements/frequently-updated",
      handler: "announcement.frequentlyUpdated",
      config: {
        auth: false, // O true si quieres restringirlo a usuarios logueados
      },
    },

    {
      method: "POST",
      path: "/announcements/reset-update-count",
      handler: "api::announcement.announcement.resetUpdateCount",
      config: {
        auth: false, // Cámbialo a true si requieres JWT
      },
    },
  ],
};
