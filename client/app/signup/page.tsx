"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpPage() {
    const [profilePicture, setProfilePicture] = useState<File | null>(null);

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your sign-up logic here
        console.log('Sign-up logic here');
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setProfilePicture(e.target.files[0]);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="absolute inset-0">
                <img
                    src="/api/placeholder/1920/1080"
                    alt="Background"
                    className="w-full h-full object-cover opacity-50"
                />
            </div>
            <Card className="w-full max-w-md z-10">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Sign up for Homie</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSignUp} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username*</label>
                            <Input id="username" type="text" required className="mt-1" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                            <Input id="email" type="email" required className="mt-1" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                            <Input id="password" type="password" required className="mt-1" />
                        </div>
                        <div>
                            <label htmlFor="profile-picture" className="block text-sm font-medium text-gray-700">Profile Picture*</label>
                            <input
                                id="profile-picture"
                                type="file"
                                required
                                accept="image/*"
                                onChange={handleFileChange}
                                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
                            />
                        </div>
                        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                            Sign up
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
