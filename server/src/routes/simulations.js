import {Router} from 'express';import Simulation from '../models/Simulation.js';import auth from '../middleware/auth.js';
const router=Router();router.use(auth);
router.get('/',async(req,res)=>{try{res.json(await Simulation.find({userId:req.user.id}).sort({createdAt:-1}).limit(200));}catch{res.status(500).json({message:'Could not load history'});}});
router.get('/summary',async(req,res)=>{try{const rows=await Simulation.find({userId:req.user.id});res.json({total:rows.length,success:rows.filter(x=>x.status==='success').length,timeouts:rows.filter(x=>x.status==='timeout').length,errors:rows.filter(x=>x.status==='error').length,recent:rows.sort((a,b)=>b.createdAt-a.createdAt).slice(0,5)});}catch{res.status(500).json({message:'Could not load summary'});}});
router.post('/',async(req,res)=>{try{const {type,title,status,details,payload,segments}=req.body;if(!['success','timeout','error'].includes(status))return res.status(400).json({message:'Invalid simulation status'});const row=await Simulation.create({userId:req.user.id,type,title,status,details,payload,segments});res.status(201).json(row);}catch{res.status(500).json({message:'Could not save simulation'});}});
export default router;
