import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const replyComment = async (req: Request, res: Response) => {
  try {
    const { reply } = req.body;
    const { userID, commentID } = req.params;
    const user = await prisma.authModel.findUnique({
      where: { id: userID },
    });
    const comment = await prisma.commentModel.findUnique({
      where: { id: commentID },
      include: { reply: true },
    });
    if (user && comment) {
      const replied = await prisma.replyModel.create({
        data: {
          reply,
          commentID,
        },
      });
      comment.reply.push(replied);
      return res.status(201).json({
        message: "reply created",
        data: replied,
      });
    } else {
      return res.status(404).json({
        messsage: "Error",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "error",
    });
  }
};

export const viewAllReplies = async (req: Request, res: Response) => {
  try {
    const { userID, commentID } = req.params;
    const user = await prisma.authModel.findUnique({
      where: {
        id: userID,
      },
    });
    const comment = await prisma.commentModel.findUnique({
      where: {
        id: commentID,
      },
    });

    if (user && comment) {
      const reply = await prisma.replyModel.findMany({});

      return res.status(201).json({
        message: "All replies to comment gotten",
        data: reply,
      });
    } else {
      return res.status(401).json({
        message: "Error viewing all replies to comment",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "error",
    });
  }
};
export const deleteReply = async (req: Request, res: Response) => {
  try {
    const { userID, replyID } = req.params;

    const user = await prisma.authModel.findUnique({
      where: { id: userID },
    });

    const replied = await prisma.commentModel.findUnique({
      where: {
        id: replyID,
      },
    });

    if (user?.id === replied?.userID) {
      await prisma.replyModel.delete({
        where: { id: replyID },
      });
      return res.status(201).json({
        message: "Your reply was deleted",
      });
    } else {
      return res.status(404).json({
        message: "na you comment am?",
      });
    }
  } catch (error) {
    return res.status(404).json({ message: "error deleting comment" });
  }
};
