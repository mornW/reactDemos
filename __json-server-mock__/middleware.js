module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "sam" && req.body.password === "123") {
      return res.status(200).json({
        user: {
          token: "222",
        },
      });
    } else {
      return res.status(400).json({ message: "用户名或者密码错误" });
    }
  }
  // 处理ie8下的文件上传
  if ((req.headers["content-type"] || "").startsWith("multipart/form-data")) {
    res.header("content-type", "text/html");
  }
  next();
};
