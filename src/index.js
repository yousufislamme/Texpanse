"use client"
import { useEffect, useState } from "react";

export const useCaseConverter = (originalString, colors) => {
   const [convertedString, setConvertedString] = useState(originalString);
   const [colorClasses, setColorClasses] = useState('');

   useEffect(() => {
      const intervalId = setInterval(() => {
         const { convertedString, colorClasses } = convertCase(originalString, colors);
         setConvertedString(convertedString);
         setColorClasses(colorClasses);
      }, 1000);

      return () => clearInterval(intervalId);
   }, [originalString, colors]);

   const convertCase = (str, colors) => {
      let convertedString = '';
      let colorClasses = '';
      for (let i = 0; i < str.length; i++) {
         const char = str[i];
         const convertToUpperCase = Math.random() < 0.5;
         if (convertToUpperCase) {
            convertedString += char.toUpperCase();
         } else {
            convertedString += char.toLowerCase();
         }
         const randomColorClass = colors[Math.floor(Math.random() * colors.length)];
         colorClasses += randomColorClass + ' ';
      }
      return { convertedString, colorClasses };
   };

   return { convertedString, colorClasses };
};
