# React SVG Component

This is a library that converts a svg into a React component.

Either, you pass an external svg as a value to the "svgElement" prop OR use the in built svgs by passing the value to the "name props".

This component imports the inbuilt svgs asynchronously. Therfore, it will not bundle all the svgs as a single chunk.

Currently, there are only 5 svgs available in the library.

1. cancel
2. menu
3. search
4. settings
5. star

To use inbuilt svgs

```javascript
<SvgComponent testId="cancel" name="cancel" />
<SvgComponent testId="search" name="search" />
```

To use custom svgs

```javascript
<SvgComponent
  testId="menu-3"
  svgElement={
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#5f6368"
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  }
/>
```
