import { DashboardUIds } from './types'

const dashboards = {
  nodeExporter: {
    dashboardUIdKey: 'nodeExporterUId',
    grafanaLinkDText: 'node-exporter-nodes'
  },
  prometheus: {
    dashboardUIdKey: 'prometheusUId',
    grafanaLinkDText: 'prometheus-overview',
  },
  apiServer: {
    dashboardUIdKey: 'apiServerUId',
    grafanaLinkDText: 'kubernetes-api-server',
  },
  kubelet: {
    dashboardUIdKey: 'kubeletUId',
    grafanaLinkDText: 'kuberenetes-kubelet',
  }
}

// Sample reference: allMetrics.cpuUsage.fullName
const allMetrics = {
  cpuUsage: {
    fullName: 'CPU Usage',
    dashboard: 'nodeExporter',
    panel: 2,
    description: ''
  },
  loadAverage: {
    fullName: 'Load Average',
    dashboard: 'nodeExporter',
    panel: 3,
    description: ''
  },
  memoryUsageLine: {
    fullName: 'Memory Usage (Line Graph)',
    dashboard: 'nodeExporter',
    panel: 4,
    description: ''
  },
  memoryUsageGauge: {
    fullName: 'Memory Usage (Gauge)',
    dashboard: 'nodeExporter',
    panel: 5,
    description: ''
  },
  diskIO: {
    fullName: 'Disk I/O',
    dashboard: 'nodeExporter',
    panel: 6,
    description: ''
  },
  diskUsage: {
    fullName: 'Disk Usage',
    dashboard: 'nodeExporter',
    panel: 7,
    description: ''
  },
  networkReceived: {
    fullName: 'Network Received',
    dashboard: 'nodeExporter',
    panel: 8,
    description: ''
  },
  networkTransmitted: {
    fullName: 'Network Transmitted',
    dashboard: 'nodeExporter',
    panel: 9,
    description: ''
  },
  runningKubelets: {
    fullName: 'Running Kubelets',
    dashboard: 'kubelet',
    panel: 2,
    description: ''
  },
  runningPods: {
    fullName: 'Running Pods',
    dashboard: 'kubelet',
    panel: 3,
    description: ''
  },
  runningContainers: {
    fullName: 'Running Containers',
    dashboard: 'kubelet',
    panel: 4,
    description: ''
  },
  actualVolumeCount: {
    fullName: 'Actual Volume Count',
    dashboard: 'kubelet',
    panel: 5,
    description: ''
  },
  desiredVolumeCount: {
    fullName: 'Desired Volume Count',
    dashboard: 'kubelet',
    panel: 6,
    description: ''
  },
  configErrorCount: {
    fullName: 'Config Error Count',
    dashboard: 'kubelet',
    panel: 7,
    description: ''
  },
  operationRate: {
    fullName: 'Operation Rate',
    dashboard: 'kubelet',
    panel: 8,
    description: ''
  },
  operationErrorRate: {
    fullName: 'Operation Error Rate',
    dashboard: 'kubelet',
    panel: 9,
    description: ''
  },
  operationDuration: {
    fullName: 'Operation duration 99th quantile',
    dashboard: 'kubelet',
    panel: 10,
    description: ''
  },
  podStartRate: {
    fullName: 'Pod Start Rate',
    dashboard: 'kubelet',
    panel: 11,
    description: ''
  },
  podStartDuration: {
    fullName: 'Pod Start Duration',
    dashboard: 'kubelet',
    panel: 12,
    description: ''
  },
  storageOperationRate: {
    fullName: 'Storage Operation Rate',
    dashboard: 'kubelet',
    panel: 13,
    description: ''
  },
  storageOperationError: {
    fullName: 'Storage Operation Error Rate',
    dashboard: 'kubelet',
    panel: 14,
    description: ''
  },
  storageOperationDuration: {
    fullName: 'Storage Operation Duration 99th quantile',
    dashboard: 'kubelet',
    panel: 15,
    description: ''
  },
  cGroupManagerOperationRate: {
    fullName: 'Cgroup manager operation rate',
    dashboard: 'kubelet',
    panel: 16,
    description: ''
  },
  cGroupManagerQuantile: {
    fullName: 'Cgroup manager 99th quantile',
    dashboard: 'kubelet',
    panel: 17,
    description: ''
  },
  plegRelistRate: {
    fullName: 'PLEG relist rate',
    dashboard: 'kubelet',
    panel: 18,
    description: ''
  },
  plegRelistInterval: {
    fullName: 'PLEG relist interval',
    dashboard: 'kubelet',
    panel: 19,
    description: ''
  },
  plegRelistDuration: {
    fullName: 'PLEG relist duration',
    dashboard: 'kubelet',
    panel: 20,
    description: ''
  },
  rpcRate: {
    fullName: 'RPC Rate',
    dashboard: 'kubelet',
    panel: 21,
    description: ''
  },
  requestDuration: {
    fullName: 'Request duration 99th quantile',
    dashboard: 'kubelet',
    panel: 22,
    description: ''
  },
  memory: {
    fullName: 'Memory',
    dashboard: 'kubelet',
    panel: 23,
    description: ''
  },
  kubeletCpuUsage: {
    fullName: 'CPU Usage',
    dashboard: 'kubelet',
    panel: 24,
    description: ''
  },
  goroutines: {
    fullName: 'Goroutines',
    dashboard: 'kubelet',
    panel: 25,
    description: ''
  },
  prometheusStats: {
    fullName: 'Prometheus Stats',
    dashboard: 'prometheus',
    panel: 1,
    description: ''
  },
  targetSync: {
    fullName: 'Target Sync',
    dashboard: 'prometheus',
    panel: 2,
    description: ''
  },
  targets: {
    fullName: 'Targets',
    dashboard: 'prometheus',
    panel: 4,
    description: ''
  },
  averageScrapeIntervalDuration: {
    fullName: 'Average Scrape Interval Duration',
    dashboard: 'prometheus',
    panel: 0,
    description: ''
  },
  scrapeFailures: {
    fullName: 'Scrape Failures',
    dashboard: 'prometheus',
    panel: 5,
    description: ''
  },
  appendedSamples: {
    fullName: 'Appended Samples',
    dashboard: 'prometheus',
    panel: 6,
    description: ''
  },
  headSeries: {
    fullName: 'Head Series',
    dashboard: 'prometheus',
    panel: 7,
    description: ''
  },
  headChunks: {
    fullName: 'Head Chunks',
    dashboard: 'prometheus',
    panel: 8,
    description: ''
  },
  queryRate: {
    fullName: 'Query Rate',
    dashboard: 'prometheus',
    panel: 9,
    description: ''
  },
  stageDuration: {
    fullName: 'Stage Duration',
    dashboard: 'prometheus',
    panel: 10,
    description: ''
  },
  availability: {
    fullName: 'Availability',
    dashboard: 'apiServer',
    panel: 3,
    description: ''
  },
  errorBudget: {
    fullName: 'ErrorBudget (30>d) > 99.000%',
    dashboard: 'apiServer',
    panel: 4,
    description: ''
  },
  readAvailability: {
    fullName: 'Read Availiability (30d)',
    dashboard: 'apiServer',
    panel: 5,
    description: ''
  },
  readSliRequests: {
    fullName: 'Read SLI - Requests',
    dashboard: 'apiServer',
    panel: 6,
    description: ''
  },
  readSliErrors: {
    fullName: 'Read SLI - Errors',
    dashboard: 'apiServer',
    panel: 7,
    description: ''
  },
  readSliDuration: {
    fullName: 'Read SLI - Duration',
    dashboard: 'apiServer',
    panel: 8,
    description: ''
  },
  writeAvailability: {
    fullName: 'Availability',
    dashboard: 'apiServer',
    panel: 9,
    description: ''
  },
  writeSliRequests: {
    fullName: 'Write SLI - Requests',
    dashboard: 'apiServer',
    panel: 10,
    description: ''
  },
  writeSliErros: {
    fullName: 'Write SLI - Errors',
    dashboard: 'apiServer',
    panel: 11,
    description: ''
  },
  writeSliDuration: {
    fullName: 'Write SLI - Duration',
    dashboard: 'apiServer',
    panel: 12,
    description: ''
  },
  workQueueAddRate: {
    fullName: 'Work Queue Add Rate',
    dashboard: 'apiServer',
    panel: 13,
    description: ''
  },
  workQueueDepth: {
    fullName: 'Work Queue Add Rate',
    dashboard: 'apiServer',
    panel: 14,
    description: ''
  },
  workQueueLatency: {
    fullName: 'Work Queue Add Rate',
    dashboard: 'apiServer',
    panel: 15,
    description: ''
  },
  apiMemory: {
    fullName: 'Memory',
    dashboard: 'apiServer',
    panel: 16,
    description: ''
  },
  apiCpuUsage: {
    fullName: 'CPU Usage',
    dashboard: 'apiServer',
    panel: 17,
    description: ''
  },
  apiGoroutines: {
    fullName: 'Go Routines',
    dashboard: 'apiServer',
    panel: 18,
    description: ''
  },
}

