import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { streamUpload } from "../utils/uploadHelper";

const prisma = new PrismaClient();

export const interpretedLaw = async (req: Request, res: Response) => {
  try {
    const { userID } = req.params;
    const { description, title, content } = req.body;
    const { secure_url, public_id }: any = await streamUpload(req);

    const registered = await prisma.authModel.findUnique({
      where: { id: userID }
    });

    if (registered?.role) {
      const law = await prisma.lawModel.create({
        data: {
          description,
          title,
          content,
          image: secure_url,
          imageID: public_id,
        },
      });
      return res.status(201).json({
        message: "created interpretation",
        data: law,
      });
    } else {
      return res.status(404).json({
        message: "cannot parse law",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "cannot parse law",
      data: error.message,
    });
  }
};

export const viewInterpretedLaw = async (req: Request, res: Response) => {
  try {
    const law = await prisma.lawModel.findMany({});
    return res.status(200).json({
      message: "created interpretation",
      data: law,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "cannot view laws",
      data: error.message,
    });
  }
};

export const viewOneInterpretedLaw = async(req:Request, res:Response)=>{
    try {
        const {lawID} = req.params
        const law  = await prisma.lawModel.findUnique({
            where:{id: lawID}
        })

        return res.status(200).json({
            message:"can view one interpretation",
            data: law
        })

    } catch (error:any) {
        return res.status(404).json({
            message: "cannot view one law",
            data: error.message,
          });
    }
}

export const viewLawyerInterpretedLaw= async(req:Request, res:Response)=>{
    try {
        const {userID} =req.params
        
        const user = await prisma.authModel.findUnique({
            where:{id:userID},

        })
        if (user) {
            return res.status(200).json({
                message:"can view a lawyer law's",
                data:user.law
            })
        } else {
            return res.status(404).json({
                message: "lawyer not found",
              }); 
        }
    } catch (error:any) {
        return res.status(404).json({
            message: "cannot view lawyer law's",
            data: error.message,
          });
    }
}

export const updateInterpretedLaw = async(req: Request, res: Response)=>{
    try {
      const {lawID}= req.params
      const{content,description} = req.body
      
      const law = await prisma.lawModel.update({
        where:{id:lawID},
        data:{
            content,description
        }
      })
      return res.status(200).json({
        message:"successfully updated interpretation",
        data:law
      })
    } catch (error:any) {
        return res.status(404).json({
            message: "cannot update interpretation",
            data: error.message,
          });
    }
}

export const deleteInterpretedLaw = async(req:Request, res:Response)=>{
    try {
        const {lawID} =req.params
        const law = await prisma.lawModel.delete({
            where:{id: lawID}
        })
        if (law) {
            return res.status(404).json({
                message: "can delete interpretation",
                data: law
              }); 
        } else {
            return res.status(404).json({
                message: "cannot delete interpretation",
              }); 
        }
    } catch (error:any) {
        return res.status(404).json({
            message: "cannot delete interpretation",
            data: error.message,
          }); 
    }
} 