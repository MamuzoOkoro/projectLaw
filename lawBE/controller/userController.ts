import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const viewInterpretations = async (req: Request, res: Response) => {
  try {
    const { lawID } = req.params;
    const interpretation = await prisma.lawModel.findUnique({
      where: { id: lawID },
    });

    return res.status(200).json({
      message: "Error viewing interpretation",
      data: interpretation,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error viewing interpretation",
      data: error,
    });
  }
};
export const viewOneInterpretation = async (req: Request, res: Response) => {
  try {
    const { userID, lawID } = req.params;
    const user = await prisma.authModel.findUnique({
      where: { id: userID },
    });

    if (user) {
      const view = await prisma.lawModel.findUnique({
        where: { id: lawID },
      });
      if (view) {
        return res.status(200).json({
          message: `Currently viewing ${user?.name}'s interpretation`,
          data: view,
        });
      } else {
        return res.status(404).json({
          message: "Invalid User",
        });
      }
    } else {
      return res.status(404).json({
        message: "Invalid User",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error viewing single interpretation",
      data: error,
    });
  }
};
