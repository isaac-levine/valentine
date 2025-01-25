"use client";

import { useState } from "react";
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

export default function ValentineEmailForm() {
  const [formData, setFormData] = useState({
    recipientEmail: "",
    recipientName: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Here you would typically send the data to your backend
    alert("Valentine email sent! (Just kidding, check the console)");
  };

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
        <form onSubmit={handleSubmit}>
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
                value={formData.recipientEmail}
                onChange={handleChange}
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
                value={formData.recipientName}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700"
            >
              Send Valentine
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
