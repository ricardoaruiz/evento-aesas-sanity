import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vq1wc9fu',
    dataset: 'production'
  },
  deployment: {
    appId: 'ufs415eqciyv56ep7zniosgk',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
