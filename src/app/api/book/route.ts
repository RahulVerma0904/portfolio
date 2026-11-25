import { NextRequest, NextResponse } from "next/server";

/**
 * Booking API route stub.
 * TODO: Connect to email service (Resend, Nodemailer, etc.)
 *
 * This stub validates the request and returns a success response.
 * Replace with actual email sending logic.
 */

interface BookingRequest {
  name: string;
  email: string;
  message: string;
  date: string;
  time: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.date || !body.time) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, date, and time are required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    // TODO: Send email notification using Resend or Nodemailer
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@yourdomain.com>',
    //   to: 'Abdallaelsiddig.m@gmail.com',
    //   subject: `New Booking: ${body.name} - ${body.date} at ${body.time}`,
    //   html: `
    //     <h2>New Booking Request</h2>
    //     <p><strong>Name:</strong> ${body.name}</p>
    //     <p><strong>Email:</strong> ${body.email}</p>
    //     <p><strong>Date:</strong> ${body.date}</p>
    //     <p><strong>Time:</strong> ${body.time}</p>
    //     <p><strong>Message:</strong> ${body.message || 'No message'}</p>
    //   `,
    // });

    console.log("Booking request received:", {
      name: body.name,
      email: body.email,
      date: body.date,
      time: body.time,
      message: body.message,
    });

    return NextResponse.json({
      success: true,
      message: `Booking confirmed for ${body.date} at ${body.time}. Rahul will reach out to confirm.`,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process booking request." },
      { status: 500 }
    );
  }
}
