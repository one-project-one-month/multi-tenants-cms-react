import { Button } from '@cms/ui/components/button';
import { Textarea } from '@cms/ui/components/textarea';
import { Input } from '@cms/ui/components/input';
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { CategoryDataType} from '../data/schema';
import { useCategoryStore } from '../../../store/categoryStore';

const CreateCategory = () => {
  const addCategory = useCategoryStore(state => state.addCategory)
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

     const date = new Date();
    const createdAt = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'long' })} ${date.getFullYear()}`;

    const newCategory: CategoryDataType = {
      id: Date.now().toString(),
      name,
      description,
      createdAt,
    };
    // console.log("new category : ",newCategory)
    addCategory(newCategory)
    setName('');
    setDescription('');
    navigate(-1)
  };

  return (
    <div className='py-3'>
    <div className="">
      <Button variant='ghost' onClick={()=> navigate(-1)}>
       <ArrowLeft /> Back 
    </Button>
    </div>
    
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto mt-20 p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Category</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border px-3 py-2 border-gray-300 rounded"
          placeholder="Enter category name..."
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={6}
          className="w-full h-30 text-sm border rounded border border-gray-300 focus:border-gray-700"
          placeholder="Enter description..."
        />
      </div>
      <div className="w-full">
          <Button
        type="submit"
        className="w-full text-white text-base px-4 py-2 rounded transition"
      >
        Create Category
      </Button>
      </div>
      
    </form>
    </div>
    
  );
};

export default CreateCategory;
