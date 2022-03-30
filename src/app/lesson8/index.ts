const OtherModule = await import('./other');
// import React from 'react';
// TopAwait webpack5的新语法 

// React.lazy  实现原理

// function lazy(fn) {
//     return class extends React.Component{
//         state = { Component: null };
//         componentDidMount() {
//             fn().then(result => {
//                 this.setState({Component:result.default})
//             })
//         }
//         render() {
//             let { Component } = this.state
//             return Component? <Component/>:null;
//         }
//      }
// }
export { }