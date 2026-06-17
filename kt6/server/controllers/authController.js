const User = require("../models/User");

class AuthController {
  async register(req, res) {
    try {
      const { name, email, password } = req.body;
      
      const user = await User.create({
        name,
        email,
        password
      });
      
      res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  
  async login(req, res) {
    try {
      const { email, password } = req.body;
      
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(404).json({ message: "Пользователь не найден" });
      }
      
      if (user.password !== password) {
        return res.status(401).json({ message: "Неверный пароль" });
      }
      
      res.json({ id: user._id, name: user.name, email: user.email });
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

module.exports = new AuthController();