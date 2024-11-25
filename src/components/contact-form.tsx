"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactForm() {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {

            toast({
                title: "Message sent!",
                description: "We'll get back to you as soon as possible.",
            })
            form.reset()
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            })
        }
    }

    return (
        <div className="w-full min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-3xl text-center mb-12">
                <div className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full px-4 py-1 text-sm mb-4">
                    Contact
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Want to chat? Just shoot me a dm and I&apos;ll respond whenever I can. I will ignore all soliciting.
                </p>
            </div>

            <Card className="w-full max-w-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <CardContent className="p-6">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-sm text-gray-700 dark:text-gray-300">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    placeholder="Enter your name"
                                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-500"
                                    {...form.register("name")}
                                />
                                {form.formState.errors.name && (
                                    <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.name.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm text-gray-700 dark:text-gray-300">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-500"
                                    {...form.register("email")}
                                />
                                {form.formState.errors.email && (
                                    <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.email.message}</p>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject" className="text-sm text-gray-700 dark:text-gray-300">
                                Subject
                            </Label>
                            <Input
                                id="subject"
                                placeholder="Enter subject"
                                className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-500"
                                {...form.register("subject")}
                            />
                            {form.formState.errors.subject && (
                                <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.subject.message}</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-sm text-gray-700 dark:text-gray-300">
                                Message
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Enter your message"
                                className="min-h-[150px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:border-gray-400 dark:focus:border-gray-500 focus:ring-gray-400 dark:focus:ring-gray-500"
                                {...form.register("message")}
                            />
                            {form.formState.errors.message && (
                                <p className="text-red-500 dark:text-red-400 text-sm">{form.formState.errors.message.message}</p>
                            )}
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black py-6"
                            disabled={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

