// api/index.js - Vercel serverless function for Express + Socket.io chat
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Initialize Express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.json());

// Store connected users and messages
const users = {};
const messages = [];
const typingUsers = {};

// Socket.io connection handler
// Note: For Vercel, we need a different approach using websockets
// This basic server works for local testing and some deployment scenarios

// API routes
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.get('/api/users', (req, res) => {
  res.json(Object.values(users));
});

// Root route
app.get('/api', (req, res) => {
  res.json({ status: 'Socket.io Chat Server is running' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = app;
