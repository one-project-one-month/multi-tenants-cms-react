import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// UI Components
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cms/ui/components/form';
import { Button } from '@cms/ui/components/button';
import { Input } from '@cms/ui/components/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cms/ui/components/select';
import { Card, CardContent, CardHeader, CardTitle } from '@cms/ui/components/card';

import { PlusCircle, XCircle } from 'lucide-react';

// Validation schema using zod
const lessonSchema = z.object({
  title: z.string().min(1, 'Lesson title is required'),
  // videoUrl: z.string().url('Valid video URL is required'),
});

const moduleSchema = z.object({
  title: z.string().min(1, 'Module title is required'),
  lessons: z.array(lessonSchema).min(1, 'At least one lesson is required'),
});

const CourseSchema = z.object({
  title: z.string().min(1, 'Course title is required'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
  status: z.string().min(1, 'Status is required'),
  modules: z.array(moduleSchema).min(1, 'At least one module is required'),
});

type CreateCourseData = z.infer<typeof CourseSchema>;

const ModuleForm = ({
  moduleIndex,
  control,
  removeModule,
}: {
  moduleIndex: number;
  control: any;
  removeModule: (index: number) => void;
}) => {
  const {
    fields: lessonFields,
    append,
    remove,
  } = useFieldArray({
    control,
    name: `modules.${moduleIndex}.lessons`,
  });

  return (
    <Card className="relative mb-6">
      {/* Remove module button */}
      <Button
        type="button"
        onClick={() => removeModule(moduleIndex)}
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2"
      >
        <XCircle className="h-5 w-5" />
      </Button>

      <CardHeader>
        <FormField
          control={control}
          name={`modules.${moduleIndex}.title`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Module Title</FormLabel>
              <FormControl>
                <Input placeholder="Module Title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardHeader>

      <CardContent>
        {lessonFields.map((lesson, lessonIndex) => (
          <div key={lesson.id} className="space-y-2 border p-4 rounded relative mb-4">
            {/* Remove lesson button */}
            <Button
              type="button"
              onClick={() => remove(lessonIndex)}
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
            >
              <XCircle className="h-4 w-4" />
            </Button>

            <FormField
              control={control}
              name={`modules.${moduleIndex}.lessons.${lessonIndex}.title`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lesson Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Lesson Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <FormField
              control={control}
              name={`modules.${moduleIndex}.lessons.${lessonIndex}.videoUrl`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Video URL</FormLabel>
                  <FormControl>
                    <Input placeholder="https://..." type="url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
        ))}

        <Button type="button" onClick={() => append({ title: '', videoUrl: '' })} variant="outline">
          <PlusCircle className="mr-2 h-4 w-4" /> Add Lesson
        </Button>
      </CardContent>
    </Card>
  );
};

const CreateCourse = () => {
  const form = useForm<CreateCourseData>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      status: '',
      modules: [],
    },
  });

  const {
    fields: moduleFields,
    append: appendModule,
    remove: removeModule,
  } = useFieldArray({
    control: form.control,
    name: 'modules',
  });

  const onSubmit = (data: CreateCourseData) => {
    console.log('Submitted course data:', data);
  };

  return (
    <div className="w-full py-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Create New Course</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Course title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter course title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="Enter category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Status */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Modules */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Modules</h3>
              <Button
                type="button"
                onClick={() =>
                  appendModule({
                    title: '',
                    lessons: [{ title: '' }],
                  })
                }
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Module
              </Button>
            </div>

            {moduleFields.length === 0 && <p>No modules yet.</p>}

            {/* {moduleFields.map((_, moduleIndex) => (
              <ModuleForm
                key={moduleIndex}
                moduleIndex={moduleIndex}
                control={form.control}
                removeModule={removeModule}
              />
            ))} */}
            {moduleFields.map((field, moduleIndex) => (
              <ModuleForm
                key={field.id} // ✅ Stable key from useFieldArray
                moduleIndex={moduleIndex}
                control={form.control}
                removeModule={removeModule}
              />
            ))}
          </div>

          {/* Submit */}
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateCourse;
