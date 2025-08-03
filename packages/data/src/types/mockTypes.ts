export type Lesson = {
  id: number;
  title: string;
  materialType: string;
  content: string;
  duration: string;
}

export type Module = {
  id: number;
  name: string;
  lessons: Lesson[];
}

export type  Course ={
  id: number;
  name: string;
  shortDescription: string;
  duration: string;
  modules: Module[];
}

export type Category ={
  id: number;
  name: string;
}

export type Instructor ={
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  totalCourses: number;
  totalStudents: number;
}

export type MockCourse ={
  category: Category;
  course: Course;
  instructor: Instructor;
}
