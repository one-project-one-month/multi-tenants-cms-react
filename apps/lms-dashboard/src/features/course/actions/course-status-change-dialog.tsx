import { useState, useEffect } from 'react';
import { ConfirmDialog } from '@cms/ui/components/comfirm-dialog';
import { IconAlertTriangle } from '@tabler/icons-react';
import { Label } from '@cms/ui/components/label';
import { Alert, AlertDescription, AlertTitle } from '@cms/ui/components/alert';
import { Loader2 } from 'lucide-react';

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentRow: { id: string; title: string; status?: string };
}

const statusOptions = [
  {
    value: 'published',
    label: 'Published',
    color: 'blue',
    description: 'The page is live and visible to the public.',
  },
  {
    value: 'unpublish',
    label: 'Unpublish',
    color: 'blue',
    description: 'The page is in progress and not visible to the public.',
  },
  {
    value: 'archived',
    label: 'Archived',
    color: 'blue',
    description: 'The page is no longer active but stored for reference.',
  },
  {
    value: 'pending',
    label: 'Pending',
    color: 'blue',
    description: 'The page is awaiting review or approval before going live.',
  },
];

// const statusColorMap: Record<string, { bg: string; border: string; text: string }> = {
//   published: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-800' },
//   unpublish: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-800' },
//   archived: { bg: 'bg-gray-100', border: 'border-gray-400', text: 'text-gray-700' },
//   pending: { bg: 'bg-orange-50', border: 'border-orange-500', text: 'text-orange-800' },
// };

// const statusColorMap: Record<string, { bg: string; border: string; text: string }> = {
//   published: {
//     bg: 'bg-gray-50',
//     border: 'border-gray-300',
//     text: 'text-gray-900',
//   },
//   unpublish: {
//     bg: 'bg-gray-50',
//     border: 'border-yellow-300',
//     text: 'text-yellow-900',
//   },
//   archived: {
//     bg: 'bg-gray-50',
//     border: 'border-gray-400',
//     text: 'text-gray-700',
//   },
//   pending: {
//     bg: 'bg-gray-50',
//     border: 'border-blue-300',
//     text: 'text-blue-900',
//   },
// };

const statusColorMap: Record<string, { bg: string; border: string; text: string }> = {
  published: {
    bg: 'bg-green-100',
    border: 'border-green-300',
    text: 'text-green-900',
  },
  unpublish: {
    bg: 'bg-amber-100',
    border: 'border-amber-300',
    text: 'text-amber-900',
  },
  archived: {
    bg: 'bg-slate-100',
    border: 'border-slate-300',
    text: 'text-slate-800',
  },
  pending: {
    bg: 'bg-indigo-100',
    border: 'border-indigo-300',
    text: 'text-indigo-900',
  },
};




export function CourseStatusChangeDialog({ open, onOpenChange, currentRow }: Props) {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [initialStatus, setInitialStatus] = useState<string>('');

  useEffect(() => {
    if (open && currentRow?.status) {
      setSelectedOption(currentRow.status.toLowerCase());
      setInitialStatus(currentRow.status.toLowerCase());
    }
  }, [open, currentRow]);

  const handleSave = async (id: string) => {
    try {
      setIsSubmitting(true);
      if (!selectedOption) return;

      console.log('Saving status change:', selectedOption, 'for course ID:', id);

      onOpenChange(false);
    } catch (error) {
      console.error('Save error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ConfirmDialog
      open={open}
      onOpenChange={onOpenChange}
      handleConfirm={() => handleSave(currentRow.id)}
      disabled={selectedOption === '' || selectedOption === initialStatus}
      isLoading={isSubmitting}
      confirmText={
        isSubmitting ? (
          <span className="flex items-center space-x-2">
            <Loader2 className="animate-spin w-4 h-4" />
            <span>Saving...</span>
          </span>
        ) : (
          'Save'
        )
      }
      cancelButtonClass="bg-gray-100 text-gray-700 py-3 px-8 rounded-md hover:bg-gray-200 focus:outline-none transition-all"
      contentClassName="max-h-[70vh] overflow-y-auto"
      title={
        <div className="flex items-center text-gray-900 text-xl font-bold space-x-2">
          <IconAlertTriangle className="text-blue-500" size={40} />
          <span>Change Page Status for “{currentRow.title}”</span>
        </div>
      }
      desc={
        <div className="space-y-4 text-gray-700">
          {currentRow.status && (
            <div className="text-sm text-gray-500">
              Current status:{' '}
              <span className="inline-block px-2 py-1 rounded-full bg-gray-100 text-gray-800 text-xs capitalize">
                {currentRow.status}
              </span>
            </div>
          )}

          <div className="space-y-2">
            <Label className="block text-sm text-gray-700">Status Options:</Label>

            

            <div className="space-y-2">
              {/* {statusOptions.map((option) => (
                <label
                  key={option.value}
                  htmlFor={option.value}
                  // className={`flex items-start border rounded-lg p-3 space-x-4 cursor-pointer transition-all 
                  //   ${
                  //     selectedOption === option.value
                  //       ? `border-${option.color}-500 bg-${option.color}-50`
                  //       : 'border-gray-200'
                  //   }`}
                  
                >
                  <input
                    type="radio"
                    id={option.value}
                    name="status"
                    value={option.value}
                    checked={selectedOption === option.value}
                    onChange={() => setSelectedOption(option.value)}
                    className="mt-1 accent-current"
                  />
                  <div>
                    <span className="text-md font-medium text-gray-900">{option.label}</span>
                    <p className="text-sm text-gray-600 mt-0.5">{option.description}</p>
                  </div>
                </label>
              ))} */}

              {statusOptions.map((option) => {
                const { bg, border, text } = statusColorMap[option.value];
                const isSelected = selectedOption === option.value;

                return (
                  <label
                    key={option.value}
                    htmlFor={option.value}
                    className={`flex items-start border rounded-md p-4 space-x-4 cursor-pointer transition-all 
                      ${isSelected ? `${bg} ${border}` : 'bg-white border-gray-200'}
                      hover:border-gray-400`}
                  >
                    <input
                      type="radio"
                      id={option.value}
                      name="status"
                      value={option.value}
                      checked={isSelected}
                      onChange={() => setSelectedOption(option.value)}
                      className="mt-1 accent-gray-800"
                    />
                    <div>
                      <span className={`text-sm font-medium ${isSelected ? text : 'text-gray-900'}`}>
                        {option.label}
                      </span>
                      <p className="text-sm text-gray-600 mt-0.5">{option.description}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>

          <Alert
            variant="default"
            className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 p-4 rounded-lg"
          >
            <AlertTitle className="font-semibold">Info</AlertTitle>
            <AlertDescription>
              Please do not forget to save after changing Course status.
            </AlertDescription>
          </Alert>
        </div>
      }
    />
  );
}
