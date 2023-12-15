import React, { useState, ChangeEvent } from "react";

interface FormComponentProps { 
  onValueChange?: (value: string) => void; 
} 
 
export function FormComponent({ onValueChange }: FormComponentProps) { 
  const [value, setValue] = useState<string>(""); 
 
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { 
    const newValue = event.target.value; 
    setValue(newValue); 
 
    if (onValueChange) { 
      onValueChange(newValue); 
    } 
  }; 
 
  return <input type="text" value={value} onChange={handleChange} />; 
} 

