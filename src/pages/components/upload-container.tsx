import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpToLine } from "lucide-react";
import PDFViewer from "./padf-viewer";
import DropZone from "./drop-zone";
import usePreviewStore from "@/zustand/useFileStore";

function UploadContainer() {
  return (
    <div>
      <Card className="max-w-sm">
        <CardContent>
          <div className="flex flex-col gap-y-6 pb-6">
            <div className="py-2 w-full h-full">
              <img
                src={"/img/upload-img.svg"}
                width={400}
                height={400}
                alt={"upload"}
              />
            </div>
            <p className="text-center">
              Upload your documents for users to find the context that they are
              looking for.
            </p>
            {/* Modal */}
            <Modal />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Modal() {
  const { preview } = usePreviewStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <ArrowUpToLine size={16} strokeWidth={2} />
          Upload
        </Button>
      </DialogTrigger>
      <DialogContent className="md:max-w-4xl h-[896px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Upload Document</DialogTitle>
        </DialogHeader>
        {preview ? <PDFViewer /> : <DropZone />}
      </DialogContent>
    </Dialog>
  );
}

export { Modal };
export default UploadContainer;
