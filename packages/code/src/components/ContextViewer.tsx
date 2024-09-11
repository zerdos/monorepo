import React, { useState, useEffect } from 'react';
import { ProjectContext } from '@/lib/context-manager';
import { useContext } from '../hooks/useContext';

interface ContextViewerProps {
  codeSpace: string;
}

export const ContextViewer: React.FC<ContextViewerProps> = ({ codeSpace }) => {
  const { getFullContext, updateContext } = useContext(codeSpace);
  const [context, setContext] = useState<ProjectContext>(getFullContext());

  useEffect(() => {
    setContext(getFullContext());
  }, [getFullContext]);

  const handleChange = (key: keyof ProjectContext, value: string) => {
    updateContext(key, value);
    setContext(prevContext => ({ ...prevContext, [key]: value }));
  };

  return (
    <div className="context-viewer">
      <h2>Project Context</h2>
      {(Object.keys(context) as Array<keyof ProjectContext>).map((key) => (
        <div key={key} className="context-item">
          <label htmlFor={key}>{key}:</label>
          <textarea
            id={key}
            value={context[key]}
            onChange={(e) => handleChange(key, e.target.value)}
            rows={3}
          />
        </div>
      ))}
    </div>
  );
};