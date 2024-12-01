import { defineConfig } from 'vitest/config';
import path from 'path';
import swc from 'unplugin-swc';

export default defineConfig({
    test: {
        include: ['**/*.e2e-spec.ts', '**/*.test.{js,ts}'], // Include all relevant test files
        typecheck: {
            tsconfig: path.join(__dirname, 'tsconfig.json'), // Path to your main tsconfig
        },
    },
    plugins: [
        // SWC required to support decorators used in test plugins
        // See https://github.com/vitest-dev/vitest/issues/708#issuecomment-1118628479
        // Vite plugin
        swc.vite({
            jsc: {
                transform: {
                    // See https://github.com/vendure-ecommerce/vendure/issues/2099
                    useDefineForClassFields: false,
                },
            },
        }),
    ],
});
