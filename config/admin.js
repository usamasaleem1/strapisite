module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26254d2d4bea9e0986f97296e106fab4'),
  },
});
