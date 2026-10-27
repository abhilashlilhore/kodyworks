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
    const { name, email, phone, project, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const projectMap: Record<string, string> = {
      web: "Website Development",
      cloud: "Cloud Solutions",
      ai: "AI & Automation",
      remote: "Remote Resources",
      other: "Other",
    };

    const budgetMap: Record<string, string> = {
      "under-5k": "Under $5,000",
      "5k-15k": "$5,000 - $15,000",
      "15k-50k": "$15,000 - $50,000",
      "over-50k": "$50,000+",
      "not-sure": "Not sure yet",
    };

    const contactEmail = process.env.CONTACT_EMAIL || "abhilashlilhore1729@gmail.com";

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #011542; border-bottom: 2px solid #0d4bb8; padding-bottom: 8px;">
          New Inquiry from KODY Works Website
        </h2>
        <table style="margin-top: 20px; border-collapse: collapse;">
          <tr><td style="padding: 6px 12px; font-weight: bold;">Name:</td><td style="padding: 6px 12px;">${name}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Email:</td><td style="padding: 6px 12px;">${email}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Phone:</td><td style="padding: 6px 12px;">${phone || "N/A"}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Project Type:</td><td style="padding: 6px 12px;">${projectMap[project] || project || "N/A"}</td></tr>
          <tr><td style="padding: 6px 12px; font-weight: bold;">Budget:</td><td style="padding: 6px 12px;">${budgetMap[budget] || budget || "N/A"}</td></tr>
        </table>
        <p style="margin-top: 20px; font-weight: bold; color: #011542;">Message:</p>
        <p style="margin-top: 8px; padding: 12px; background: #f8fbff; border-left: 4px solid #0d4bb8;">
          ${message}
        </p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "KODY Works <onboarding@resend.dev>",
      to: [contactEmail],
      subject: "New Inquiry from KODY Works Website",
      html,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nProject: ${projectMap[project] || project || "N/A"}\nBudget: ${budgetMap[budget] || budget || "N/A"}\nMessage: ${message}`,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send message." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
