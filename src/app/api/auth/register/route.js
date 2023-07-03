import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import userModel from "@/models/user";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connectDB();
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new userModel({
    name,
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User has been Created", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
