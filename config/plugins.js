module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_H4Ur4SQfTMYY3vCdysVe2SOabyeS/V7dxx8g6KC",
        apiToken: "IiehpS3jNyx3ogqDbjZvMPL3",
        appFilter: "cms-strapi",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });