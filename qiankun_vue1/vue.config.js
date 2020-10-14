module.exports = {
    // publicPath: process.env.NODE_ENV === 'development' ? '/' : '/qiankun_vue1',
    productionSourceMap: false,
    devServer:{
        port:8004,
        headers:{
            'Access-Control-Allow-Origin':'*'
        }
    },
    configureWebpack:{
        output:{
            library:'qiankun_vue1',
            libraryTarget:'umd'
        }
    }
}
