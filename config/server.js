module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', "Tl13efB+DTq6jyT4h3jZ5Q==,Ei/4KdHbXeI0AR1IKV5E4A==,GuQhQCn14e4GBmfZntwfGQ==,aioXJO975/MFOqjZkT5iXw=="),
  },
});
