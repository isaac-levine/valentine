"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { sendValentineEmail } from "./actions";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full bg-pink-600 hover:bg-pink-700"
      disabled={pending}
    >
      {pending ? "Sending..." : "Send Valentine"}
    </Button>
  );
}

export default function ValentineEmailForm() {
  const [message, setMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    const result = await sendValentineEmail(formData);
    setMessage(result.message);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-pink-600">
            Send a Valentine
          </CardTitle>
          <CardDescription>
            Fill out this form to send a Valentine&apos;s Day email
          </CardDescription>
        </CardHeader>
        <form action={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="recipientEmail"
                className="text-sm font-medium text-gray-700"
              >
                Recipient&apos;s Email
              </label>
              <Input
                type="email"
                id="recipientEmail"
                name="recipientEmail"
                placeholder="valentine@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="recipientName"
                className="text-sm font-medium text-gray-700"
              >
                Recipient&apos;s Name
              </label>
              <Input
                type="text"
                id="recipientName"
                name="recipientName"
                placeholder="Your Valentine"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Write your sweet message here..."
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <SubmitButton />
            {message && (
              <p
                className={`text-sm ${
                  message.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
