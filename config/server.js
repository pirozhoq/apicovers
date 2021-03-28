module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  url: 'http://18.195.97.9',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
