"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Whether you're inquiring about membership, our collections, or custom orders, we'd love to hear from you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-secondary/5 rounded-lg">
              <h3 className="font-display font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground">hello@thecourt.com</p>
            </div>
            <div className="p-6 bg-secondary/5 rounded-lg">
              <h3 className="font-display font-bold text-foreground mb-2">Phone</h3>
              <p className="text-muted-foreground">+39 (0) 55 1234 5678</p>
            </div>
            <div className="p-6 bg-secondary/5 rounded-lg">
              <h3 className="font-display font-bold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">Florence, Italy</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl">
            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                placeholder="How can we help?"
              />
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:border-accent"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
