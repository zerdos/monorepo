import { editor } from "@/external/monaco-editor";
import { useThrottle } from "@uidotdev/usehooks";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";

interface DiffEditorProps {
  original: string;
  modified: string;
  language?: string;
  readOnly?: boolean;
  minHeight?: number;
  maxHeight?: number;
}

const minHeight = 200;
const maxHeight = 600;

const calculateHeight = (text: string) => {
  const lines = text.split(/\r\n|\r|\n/).length;
  return Math.min(maxHeight, Math.max(minHeight, lines * 20));
};


export const DiffEditor: React.FC<DiffEditorProps> = memo(({
  original,
  modified: _modified,
  language = "text/plain",
  readOnly = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const diffEditorRef = useRef<editor.IStandaloneDiffEditor | null>(null);
  const [editorHeight, setEditorHeight] = useState(minHeight);  
  const modified = useThrottle(_modified, 200);



  useEffect(() => {
    if (containerRef.current && !diffEditorRef.current) {
      console.log("Creating diff editor");
      const diffEditor = editor.createDiffEditor(containerRef.current, {
        diffAlgorithm: "advanced",
        readOnly,
        diffWordWrap: "on",
        wordWrap: "on",
        wordWrapColumn: 80,
        automaticLayout: false,
        onlyShowAccessibleDiffViewer: true,
        hideUnchangedRegions: {
          enabled: false,
        },
        lineNumbers: "off",
        scrollBeyondLastLine: false,
        minimap: { enabled: false },
        renderSideBySide: false,
        renderOverviewRuler: false,
        theme: "vs-dark",
      });

      diffEditor.setModel({
        original: editor.createModel(original, language),
        modified: editor.createModel(modified, language),
      });

      diffEditorRef.current = diffEditor;
      diffEditor.layout();
    }

    return () => {
      if (diffEditorRef.current) {
        
        const diffModels = diffEditorRef.current.getModel();
        diffEditorRef.current.dispose();
        if (diffModels) {
          diffModels.original.dispose();
          diffModels.modified.dispose();
        }
        diffEditorRef.current = null;

        const originalHeight = calculateHeight(original);
        const modifiedHeight = calculateHeight(modified);
        setEditorHeight(Math.max(originalHeight, modifiedHeight));  
      }
    };
  }, [language, readOnly]); // Only run when language or readOnly changes

  useEffect(()=> {
    if (diffEditorRef.current) {
      const diffModels = diffEditorRef.current.getModel();
      if (diffModels) {
        if (diffModels.original.getValue() !== original) {
          console.log("Setting original model");
          diffModels.original.setValue(original);
        }

        if (diffModels.modified.getValue() !== modified) {
          console.log("Setting modified model");
          diffModels.modified.setValue(modified);
        }
      }
      }}, [original, modified]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: `${editorHeight}px`,
        maxHeight: `${maxHeight}px`,
        border: "1px solid #ccc",
        borderRadius: "4px",
        overflow: "hidden",
      }}
    />
  );
});

DiffEditor.displayName = "DiffEditor";

export default DiffEditor;