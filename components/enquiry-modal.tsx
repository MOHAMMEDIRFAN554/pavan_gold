"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
}

export default function EnquiryModal({ isOpen, onClose, productName }: EnquiryModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            onClose();
            setFormData({ name: "", email: "", phone: "", message: "" });
        }, 2000);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] bg-card border-border">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-primary">Enquire about {productName}</DialogTitle>
                    <DialogDescription>
                        Fill in your details and we will get back to you shortly.
                    </DialogDescription>
                </DialogHeader>

                {submitted ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                            <Send className="h-6 w-6" />
                        </div>
                        <h3 className="text-xl font-medium text-foreground">Enquiry Sent!</h3>
                        <p className="text-muted-foreground mt-2">Thank you for your interest. We will contact you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your Name"
                                required
                                className="bg-background border-input focus:border-primary"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your@email.com"
                                required
                                className="bg-background border-input focus:border-primary"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+91 98765 43210"
                                className="bg-background border-input focus:border-primary"
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="I am interested in this product..."
                                required
                                className="bg-background border-input focus:border-primary resize-none"
                                rows={4}
                            />
                        </div>
                        <Button type="submit" className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            Send Enquiry
                        </Button>
                    </form>
                )}
            </DialogContent>
        </Dialog>
    );
}
