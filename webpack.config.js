module.exports = (env,argv) => {
    console.log(env, 'env')
    console.log(argv,'argv')
    env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod';
    return require(`./config/webpack.${env}`)
}