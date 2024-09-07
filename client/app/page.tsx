import React from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Building2, Home as TownhouseIcon, Building, BedDouble, Star, Users, ThumbsUp, ThumbsDown } from 'lucide-react'

const categories = [
  { name: 'House', icon: Home },
  { name: 'Basement', icon: Building2 },
  { name: 'Townhouse', icon: TownhouseIcon },
  { name: 'Apartment', icon: Building },
  { name: 'Studio', icon: BedDouble },
];

const whyChooseHomie = [
  { title: 'Verified Reviews', icon: Star, description: 'All reviews are from verified tenants, ensuring you get honest and reliable feedback.' },
  { title: 'Comprehensive Listings', icon: Home, description: 'Find detailed information on a wide range of rental properties across various cities.' },
  { title: 'Community Driven', icon: Users, description: 'Join a community of renters sharing their experiences to help others find the perfect home.' },
];

const recentReviews = [
  {
    name: 'lebron',
    date: 'Aug. 31, 2023',
    rating: 4.5,
    comment: 'Small but cozy, perfect for a short stay.',
    images: ['/api/placeholder/100/100', '/api/placeholder/100/100']
  },
  {
    name: 'Ray',
    date: 'Aug. 20, 2023',
    rating: 4.5,
    comment: 'The Wi-Fi was slow, but otherwise a good stay.',
    images: ['/api/placeholder/100/100', '/api/placeholder/100/100']
  },
  {
    name: 'joe',
    date: 'April 23, 2023',
    rating: 5,
    comment: 'Average stay, nothing special.',
    images: ['/api/placeholder/100/100', '/api/placeholder/100/100']
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  );
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">Homie</h1>
          <div>
            <Button variant="destructive" className="mr-2">Write a Review</Button>
            <Button variant="destructive">Sign Up/Log In</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-900 h-96">
        <img src="/api/placeholder/1200/400" alt="Hero background" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Home with Homie</h2>
          <p className="text-xl mb-8">Your trusted source for rental reviews and ratings.</p>
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Search by street, city or province"
              className="w-full px-4 py-2 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Browse by Category */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-semibold text-orange-700 mb-6">Browse by Category</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <category.icon className="w-12 h-12 text-orange-500 mb-2" />
                <span className="text-sm font-medium">{category.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Why Choose Homie */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-orange-700 mb-6 text-center">Why Choose Homie</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseHomie.map((item) => (
              <Card key={item.title} className="text-center">
                <CardContent className="pt-6">
                  <item.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-semibold text-orange-700 mb-6">Recent Reviews</h3>
        <div className="space-y-6">
          {recentReviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <StarRating rating={review.rating} className="ml-auto" />
                </div>
                <p className="mb-4">{review.comment}</p>
                <div className="flex space-x-2 mb-4">
                  {review.images.map((img, i) => (
                    <img key={i} src={img} alt={`Review image ${i + 1}`} className="w-24 h-24 object-cover rounded" />
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" /> Like
                  </Button>
                  <Button variant="outline" size="sm">
                    <ThumbsDown className="w-4 h-4 mr-2" /> Dislike
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-200 py-4 text-center">
        <p className="text-sm text-gray-600">© 2024 Homie. All rights reserved.</p>
      </footer>
    </div>
  );
}