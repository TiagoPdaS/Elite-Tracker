import express from 'express';

const app = express();

app.get('/', (req,res) => {
   return res.send('Hello World!');
});

app.listen(4000, () => console.log('🚀🚀 Server Running at Port 4000 !! 🚀🚀'));