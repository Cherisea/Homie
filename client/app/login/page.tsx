'use client'

import React, { FormEvent } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaGoogle } from 'react-icons/fa';

export default function LoginPage() {
    const handleEmailLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your email login logic here
        console.log('Email login');
    };

    const handleGoogleLogin = () => {
        // Add your Google login logic here
        console.log('Google login');
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
                    <CardTitle className="text-2xl font-bold text-center">Sign in to Homie</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleEmailLogin} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email*</label>
                            <Input id="email" type="email" required className="mt-1" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password*</label>
                            <Input id="password" type="password" required className="mt-1" />
                        </div>
                        <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                            Log in
                        </Button>
                    </form>
                    <div className="mt-4">
                        <Button
                            onClick={handleGoogleLogin}
                            variant="outline"
                            className="w-full flex items-center justify-center gap-4"
                        >
                            <FaGoogle />
                            Sign in with Google
                        </Button>
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="#" className="font-medium text-red-600 hover:text-red-500">
                            Register here
                        </a>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
