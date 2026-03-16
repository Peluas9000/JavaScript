export default {
  routes: [
    {
      method: "GET",
      path: "/reports/announcements-summary",
      handler: "report.getSummary",
      config: {
        auth: false, // Ajustar según necesidad de seguridad
      },
    },
  ],
};
