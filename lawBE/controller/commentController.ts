import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const commentOnInterpretation = async (req: Request, res: Response) => {
  try {
    const { userID, lawID } = req.params;
    const { comments } = req.body;
    const user = await prisma.authModel.findUnique({
      where: { id: userID },
    });
    const interpretation = await prisma.lawModel.findUnique({
      where: { id: lawID },
      include: { comments: true },
    });

    if (user && interpretation) {
      const comment = await prisma.commentModel.create({
        data: { comments, lawID, userID },
      });
      interpretation.comments.push(comment);
      return res.status(201).json({
        message: "Your Comment on the Interpretation",
        data: interpretation?.comments,
      });
    } else {
      return res.status(201).json({
        message: "Invalid UserID || LawID to enable your action",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Error commenting on the Interpretation",
      data: error,
    });
  }
};

export const viewInterpretationComment = async (
  req: Request,
  res: Response
) => {
  try {
    const { lawID } = req.params;
    const interpretation = await prisma.lawModel.findUnique({
      where: { id: lawID },
      include: { comments: true },
    });
    return res.status(200).json({
      message: "All Interpretation Comments",
      data: interpretation?.comments,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Error viewing comments",
    });
  }
};

export const deleteTnterpretationComment = async (
  req: Request,
  res: Response
) => {
  try {
    const { userID, commentID } = req.params;

    const user = await prisma.authModel.findUnique({
      where: { id: userID },
    });

    const commented = await prisma.commentModel.findUnique({
      where: {
        id: commentID,
      },
    });

    if (user?.id === commented?.userID) {
      await prisma.commentModel.delete({
        where: { id: commentID },
      });
      return res.status(201).json("comment deleted");
    } else {
      return res.status(404).json({
        message: "na you comment am?",
      });
    }
  } catch (error) {
    return res
      .status(404)
      .json({ message: "error deleting comment", data: error });
  }
};
