import mongoose from 'mongoose';
const schema=new mongoose.Schema({ userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}, type:{type:String,required:true}, title:{type:String,default:'TCP simulation'}, status:{type:String,enum:['success','timeout','error'],required:true}, details:{type:String,default:''}, payload:{type:String,default:''}, segments:{type:Number,default:0}, createdAt:{type:Date,default:Date.now} });
export default mongoose.model('Simulation',schema);
