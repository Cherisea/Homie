"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function WriteReviewPage() {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [review, setReview] = useState("");

    const handleReviewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle review submit logic
        console.log("Review submitted");
    };

    return (
        <div className="min-h-screen flex flex-col">
            <header className="w-full flex justify-between px-10 py-4 bg-white shadow">
                <h1 className="text-3xl font-bold text-red-500">Homie</h1>
                <div>
                    <Button className="mr-4 bg-red-500 hover:bg-red-600">Write a Review</Button>
                    <Button className="bg-red-500 hover:bg-red-600">Sign Up/Log in</Button>
                </div>
            </header>
            <div className="flex-1 flex items-center justify-center p-8 bg-gray-100">
                <Card className="w-full max-w-2xl">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Find a rental property to review</CardTitle>
                        <p className="text-center text-gray-500 mt-1">
                            Share your living experience to make a difference.
                        </p>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                            <div className="flex space-x-4">
                                <Input
                                    id="streetAddress"
                                    type="text"
                                    placeholder="Street Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    className="flex-1"
                                />
                                <Input
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="flex-1"
                                />
                                <Input
                                    id="province"
                                    type="text"
                                    placeholder="Province"
                                    value={province}
                                    onChange={(e) => setProvince(e.target.value)}
                                    className="flex-1"
                                />
                                <Button className="bg-red-500 hover:bg-red-600">Search</Button>
                            </div>
                            <div className="mt-6">
                                <Textarea
                                    id="review"
                                    placeholder="Write your review here..."
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    className="w-full h-32"
                                />
                            </div>
                            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                                Submit Review
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <footer className="w-full py-4 bg-red-100 text-center">
                <p className="text-sm text-gray-500">&copy; 2024 Homie. All rights reserved.</p>
            </footer>
        </div>
    );
}