export function linkGenerator(dashboardUIDs: DashboardUIds, metric: string, grafanaUrl?: string, refresh?: number, theme?: string) {
  if (!grafanaUrl) grafanaUrl = 'http://localhost:3000';
  if (!refresh) refresh = 30;
  if (!theme) theme = 'light'

  // TODO: Add time filters.
  // Time increments are at the end of the link like this: viewPanel=3&from=1674667203832&to=1674670803832
  // Time is in milliseconds. If no time is given, the panel defaults to the last hour.

  // Get dashboard UID for the appropriate dashboard for that metric
  const dashboardUid: string = dashboardUIDs[dashboards[allMetrics[metric].dashboard].dashboardUIdKey];

  // Get the text that needs to go in the link for that dashboard
  const dashboardText: string = dashboards[allMetrics[metric].dashboard].grafanaLinkDText;

  // Get the panel ID from the metrics option and convert to string to insert into link
  const panelId: string = allMetrics[metric].panel.toString();

  // Compile link together
  const link: string = `${grafanaUrl}/d-solo/${dashboardUid}/${dashboardText}?orgId=1&refresh=${refresh}s&theme=${theme}&panelId=${panelId}`

  return link;

  //Sample Link: http://localhost:3000/d-solo/2O9SNYo4k/node-exporter-nodes?orgId=1&refresh=30s&theme=light&panelId=5
}

export default allMetrics;