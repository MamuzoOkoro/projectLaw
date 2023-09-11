import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const viewInterpretation = async (req: Request, res: Response) => {
  try {
    return res.status(200).json({
      message: "Error viewing interpretation",
      data: "",
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error viewing interpretation",
      data: error,
    });
  }
};
