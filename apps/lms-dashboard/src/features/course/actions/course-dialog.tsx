import { useCourse } from '../context/course-context';
import { CourseDeleteDialog } from './course-delete-dialog';

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

          {/* <PageStatusChangeDialog
            key={`page-status-change-${currentRow.id}`}
            open={open === 'status-select'}
            onOpenChange={() => {
              setOpen('status-select');
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            currentRow={currentRow}
          /> */}
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
