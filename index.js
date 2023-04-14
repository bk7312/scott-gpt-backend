import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'

dotenv.config()

const port = 3000
const app = express()

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}))

const allowedOrigins = ['https://scott-gpt.vercel.app/'];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader('Vary', 'Origin');
  next();
});

app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello, this is ScottGPT'
  })
})

app.post('/', async (req, res) => {
    const model = "gpt-3.5-turbo"
    const messages = req.body
  try {
    const response = await openai.createChatCompletion({
      model,
      messages
    })
    res.status(200).send({
      reply: response.data.choices[0].message
    })
  } catch (error) {
    console.log(error)
    res.status(500).send("Something went wrong...")
  }
})

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}`))