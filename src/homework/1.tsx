import React, { useEffect, useRef } from "react"; 
interface Props { 
  children: React.ReactNode; 
  onContentEndVisible: () => void; 
} 
 
export function Observer({ children, onContentEndVisible }: Props) { 
  const endContentRef = useRef<HTMLDivElement>(null); 
 
  useEffect(() => { 
    interface IOptions { 
      root?: null; 
      rootMargin: string; 
      threshold: number; 
    } 
 
    const options: IOptions = { 
      root: null, 
      rootMargin: "0px", 
      threshold: 0.1, 
    }; 
 
    const observer = new IntersectionObserver((entries) => { 
      entries.forEach((entry) => { 
        if (entry.intersectionRatio > 0) { 
          onContentEndVisible(); 
          observer.disconnect(); 
        } 
      }); 
    }, options); 
 
    if (endContentRef.current) { 
      observer.observe(endContentRef.current); 
    } 
 
    return () => { 
      observer.disconnect(); 
    }; 
  }, [onContentEndVisible]); 
 
  return ( 
    <div> 
      {children} 
      <div ref={endContentRef} /> 
    </div> 
  ); 
}
