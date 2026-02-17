import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      // Destructure and type the fields explicitly
      const { name, url, email, pixKey, pixType } = req.body as {
        name: string;
        url: string;
        email: string;
        pixKey: string;
        pixType: string;
      };

      if (!name || !url || !email || !pixKey || !pixType) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const newUserWebsite = await prisma.userWebsite.create({
        data: {
          name,
          url,
          email,
          pixKey,
          pixType,
        },
      });

      res.status(201).json(newUserWebsite);
    } catch (error) {
      console.error("Error creating UserWebsite:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
