import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, phone, position, experience, portfolio, message } = body;

    if (!name || !email || !phone || !position) {
      return NextResponse.json(
        { error: "Name, email, phone, and position are required." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const contactEmail = process.env.CONTACT_EMAIL || "abhilashlilhore1729@gmail.com";

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #011542; border-bottom: 2px solid #0d4bb8; padding-bottom: 8px;">
          New Job Application - KODY Works Website
        </h2>
        <table style="margin-top: 20px; border-collapse: collapse;">
          <tr><td style="padding: 6px 12px; font-weight: bold;">Full Name:</td><td style="padding: 6px 12px;">${name}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Email:</td><td style="padding: 6px 12px;">${email}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Phone:</td><td style="padding: 6px 12px;">${phone}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Position Applied For:</td><td style="padding: 6px 12px;">${position}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Experience:</td><td style="padding: 6px 12px;">${experience || "N/A"}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Portfolio/LinkedIn:</td><td style="padding: 6px 12px;">${portfolio || "N/A"}</td></tr>
        </table>
        <p style="margin-top: 20px; font-weight: bold; color: #011542;">Cover Letter / Additional Information:</p>
        <p style="margin-top: 8px; padding: 12px; background: #f8fbff; border-left: 4px solid #0d4bb8;">
          ${message || "N/A"}
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "KODY Works <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `Job Application: ${position}`,
      html,
      text: `Full Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPosition: ${position}\nExperience: ${experience || "N/A"}\nPortfolio: ${portfolio || "N/A"}\nMessage: ${message || "N/A"}`,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send application." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Job application error:", error);
    return NextResponse.json(
      { error: "Failed to send application." },
      { status: 500 }
    );
  }
}
