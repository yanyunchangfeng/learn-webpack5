module.exports = (env) => {
    env = env.dev ? 'dev' : 'prod';
    return require(`./config/webpack.${env}`)
}