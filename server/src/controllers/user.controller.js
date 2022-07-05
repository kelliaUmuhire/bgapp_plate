import { User, validateUser } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err.toString());
  }
}

export async function addUser(req, res) {
  try {
    let { error } = validateUser(req.body);
    if (error) return res.status(400).send(error);

    let _extUser = await User.findOne({ email: req.body.email });
    if (_extUser)
      return res.status(400).send({ message: "Email already taken" });

    const user = await User.create({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    res.status(201).send({ message: "User registered!", user });
  } catch (err) {
    res.status(500).send(err.toString());
  }
}

export async function signIn(req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (!user) res.status(404).send({ message: "User not found!" });

    let passwordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordValid)
      return res.status(400).send({ message: "Invalid password!" });

    let token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.TOKEN_KEY,
      { expiresIn: 86400 }
    );

    res.status(200).send({ token, user });
  } catch (err) {
    res.status(500).send({ error: err.toString() });
  }
}

export async function updateUser(req, res) {
  try {
    let user = await User.findById(req.params.id);

    if (req.body.username) user.username = req.body.username;
    if (req.body.password)
      user.password = bcrypt.hashSync(req.body.password, 8);

    await user.save();

    res.status(200).send(user);
  } catch {
    res.status(404).send({ message: "User not found!" });
  }
}

export async function getUser(req, res) {
  try {
    let user = await User.findById(req.params.id);

    res.status(200).send(user);
  } catch {
    res.status(404).send({ message: "User not found!" });
  }
}

export async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "User deleted" });
  } catch {
    res.status(404).send({ message: "User not found!" });
  }
}
