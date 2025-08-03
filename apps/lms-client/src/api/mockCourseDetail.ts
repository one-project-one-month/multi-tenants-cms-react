// mockCourseDetail.ts

export interface Category {
  id: number;
  name: string;
}

export interface Rating {
  averageRating: number;
  totalRating: number;
}

export interface WhatYouWillLearnItem {
  id: number;
  text: string;
}

export interface Requirement {
  id: number;
  text: string;
}

export interface Course {
  id: number;
  name: string;
  shortDescription: string;
  rating: Rating;
  totalEnrolledStudents: number;
  createdAt: string;
  updatedAt: string;
  whatYouWillLearn: WhatYouWillLearnItem[];
  duration: string;
  modules: any[]; // You can expand this later
  requirements: Requirement[];
  description: string;
}

export interface Instructor {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  totalCourses: number;
  totalStudents: number;
}

export interface CourseDetailResponse {
  category: Category;
  course: Course;
  instructor: Instructor;
}

export const mockCourseDetail: CourseDetailResponse = {
  category: {
    id: 1,
    name: 'Artificial Intelligence',
  },
  course: {
    id: 101,
    name: 'AI Masterclass: Build Intelligent Systems with Python (2025 Edition)',
    shortDescription:
      'Master the foundations of AI, build real-world applications using machine learning, deep learning, and NLP with Python.',
    rating: {
      averageRating: 4.8,
      totalRating: 532,
    },
    totalEnrolledStudents: 12500,
    createdAt: '2025-06-10T00:00:00Z',
    updatedAt: '2025-07-30T00:00:00Z',
    whatYouWillLearn: [
      {
        id: 1,
        text: 'Understand the fundamentals of Artificial Intelligence and Machine Learning.',
      },
      {
        id: 2,
        text: 'Build and train deep learning models using TensorFlow and PyTorch.',
      },
      {
        id: 3,
        text: 'Implement Natural Language Processing with real-world datasets.',
      },
      {
        id: 4,
        text: 'Deploy AI-powered applications to the cloud.',
      },
    ],
    duration: '72 hours 15 minutes',
    modules: [],
    requirements: [
      {
        id: 1,
        text: 'Basic Python programming knowledge is recommended.',
      },
      {
        id: 2,
        text: 'No prior AI or ML experience required.',
      },
    ],
    description:
      "This comprehensive course covers everything from basic AI concepts to advanced deep learning models. Learn how to build intelligent systems, from virtual assistants to autonomous machines. You'll use Python, TensorFlow, PyTorch, and industry-proven tools to implement and deploy real AI projects.",
  },
  instructor: {
    id: 7,
    name: 'Dr. Ava Sharma',
    email: 'ava.sharma@aiuniversity.com',
    phoneNumber: '555-123-4567',
    totalCourses: 12,
    totalStudents: 48000,
  },
};
