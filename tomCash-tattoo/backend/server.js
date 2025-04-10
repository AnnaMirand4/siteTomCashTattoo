Require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/api/reviews', async (req, res) => {
  try {
    if (!process.env.PLACE_ID || !process.env.GOOGLE_API_KEY) {
      throw new Error('Configuração de ambiente faltando');
    }

    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/details/json',
      {
        params: {
          place_id: process.env.PLACE_ID,
          fields: 'reviews',
          key: process.env.GOOGLE_API_KEY,
          language: 'pt-BR' // Adiciona suporte a português
        },
        timeout: 5000 // Timeout de 5 segundos
      }
    );

    if (!response.data || response.data.status !== 'OK') {
      throw new Error(`API Google respondeu com status: ${response.data?.status || 'no-response'}`);
    }

    const reviews = response.data.result?.reviews || [];
    res.json(reviews);
    
  } catch (error) {
    console.error('Erro detalhado:', {
      message: error.message,
      config: error.config?.params,
      response: error.response?.data
    });
    
    res.status(500).json({ 
      error: 'Erro ao buscar avaliações',
      details: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));