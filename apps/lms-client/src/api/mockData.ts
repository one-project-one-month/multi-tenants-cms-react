// import { Course } from '@/store/wishlistStore'
import type { Course } from "../store/wishlistStore"

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete React Developer Course 2024',
    instructor: 'John Smith',
    rating: 4.7,
    reviews: 15420,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=225',
    price: 89.99,
    originalPrice: 199.99,
    description: 'Master React by building 20+ projects. Includes Hooks, Redux, React Router, and much more.',
    duration: '42 hours',
    level: 'Beginner',
    category: 'Development',
    isHighestRated: true
  },
  {
    id: '2',
    title: 'Advanced JavaScript Concepts',
    instructor: 'Sarah Johnson',
    rating: 4.8,
    reviews: 8930,
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400&h=225',
    price: 79.99,
    originalPrice: 149.99,
    description: 'Deep dive into advanced JavaScript concepts including closures, prototypes, and async programming.',
    duration: '28 hours',
    level: 'Advanced',
    category: 'Development'
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    instructor: 'Mike Davis',
    rating: 4.6,
    reviews: 12450,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=225',
    price: 94.99,
    originalPrice: 179.99,
    description: 'Learn modern UI/UX design principles and create stunning user interfaces.',
    duration: '35 hours',
    level: 'Intermediate',
    category: 'Design'
  },
  {
    id: '4',
    title: 'Python for Data Science',
    instructor: 'Dr. Emily Chen',
    rating: 4.9,
    reviews: 18750,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=225',
    price: 109.99,
    originalPrice: 229.99,
    description: 'Complete Python data science bootcamp with NumPy, Pandas, Matplotlib, and machine learning.',
    duration: '55 hours',
    level: 'Beginner',
    category: 'Development',
    isHighestRated: true
  },
  {
    id: '5',
    title: 'Digital Marketing Strategy',
    instructor: 'Robert Wilson',
    rating: 4.5,
    reviews: 9680,
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=225',
    price: 69.99,
    originalPrice: 139.99,
    description: 'Master digital marketing with SEO, social media, content marketing, and analytics.',
    duration: '32 hours',
    level: 'Intermediate',
    category: 'Marketing'
  },
  {
    id: '6',
    title: 'Node.js Complete Guide',
    instructor: 'Alex Martinez',
    rating: 4.7,
    reviews: 11230,
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=225',
    price: 84.99,
    originalPrice: 159.99,
    description: 'Build scalable web applications with Node.js, Express, MongoDB, and REST APIs.',
    duration: '38 hours',
    level: 'Intermediate',
    category: 'Development'
  },
  {
    id: '7',
    title: 'Photography Fundamentals',
    instructor: 'Lisa Anderson',
    rating: 4.4,
    reviews: 6540,
    image: 'https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=400&h=225',
    price: 59.99,
    originalPrice: 119.99,
    description: 'Learn professional photography techniques, composition, lighting, and post-processing.',
    duration: '24 hours',
    level: 'Beginner',
    category: 'Photography'
  },
  {
    id: '8',
    title: 'Business Analytics with Excel',
    instructor: 'David Brown',
    rating: 4.6,
    reviews: 13890,
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=225',
    price: 74.99,
    originalPrice: 149.99,
    description: 'Advanced Excel techniques for business analytics, data visualization, and reporting.',
    duration: '29 hours',
    level: 'Intermediate',
    category: 'Business'
  }
]

export const getUserCourses = (): Course[] => {
  return mockCourses.slice(0, 5)
}

export const getTrendingCourses = (): Course[] => {
  return mockCourses.slice(2, 7)
}

export const getAllCourses = (): Course[] => {
  return mockCourses
}

export const getRecommendedTopics = (): string[] => {
  return [
    'React',
    'Python',
    'JavaScript',
    'UI/UX Design',
    'Data Science',
    'Node.js',
    'Photography',
    'Excel',
    'Digital Marketing',
    'Machine Learning'
  ]
}