import React from 'react'
import { useCaseConverter } from 'texpanse';

const Demo = () => {
   // add your title on originalString
   const originalString = "Bangladesh";
   // add multiples colors using tailwindCss classes
   const colors = ['text-blue-500', 'text-purple-500', 'text-yellow-500'];


   const { convertedString, colorClasses } = useCaseConverter(originalString, colors);
   const renderConvertedString = (convertedString, colorClasses) => {
      const colorClassesArray = colorClasses.trim().split(' ');
      return convertedString.split('').map((char, index) => (
         <span key={index} className={colorClassesArray[index % colorClassesArray.length]}>{char}</span>
      ));
   };
   return (
      <div>
         <h1> {renderConvertedString(convertedString, colorClasses)} </h1>
      </div>
   )
}

export default Demo;