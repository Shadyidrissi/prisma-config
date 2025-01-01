const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()
const port = 3000

require('dotenv').config()

// Middleware لقراءة بيانات JSON من الطلب
app.use(express.json())

// API لجلب جميع المستخدمين
app.get('/all_users', async (req, res) => {
  try {
    const data = await prisma.user.findMany({})
    console.log("Fetched all users")
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "An error occurred while fetching users" })
  }
})

// API لإضافة مستخدم جديد
app.post('/new_user', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Log the data to make sure it's being passed correctly
    console.log(name, email);

    // Await the result of the prisma user creation
    const data = await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
      // useTransaction: false, // Add this line 
    });

    // Respond with the created user data
    res.status(200).json({
      message: "User created successfully",
      dataCreate: data, // This will now contain the actual user data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});



// تشغيل الخادم
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
