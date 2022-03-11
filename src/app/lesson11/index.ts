export const foo = "foo";

const mayHaveSideEffect = (greeting:string) => {
    fetch("/api");
    console.log('mayHaveSideEffect')
  return `${greeting}!!`;
};

export const bar = /*#__PURE__*/ mayHaveSideEffect("Hello");