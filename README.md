### Texpanse


import this line 
```
import { useCaseConverter } from 'Texpanse';


```

```
   const originalString = "Bangladesh";
   const colors = ['text-blue-500', 'text-purple-500', 'text-yellow-500'];
```

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
renderConvertedString(convertedString, colorClasses)
```