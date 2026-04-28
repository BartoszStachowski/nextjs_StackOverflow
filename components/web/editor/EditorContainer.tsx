"use client";

import type { Value } from "platejs";

import {
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
} from "@platejs/basic-nodes/react";

import { Plate, PlateContent, usePlateEditor } from "platejs/react";
import { FixedToolbar } from "@/components/ui/fixed-toolbar";
import { MarkToolbarButton } from "@/components/ui/mark-toolbar-button";
import { TooltipProvider } from "@/components/ui/tooltip";

const initialValue: Value = [
  {
    type: "p",
    children: [
      { text: "Hello! Try out the " },
      { text: "bold", bold: true },
      { text: ", " },
      { text: "italic", italic: true },
      { text: ", and " },
      { text: "underline", underline: true },
      { text: " formatting." },
    ],
  },
];

const EditorContainer = () => {
  const editor = usePlateEditor({
    plugins: [BoldPlugin, ItalicPlugin, UnderlinePlugin],
    value: initialValue,
  });

  return (
    <TooltipProvider>
      <Plate editor={editor}>
        <FixedToolbar className="flex justify-start gap-2">
          <MarkToolbarButton nodeType="bold" tooltip="Bold">
            B
          </MarkToolbarButton>

          <MarkToolbarButton nodeType="italic" tooltip="Italic">
            I
          </MarkToolbarButton>

          <MarkToolbarButton nodeType="underline" tooltip="Underline">
            U
          </MarkToolbarButton>
        </FixedToolbar>

        <PlateContent
          className="min-h-[140px] px-6 py-4 outline-none"
          placeholder="Type your amazing content here..."
        />
      </Plate>
    </TooltipProvider>
  );
};

export default EditorContainer;
