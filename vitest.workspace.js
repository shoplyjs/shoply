import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
//   "./vite.config.ts",
//   "./e2e-common/vitest.config.bench.ts",
  "./e2e-common/vitest.config.mts",
  "./packages/webhook-plugin/vitest.config.mts",
  "./packages/common/vitest.config.mts",
  "./packages/cli/vitest.config.mts",
  "./packages/core/vitest.config.mts",
  "./packages/email-plugin/vitest.config.mts"
])
