"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Plane,
  MapPin,
  CalendarIcon,
  Users,
  Star,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function GlobetideTravel() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: undefined as Date | undefined,
    passengers: "1",
  });

  const handleChange = (field: keyof typeof formData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const popularDestinations = [
    {
      name: "Pakistan",
      image: "/destination-pakistan.jpeg",
      rating: 4.8,
      discount: "20% OFF",
    },
    {
      name: "India",
      image: "/destination-india.jpg",
      rating: 4.9,
      discount: "15% OFF",
    },
    {
      name: "Bangladesh",
      image: "/destination-bangladesh.jpg",
      rating: 4.7,
      discount: "25% OFF",
    },
    {
      name: "Saudi Arabia",
      image: "/destination-saudi.jpg",
      rating: 4.6,
      discount: "10% OFF",
    },
  ];

  const tourPackages = [
    {
      title: "Dubai Grand Tour",
      duration: "14 Days",
      image: "/tour-dubai.jpg",
      rating: 4.9,
    },
    {
      title: "Thailand Tour",
      duration: "12 Days",
      image: "/tour-thailand.jpeg",
      rating: 4.8,
    },
    {
      title: "Turkey Tour",
      duration: "10 Days",
      image: "/tour-turkey.jpeg",
      rating: 4.9,
    },
    {
      title: "Maldives Tour",
      duration: "14 Days",
      image: "/tour-maldives.jpeg",
      rating: 4.9,
    },
    {
      title: "Qatar Tour",
      duration: "8 Days",
      image: "/tour-qatar.jpeg",
      rating: 4.4,
    },
       {
      title: "Paris Tour",
      duration: "10 Days",
      image: "/tour-paris.jpeg",
      rating: 4.7,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure Booking",
      description:
        "Your payments and personal information are always protected with our secure booking system.",
    },
    {
      icon: Award,
      title: "Award Winning",
      description:
        "Recognized as one of the top travel agencies with numerous industry awards.",
    },
    {
      icon: Heart,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-teal-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo-new.png"
                alt="Globetide Travel"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>

            {/* Navigation Items */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() =>
                  document
                    .getElementById("destinations")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-teal-700 hover:text-teal-900 font-semibold transition-colors duration-300 hover:scale-105 transform"
              >
                Destinations
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-teal-700 hover:text-teal-900 font-semibold transition-colors duration-300 hover:scale-105 transform"
              >
                About
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("tours")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-teal-700 hover:text-teal-900 font-semibold transition-colors duration-300 hover:scale-105 transform"
              >
                Tours
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-teal-700 hover:text-teal-900 font-semibold transition-colors duration-300 hover:scale-105 transform"
              >
                Contact
              </button>
            </nav>

            <Button
              onClick={() =>
                window.open("https://wa.me/+447781561031", "_blank")
              }
              className="bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-800 hover:to-teal-900 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-teal-800/70 to-teal-700/60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 px-4 py-2 text-sm font-medium">
                  ✈️ Premium Travel Experience
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Discover Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                    Dream Journey
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-teal-100 leading-relaxed">
                  Experience the world like never before with our premium travel
                  services. From exotic destinations to luxury accommodations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-teal-100">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span>Best Price Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-teal-100">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span>24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-teal-100">
                  <CheckCircle className="h-5 w-5 text-yellow-400" />
                  <span>Instant Booking</span>
                </div>
              </div>
            </div>

            {/* Right Content - Search Form */}
            <div className="lg:ml-8">
              <Card className="bg-white/95 backdrop-blur-md shadow-2xl border-0 rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-teal-700 to-teal-800 text-white p-8">
                  <div className="flex items-center gap-3">
                    <Plane className="h-6 w-6 text-yellow-400" />
                    <CardTitle className="text-2xl font-bold">
                      Find Your Perfect Flight
                    </CardTitle>
                  </div>
                  <CardDescription className="text-teal-100 text-lg">
                    Search and book flights to anywhere in the world
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="from"
                        className="text-teal-800 font-semibold"
                      >
                        From
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 h-5 w-5 text-teal-600" />
                        <Input
                          id="from"
                          value={formData.from}
                          onChange={(e) => handleChange("from", e.target.value)}
                          placeholder="Departure city"
                          className="pl-12 h-14 border-2 border-teal-100 focus:border-teal-500 rounded-xl text-lg"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="to"
                        className="text-teal-800 font-semibold"
                      >
                        To
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 h-5 w-5 text-teal-600" />
                        <Input
                          id="to"
                          value={formData.to}
                          onChange={(e) => handleChange("to", e.target.value)}
                          placeholder="Destination city"
                          className="pl-12 h-14 border-2 border-teal-100 focus:border-teal-500 rounded-xl text-lg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label className="text-teal-800 font-semibold">
                        Departure Date
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full h-14 justify-start text-left font-normal border-2 border-teal-100 hover:border-teal-500 rounded-xl text-lg",
                              !formData.departureDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-3 h-5 w-5 text-teal-600" />
                            {formData.departureDate
                              ? format(formData.departureDate, "PPP")
                              : "Select date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={formData.departureDate}
                            onSelect={(date) =>
                              setFormData((prev) => ({
                                ...prev,
                                departureDate: date,
                              }))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-teal-800 font-semibold">
                        Passengers
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleChange("passengers", value)
                        }
                      >
                        <SelectTrigger className="h-14 border-2 border-teal-100 focus:border-teal-500 rounded-xl text-lg">
                          <Users className="mr-3 h-5 w-5 text-teal-600" />
                          <SelectValue placeholder="1 Adult" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Adult</SelectItem>
                          <SelectItem value="2">2 Adults</SelectItem>
                          <SelectItem value="3">3 Adults</SelectItem>
                          <SelectItem value="4">4+ Adults</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-teal-900 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        Search Flights
                        <Plane className="ml-3 h-6 w-6" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-teal-900 text-center">
                          Find Your Best Flight Deal!
                        </DialogTitle>
                        <DialogDescription className="text-center text-lg text-gray-600 mt-4">
                          Get personalized flight quotations and exclusive deals
                          directly on WhatsApp. Our travel experts will help you
                          find the perfect flight at the best price.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col items-center space-y-6 mt-6">
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-teal-800 mb-2">
                            Why Choose WhatsApp?
                          </h3>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>✅ Instant responses from travel experts</li>
                            <li>✅ Personalized flight recommendations</li>
                            <li>✅ Exclusive deals and discounts</li>
                            <li>✅ 24/7 customer support</li>
                          </ul>
                        </div>
                        <Button
                          onClick={() => {
                            const { from, to, departureDate, passengers } =
                              formData;

                            const formattedDate = departureDate
                              ? format(departureDate, "PPP")
                              : "Not selected";

                            const message = `Hi! I'm looking for flight quotations. Here are my details:
- From: ${from}
- To: ${to}
- Departure Date: ${formattedDate}
- Passengers: ${passengers}`;

                            const encodedMessage = encodeURIComponent(message);
                            const whatsappUrl = `https://wa.me/+447781561031?text=${encodedMessage}`;

                            window.open(whatsappUrl, "_blank");
                            setIsDialogOpen(false);
                          }}
                          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="w-6 h-6 fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                          </svg>
                          Get Best Quotation on WhatsApp
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-800 px-4 py-2 text-sm font-medium mb-4">
              🌍 Trending Destinations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">
              Popular Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing places around the world with exclusive deals and
              unforgettable experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 rounded-2xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white font-bold px-3 py-1">
                      {destination.discount}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-teal-800 font-semibold">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {destination.rating}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-xl mb-1">
                      {destination.name}
                    </h3>
                    
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-center items-center">
                  
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-full px-6"
                    >
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section
        id="tours"
        className="py-20 bg-gradient-to-br from-teal-50 to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-sm font-medium mb-4">
              🎒 Premium Tours
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">
              Featured Tour Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully curated experiences for every traveler with expert
              guides and luxury accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white font-bold px-3 py-2 rounded-full">
                      Best Value
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-teal-800 font-semibold">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                      {tour.rating}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-teal-900 mb-4">
                    {tour.title}
                  </h3>

                  <div className="flex items-center gap-6 mb-6 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-teal-600" />
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                    
                  </div>

               

                  <div className="flex items-center justify-center">
                   
                    <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-teal-900 font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-800 px-4 py-2 text-sm font-medium mb-4">
              ⭐ Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-teal-900 mb-6">
              Why Choose Globetide Travel?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted partner for unforgettable journeys with premium
              service and unmatched expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-teal-600 to-teal-700 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="h-10 w-10 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-teal-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-teal-800 to-teal-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 px-4 py-2 text-sm font-medium mb-6">
                📞 Get In Touch
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready for Your Next Adventure?
              </h2>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                Contact our travel experts today and let us help you plan the
                perfect journey. We're here to make your travel dreams come
                true.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500/20 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-teal-200">+44 778 156 1031</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-yellow-500/20 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-teal-200">
                      GlobeTidetravel@outlook.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-3xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-white">
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-teal-100 text-lg">
                  We'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-white font-semibold"
                    >
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-white font-semibold"
                    >
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white font-semibold">
                    Message
                  </Label>
                  <textarea
                    id="message"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-xl resize-none h-32 text-white placeholder:text-white/60"
                    placeholder="Tell us about your travel plans..."
                  ></textarea>
                </div>
                <Button className="w-full h-14 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-teal-900 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12 border-t border-teal-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-6 md:mb-0">
              <Image
                src="/logo-new.png"
                alt="Globetide Travel"
                width={60}
                height={60}
                className="object-contain"
              />
              <div>
                <p className="text-teal-200">
                  © 2024 Globetide Travel. All rights reserved.
                </p>
                <p className="text-sm text-teal-300">
                  Your adventure starts here
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="border-teal-600 text-teal-200 hover:bg-teal-800 bg-transparent"
              >
                Privacy Policy
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-teal-600 text-teal-200 hover:bg-teal-800 bg-transparent"
              >
                Terms of Service
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
          onClick={() => window.open("https://wa.me/+447781561031", "_blank")}
        >
          <svg
            viewBox="0 0 24 24"
            className="w-8 h-8 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
