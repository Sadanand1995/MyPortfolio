import Post from "@/models/post.js";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    await connectDB();
    const post = await Post.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("DB Connection Failed", { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;
  try {
    await connectDB();
    const post = await Post.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted.", { status: 200 });
  } catch (error) {
    return new NextResponse("DB Connection Failed", { status: 500 });
  }
};
