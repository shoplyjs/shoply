const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;
const deps = require('./package.json').dependencies;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, 'tsconfig.json'), [
    'react-dom',
    'react',
    'rxjs',
    'tslib',
]);

module.exports = {
    output: {
        uniqueName: 'shoplyjsAdmin',
        publicPath: 'auto',
    },
    optimization: {
        runtimeChunk: false,
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        },
    },
    experiments: {
        outputModule: true,
    },
    plugins: [
        new ModuleFederationPlugin({
            library: { type: 'module' },

            // For remotes (please adjust)
            // name: "shoplyjsAdmin",
            // filename: "remoteEntry.js",
            // exposes: {
            //     './Component': './/src/app/app.component.ts',
            // },

            // For hosts (please adjust)
            // remotes: {
            //     "mfe1": "http://localhost:3000/remoteEntry.js",

            // },

            remotes: {
                reactApp: 'reactApp@http://localhost:8081/remoteEntry.js',
            },

            shared: share({
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps.react,
                },
                'react-dom/client': {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                },

                ...sharedMappings.getDescriptors(),
            }),
        }),
        sharedMappings.getPlugin(),
    ],
};
