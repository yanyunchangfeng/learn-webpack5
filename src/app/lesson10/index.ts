
const worker = new Worker(new URL('./deepThought.ts',import.meta.url))

worker.postMessage({
    question:'are you worker?'
})
worker.onmessage = ({ data: { answer,reactVersion } }) => {
    console.log('answer',answer);
    console.log('reactVersion',reactVersion);
  };