export const foo = "foo";

const mayHaveSideEffect = (greeting: string) => {
  fetch("/api");
  console.log('mayHaveSideEffect')
  return `${greeting}!!`;
};
let bool = false;
const rej = async () => {
  bool = true
  // const res = Math.random() > 0.5 ? Promise.reject('error') : Promise.resolve('success')
  // await res
  // await Math.random() > 0.5 ? Promise.reject('error') : Promise.resolve('success')
  await (Math.random() > 0.5 ? Promise.reject('error') : Promise.resolve('success'))
  bool = false;
  console.log('delete file success')
}
const update = async () => {
  console.log('update state success')
}

const doTry = async () => {
  try {
    if (true) {
      if (!bool) {
        await rej()
        await update()
        return
      }
      bool = false
      console.log('我触发')
    }
  } catch (err) {
    console.log(err, 'err')
  }
  console.log('我出发')
}
doTry()
export const bar = /*#__PURE__*/ mayHaveSideEffect("Hello");