### Texpanse


1 . import this line 
if you using 'Next.js' then use this '"use client"'
```
import { useCaseConverter } from 'Texpanse';
```
2 . add your title
```
   const originalString = "Bangladesh";
   const colors = ['text-blue-500', 'text-purple-500', 'text-yellow-500'];
```
3 . and add this convertedString , colorClasses
```
   const { convertedString, colorClasses } = useCaseConverter(originalString, colors);

   const renderConvertedString = (convertedString, colorClasses) => {
      const colorClassesArray = colorClasses.trim().split(' ');
      return convertedString.split('').map((char, index) => (
         <span key={index} className={colorClassesArray[index % colorClassesArray.length]}>{char}</span>
      ));
   };
```
return 
```
<h1> renderConvertedString(convertedString, colorClasses) </h1>
```
