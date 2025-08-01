type Lesson = {
  id: number;
  title: string;
  url : string;
};

type Section = {
  id: number;
  title: string;
  lessons: Lesson[];
};

export const courseData: Section[] = [
  {
    id: 1,
    title: "Section 1: Introduction to AI",
    lessons: [
      {
        id: 1,
        title: "Lesson 1: What is AI?",
        url: "https://www.youtube.com/embed/b0KaGBOU4Ys?si=Fk9T52yLkRUxtuep",
      },
      {
        id: 2,
        title: "Lesson 2: History of AI",
        url: "https://www.youtube.com/embed/eSj80Zr6TEE?si=9Ql7AuQLqKGnt4-q",
      },
      {
        id: 3,
        title: "Lesson 3: Types of AI",
        url: "https://www.youtube.com/embed/XFZ-rQ8eeR8?si=evt8RPHOgk4OEP5F",
      },
    ],
  },
  {
    id: 2,
    title: "Section 2: AWS AI Services Overview",
    lessons: [
      {
        id: 4,
        title: "Lesson 1: AWS AI Services Introduction",
        url: "https://www.youtube.com/embed/b0KaGBOU4Ys?si=Fk9T52yLkRUxtuep",
      },
      {
        id: 5,
        title: "Lesson 2: Amazon Rekognition",
        url: "https://www.youtube.com/embed/eSj80Zr6TEE?si=9Ql7AuQLqKGnt4-q",
      },
      {
        id: 6,
        title: "Lesson 3: Amazon Comprehend",
        url: "https://www.youtube.com/embed/eSj80Zr6TEE?si=9Ql7AuQLqKGnt4-q",
      },
    ],
  },
  {
    id: 3,
    title: "Section 3: Training AI Models on AWS",
    lessons: [
      {
        id: 7,
        title: "Lesson 1: Setting up SageMaker",
        url: "https://www.youtube.com/embed/b0KaGBOU4Ys?si=Fk9T52yLkRUxtuep",
      },
      {
        id: 8,
        title: "Lesson 2: Data Preparation",
        url: "https://www.youtube.com/embed/eSj80Zr6TEE?si=9Ql7AuQLqKGnt4-q",
      },
      {
        id: 9,
        title: "Lesson 3: Model Training",
        url: "https://www.youtube.com/embed/eSj80Zr6TEE?si=9Ql7AuQLqKGnt4-q",
      },
    ],
  },
  {
    id: 4,
    title: "Section 4: Deploying and Monitoring AI Models",
    lessons: [
      {
        id: 10,
        title: "Lesson 1: Model Deployment",
        url: "https://www.youtube.com/embed/b0KaGBOU4Ys?si=Fk9T52yLkRUxtuep",
      },
      {
        id: 11,
        title: "Lesson 2: Monitoring Models",
        url: "https://www.youtube.com/embed/eSj80Zr6TEE?si=9Ql7AuQLqKGnt4-q",
      },
      {
        id: 12,
        title: "Lesson 3: Scaling AI Solutions",
        url: "https://www.youtube.com/embed/eSj80Zr6TEE?si=9Ql7AuQLqKGnt4-q",
      },
    ],
  },
];
