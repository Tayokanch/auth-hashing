const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const router = express.Router();

router.post('/register', async (req, res) => {
    const {username, password}= req.body

    const hashing = async()=>{
        const hashedPassword = await bcrypt.hash(password, 12)
    }
    
});

router.post('/login', async (req, res) => {
    
});

module.exports = router;
