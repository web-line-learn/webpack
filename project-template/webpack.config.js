const path=require('path');

const config={
    devtool: 'inline-source-map',
	entry:'./src/index.js',
	output:{
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	}
};

module.exports=config
