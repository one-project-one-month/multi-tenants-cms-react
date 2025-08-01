import { Badge } from "lucide-react";
import { Star } from "lucide-react";
import { Button } from "@cms/ui/components/button";
const CourseIntro = () => {
        return (
            <div className="bg-[#0d0d12] text-white p-6 w-full mx-auto space-y-4">
                <h1 className="text-3xl font-bold text-white">
                Angular - The Complete Guide <span className="text-gray-300">(2025 Edition)</span>
                </h1>

                <p className="text-gray-300">
                Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the
                successor of Angular.js
                </p>

                <div className="flex items-center space-x-4">
                <Badge className="bg-teal-500 text-white">Bestseller</Badge>

                <div className="flex items-center text-yellow-400">
                    <span className="font-semibold text-lg">4.7</span>
                    <Star className="w-4 h-4 ml-1 fill-yellow-400" />
                    <a href="#" className="text-blue-400 ml-2 underline">
                    (217,193 ratings)
                    </a>
                </div>

                <span className="text-gray-400">831,388 students</span>
                </div>

                <p className="text-gray-400">
                Created by{' '}
                <a href="#" className="text-blue-400 underline">
                    Maximilian Schwarzmüller
                </a>
                </p>

                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>⚙️ Last updated 7/2025</span>
                <span>🌐 English</span>
                <span>
                    🗣️ English [CC], Arabic [Auto],{' '}
                    <a href="#" className="text-blue-400 underline">
                    26 more
                    </a>
                </span>
                <Button variant="outline" size="sm" asChild>
                    <a href="/course-lesson">Enroll</a>
                </Button>
                </div>
            </div>
        );
};

export default CourseIntro;
