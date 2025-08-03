import { Badge, Captions, Settings, WholeWord } from "lucide-react";
import { Star } from "lucide-react";
import { Button } from "@cms/ui/components/button";
const CourseIntro = () => {
        return (
            <div className="bg-[#0d0d12] text-white p-6 w-full pl-90 space-y-4">
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
                    <a href="#" className="text-purple-300 ml-2 underline">
                    (217,193 ratings)
                    </a>
                </div>

                <span className="text-gray-400">831,388 students</span>
                </div>

                <p className="text-gray-400">
                Created by{' '}
                <a href="#" className="text-purple-300 underline">
                    Maximilian Schwarzmüller
                </a>
                </p>

                <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span className="flex items-center gap-2"><Settings size={16}/> Last updated 7/2025</span>
                <span className="flex items-center gap-2">
                    <Captions size={16}/> English [CC], Arabic [Auto],{' '}
                    <a href="#" className="text-purple-300 underline">
                    26 more
                    </a>
                </span>
                <a href="/course-lesson">
                  <Button className="text-white text-md px-6 bg-purple-700 hover:bg-purple-800">
                    Enroll
                  </Button>
                </a>
                {/* <Button variant="outline" className="text-purple-800 "  asChild>
                    <a href="/course-lesson">Enroll</a>
                </Button> */}
                </div>
            </div>
        );
};

export default CourseIntro;
