module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'vozpZrax8lppks1F42XTv1DWbdD4CSnrEGJd5wxaweQ='),
  },
});
