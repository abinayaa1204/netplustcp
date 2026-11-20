import express from 'express';import cors from 'cors';import mongoose from 'mongoose';import dotenv from 'dotenv';import authRoutes from './routes/auth.js';import simulationRoutes from './routes/simulations.js';dotenv.config();
const app=express();app.use(cors({origin:true}));app.use(express.json({limit:'1mb'}));
app.get('/api/health',(req,res)=>res.json({api:'online',mongo:mongoose.connection.readyState===1?'connected':'not connected'}));app.use('/api/auth',authRoutes);app.use('/api/simulations',simulationRoutes);
const port=process.env.PORT||5000;app.listen(port,()=>console.log(`NetPulse TCP API listening on ${port}`));
if(!process.env.MONGO_URI)console.error('MONGO_URI missing: create server/.env from .env.example');else mongoose.connect(process.env.MONGO_URI).then(()=>console.log('MongoDB connected')).catch(e=>console.error('MongoDB connection error:',e.message));
