# Texpanse
Texpanse is a modern acronym that highlights `titles` or `keywords` its changes per 3 sec specific text colors per letter and randomly characters upper case to lowercase. <br>
> If you using 'Next.js' then use this `"use client"` at the top <br>
# [Texpanse demo](https://yousuf.vercel.app)


### Installation NPM Texpanse
```
npm i texpanse
```

```
import { useCaseConverter } from 'texpanse';

const Demo = () => {
   const originalString = "Bangladesh";
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
```
