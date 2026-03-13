import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const apiKey = process.env.FOLK_API_KEY;
    if (!apiKey) {
      console.error("FOLK_API_KEY is not set");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch("https://api.folk.app/v1/people", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        emails: [email],
        description: "Contact form submission — steadythreadmedia.com",
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Folk API error:", response.status, error);
      return NextResponse.json({ error: "Failed to save contact" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
