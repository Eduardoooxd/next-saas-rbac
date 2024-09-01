import { InterceptedSheetContent } from '@/components/intercepted-sheet-content'
import ProjectForm from '@/components/project-form'
import { Sheet, SheetHeader, SheetTitle } from '@/components/ui/sheet'

export default function CreateProjectInterceptingRoute() {
  return (
    <Sheet defaultOpen>
      <InterceptedSheetContent>
        <SheetHeader>
          <SheetTitle>Create Project</SheetTitle>
        </SheetHeader>

        <div className="py-4">
          <ProjectForm />
        </div>
      </InterceptedSheetContent>
    </Sheet>
  )
}
