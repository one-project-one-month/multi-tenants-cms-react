import { useCourse } from '../context/course-context';
import { CourseDeleteDialog } from './course-delete-dialog';
import { CourseStatusChangeDialog } from './course-status-change-dialog';

export function CourseDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useCourse(); 
  return (
    <>
      {/* <OwnerActionDialog
        key="owner-add"
        open={open === 'add'}
        onOpenChange={(isOpen) => setOpen(isOpen ? 'add' : null)}
      /> */}

      {currentRow && (
        <>
          {/* <BrandActionDialog
            key={`brand-edit-${currentRow.id}`}
            open={open === 'edit'}
            onOpenChange={() => {
              setOpen('edit');
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          /> */}

          <CourseStatusChangeDialog
            key={`course-status-change-${currentRow.id}`}
            open={open === 'change-status'}
            onOpenChange={() => {
              setOpen('change-status');
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          /> 

          <CourseDeleteDialog
            key={`course-delete-${currentRow.id}`}
            open={open === 'delete'}
            onOpenChange={() => {
              setOpen('delete');
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          />
        </>
      )}
    </>
  );
}
