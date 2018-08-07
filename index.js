import express from 'express';

const port = process.env.PORT || 3088; // port which server runs on
const app = express(); // init express

app.listen(port, () => {
  console.log('Server running on port', port);
});
export default app;
