import {PrismaClient} from  "@prisma/client"

const prisma = new PrismaClient();

export const createPhone = async (req,res) => {
  try{
    const {} = req.body
  }
  catch(err){
    res.status(500).json({success:true, message:"server Failed"})
  }
}

