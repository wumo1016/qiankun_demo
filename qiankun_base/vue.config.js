module.exports = {
    productionSourceMap: false,
    devServer:{
        port:8003
    },
    configureWebpack:{
        output:{
            library:'qiankun_base',
            libraryTarget:'umd'
        }
    },
}
