import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogClose,
} from "./ui/dialog";
import { X } from "lucide-react";
interface ImageDialogProps {
  src: string;
  alt?: string;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ src, alt }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className="cursor-pointer rounded-lg object-cover w-full h-72 transition hover:opacity-80"
        />
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <div className="w-full flex items-center justify-center fixed top-0 left-0 z-50 h-full p-4">
          <DialogContent>
            <div className="w-full flex justify-center relative">
              <img
                src={src}
                alt={alt}
                className="max-h-[80vh] object-contain rounded-lg"
              />
              <DialogClose className="absolute top-2 right-2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition">
                <X className="size-8" />
              </DialogClose>
            </div>
          </DialogContent>
        </div>
      </DialogPortal>
    </Dialog>
  );
};

export default ImageDialog;
