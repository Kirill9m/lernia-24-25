import { prisma } from '../prisma/prisma-client.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

/**
 * 
 * @route POST /api/users
 * @description Login a user
 * @access Private
 */
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await prisma.user.findFirst({
      where: {
        email,
      }
    });

    const isPasswordValid = user && (await bcrypt.compare(password, user.password));

    if (user && isPasswordValid && process.env.JWT_SECRET) {
      res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' }),
      });
    } else {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in user' });
  }
}

/**
 * 
 * @route POST /api/users/register
 * @description Register a new user
 * @access Private
 */
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required' });
    }

    const registeredUser = await prisma.user.findFirst({
      where: {
        email,
      }
    });

    if (registeredUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    });


    if (newUser && process.env.JWT_SECRET) {
      res.status(201).json({
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        token: jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' }),
      });
    } else {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error registering user' });
  }
}

/**
 * 
 * @route GET /api/users/current
 * @description Get current user
 * @access Private
 */
const current = async (req, res) => {
  return res.status(200).json(req.user);
}

export { login, register, current };