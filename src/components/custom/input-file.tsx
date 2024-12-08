import * as React from "react";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

interface InputFileProps {
  className?: string;
}

const InputFile: React.FC<InputFileProps> = ({ className }: InputFileProps) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  console.log(fileInputRef.current?.files);

  // const [fileName, setFileName] = useState<string | null>(null);

  if (fileInputRef) {
    console.log("OK file");
  } else {
    console.log("baigan");
  }

  // if (fileInputRef.current?.files && fileInputRef.current.files[0]) {
  //   const uploadedFile = fileInputRef.current.files[0];
  //   setFileName(uploadedFile.name); // Access the file name
  // } else {
  //   console.log(fileInputRef ? "OK file" : "baigan");
  // }

  return (
    <div className="w-full h-40 flex flex-col items-center justify-center px-0 py-2 overflow-hidden">
      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
        hidden
      />
      <div
        className={cn(
          "flex items-center justify-center gap-2 bg-quaternary/5 hover:bg-quaternary/10 rounded-xl border-2 border-dashed border-quaternary text-quaternary font-semibold w-full h-full cursor-pointer",
          className,
        )}
        onClick={() => {
          fileInputRef.current?.click();
        }}
      >
        <ExternalLink size={"1.4em"} strokeWidth={2} /> Upload file
      </div>
    </div>
  );
};

export default InputFile;
