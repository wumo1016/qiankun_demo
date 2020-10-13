module.exports = {
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
