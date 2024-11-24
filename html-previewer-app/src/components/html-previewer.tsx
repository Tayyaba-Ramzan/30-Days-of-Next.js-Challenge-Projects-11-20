"use client"; 

import React, { useState, ChangeEvent } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { predefinedHtml } from "./predefinedHtml";

export default function HTMLPreviewComponent() {
    const [htmlCode, setHtmlCode] = useState<string>("");
    const [previewHtml, setPreviewHtml] = useState<string>("");

    const handlePreview = (): void => {
        setPreviewHtml(htmlCode);
    };

    const handlePasteHtml = (): void => {
        setHtmlCode(predefinedHtml);
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setHtmlCode(e.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1E293B] via-[#374151] to-[#111827] text-white">
  <div className="w-full max-w-4xl p-4 sm:p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-gray-100">
    <h1 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-white">
       HTML Previewer 
    </h1>
    <p className="text-gray-300 mb-8 text-center text-base sm:text-lg">
      Experience real-time HTML rendering in a beautifully crafted interface!
    </p>
    <div className="grid gap-6 sm:grid-cols-1 grid-cols-1">
      <Textarea
        value={htmlCode}
        onChange={handleChange}
        placeholder="Write your HTML code here..."
        className="p-4 rounded-xl border border-gray-400/30 focus:ring-4 focus:ring-blue-500/50 bg-white/10 backdrop-blur-md text-white placeholder-gray-300"
        rows={8}
      />
      
      {/* Buttons are placed below the Textarea */}
      <div className="flex justify-center gap-4 mt-6"> {/* mt-6 adds space above the buttons */}
      <Button
  onClick={handlePreview}
  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
>
  Generate Preview
</Button>

<Button
  onClick={handlePasteHtml}
  className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-950 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 w-full sm:w-auto"
>
  Paste HTML
</Button>

      </div>

      {/* Preview Section */}
      <div className="p-6 rounded-xl border border-gray-400/30 bg-white/10 backdrop-blur-md text-gray-100 mt-6">
        <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
      </div>
    </div>
  </div>
</div>



    );
}