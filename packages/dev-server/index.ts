import { bootstrap, JobQueueService } from '@shoplyjs/core';

import { devConfig } from './dev-config';

/**
 * This bootstraps the dev server, used for testing Vendure during development.
 */
bootstrap(devConfig)
    .then(async app => {
        if (process.env.RUN_JOB_QUEUE === '1') {
            await app.get(JobQueueService).start();
        }
    })
    .catch(err => {
        // eslint-disable-next-line
        console.log(err);
        process.exit(1);
    });
