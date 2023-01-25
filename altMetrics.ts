const dashboards = {
  nodes: 'node-exporter-nodes',
  prom: 'prometheus-overview',
  api: 'kubernetes-api-server',
  kubelet: 'kuberenetes-kubelet',
}

const allMetrics = {
  cpuUsage: {
    fullName: 'CPU Usage',
    dashboard: dashboards.nodes,
    panel: 2,
    description: ''
  },
  loadAverage: {
    fullName: 'Load Average',
    dashboard: dashboards.nodes,
    panel: 3,
    description: ''
  },
  memoryUsageLine: {
    fullName: 'Memory Usage (Line Graph)',
    dashboard: dashboards.nodes,
    panel: 4,
    description: ''
  },
  memoryUsageGauge: {
    fullName: 'Memory Usage (Gauge)',
    dashboard: dashboards.nodes,
    panel: 5,
    description: ''
  },
  diskIO: {
    fullName: 'Disk I/O',
    dashboard: dashboards.nodes,
    panel: 6,
    description: ''
  },
  diskUsage: {
    fullName: 'Disk Usage',
    dashboard: dashboards.nodes,
    panel: 7,
    description: ''
  },
  networkReceived: {
    fullName: 'Network Received',
    dashboard: dashboards.nodes,
    panel: 8,
    description: ''
  },
  networkTransmitted: {
    fullName: 'Network Transmitted',
    dashboard: dashboards.nodes,
    panel: 9,
    description: ''
  },
  runningKubelets: {
    fullName: 'Running Kubelets',
    dashboard: dashboards.kubelet,
    panel: 2,
    description: ''
  },
  runningPods: {
    fullName: 'Running Pods',
    dashboard: dashboards.kubelet,
    panel: 3,
    description: ''
  },
  runningContainers: {
    fullName: 'Running Containers',
    dashboard: dashboards.kubelet,
    panel: 4,
    description: ''
  },
  actualVolumeCount: {
    fullName: 'Actual Volume Count',
    dashboard: dashboards.kubelet,
    panel: 5,
    description: ''
  },
  desiredVolumeCount: {
    fullName: 'Desired Volume Count',
    dashboard: dashboards.kubelet,
    panel: 6,
    description: ''
  },
  configErrorCount: {
    fullName: 'Config Error Count',
    dashboard: dashboards.kubelet,
    panel: 7,
    description: ''
  },
  operationRate: {
    fullName: 'Operation Rate',
    dashboard: dashboards.kubelet,
    panel: 8,
    description: ''
  },
  operationErrorRate: {
    fullName: 'Operation Error Rate',
    dashboard: dashboards.kubelet,
    panel: 9,
    description: ''
  },
  operationDuration: {
    fullName: 'Operation duration 99th quantile',
    dashboard: dashboards.kubelet,
    panel: 10,
    description: ''
  },
  podStartRate: {
    fullName: 'Pod Start Rate',
    dashboard: dashboards.kubelet,
    panel: 11,
    description: ''
  },
  podStartDuration: {
    fullName: 'Pod Start Duration',
    dashboard: dashboards.kubelet,
    panel: 12,
    description: ''
  },
  storageOperationRate: {
    fullName: 'Storage Operation Rate',
    dashboard: dashboards.kubelet,
    panel: 13,
    description: ''
  },
  storageOperationError: {
    fullName: 'Storage Operation Error Rate',
    dashboard: dashboards.kubelet,
    panel: 14,
    description: ''
  },
  storageOperationDuration: {
    fullName: 'Storage Operation Duration 99th quantile',
    dashboard: dashboards.kubelet,
    panel: 15,
    description: ''
  },
  cGroupManagerOperationRate: {
    fullName: 'Cgroup manager operation rate',
    dashboard: dashboards.kubelet,
    panel: 16,
    description: ''
  },
  cGroupManagerQuantile: {
    fullName: 'Cgroup manager 99th quantile',
    dashboard: dashboards.kubelet,
    panel: 17,
    description: ''
  },
  plegRelistRate: {
    fullName: 'PLEG relist rate',
    dashboard: dashboards.kubelet,
    panel: 18,
    description: ''
  },
  plegRelistInterval: {
    fullName: 'PLEG relist interval',
    dashboard: dashboards.kubelet,
    panel: 19,
    description: ''
  },
  plegRelistDuration: {
    fullName: 'PLEG relist duration',
    dashboard: dashboards.kubelet,
    panel: 20,
    description: ''
  },
  rpcRate: {
    fullName: 'RPC Rate',
    dashboard: dashboards.kubelet,
    panel: 21,
    description: ''
  },
  requestDuration: {
    fullName: 'Request duration 99th quantile',
    dashboard: dashboards.kubelet,
    panel: 22,
    description: ''
  },
  memory: {
    fullName: 'Memory',
    dashboard: dashboards.kubelet,
    panel: 23,
    description: ''
  },
  kubeletCpuUsage: {
    fullName: 'Memory',
    dashboard: dashboards.kubelet,
    panel: 24,
    description: ''
  },
  goroutines: {
    fullName: 'Goroutines',
    dashboard: dashboards.kubelet,
    panel: 25,
    description: ''
  },
  prometheusStats: {
    fullName: 'Prometheus Stats',
    dashboard: dashboards.prom,
    panel: 1,
    description: ''
  },
  targetSync: {
    fullName: 'Target Sync',
    dashboard: dashboards.prom,
    panel: 2,
    description: ''
  },
  targets: {
    fullName: 'Targets',
    dashboard: dashboards.prom,
    panel: 4,
    description: ''
  },
  averageScrapeIntervalDuration: {
    fullName: 'Average Scrape Interval Duration',
    dashboard: dashboards.prom,
    panel: 0,
    description: ''
  },
  scrapeFailures: {
    fullName: 'Scrape Failures',
    dashboard: dashboards.prom,
    panel: 5,
    description: ''
  },
  appendedSamples: {
    fullName: 'Appended Samples',
    dashboard: dashboards.prom,
    panel: 6,
    description: ''
  },
  headSeries: {
    fullName: 'Head Series',
    dashboard: dashboards.prom,
    panel: 7,
    description: ''
  },
  headChunks: {
    fullName: 'Head Chunks',
    dashboard: dashboards.prom,
    panel: 8,
    description: ''
  },
  queryRate: {
    fullName: 'Query Rate',
    dashboard: dashboards.prom,
    panel: 9,
    description: ''
  },
  stageDuration: {
    fullName: 'Stage Duration',
    dashboard: dashboards.prom,
    panel: 10,
    description: ''
  },
  availability: {
    fullName: 'Availability',
    dashboard: dashboards.api,
    panel: 3,
    description: ''
  },
  errorBudget: {
    fullName: 'ErrorBudget (30>d) > 99.000%',
    dashboard: dashboards.api,
    panel: 4,
    description: ''
  },
  readAvailability: {
    fullName: 'Read Availiability (30d)',
    dashboard: dashboards.api,
    panel: 5,
    description: ''
  },
  readSliRequests: {
    fullName: 'Read SLI - Requests',
    dashboard: dashboards.api,
    panel: 6,
    description: ''
  },
  readSliErrors: {
    fullName: 'Read SLI - Errors',
    dashboard: dashboards.api,
    panel: 7,
    description: ''
  },
  readSliDuration: {
    fullName: 'Read SLI - Duration',
    dashboard: dashboards.api,
    panel: 8,
    description: ''
  },
  writeAvailability: {
    fullName: 'Availability',
    dashboard: dashboards.api,
    panel: 9,
    description: ''
  },
  writeSliRequests: {
    fullName: 'Write SLI - Requests',
    dashboard: dashboards.api,
    panel: 10,
    description: ''
  },
  writeSliErros: {
    fullName: 'Write SLI - Errors',
    dashboard: dashboards.api,
    panel: 11,
    description: ''
  },
  writeSliDuration: {
    fullName: 'Write SLI - Duration',
    dashboard: dashboards.api,
    panel: 12,
    description: ''
  },
  workQueueAddRate: {
    fullName: 'Work Queue Add Rate',
    dashboard: dashboards.api,
    panel: 13,
    description: ''
  },
  workQueueDepth: {
    fullName: 'Work Queue Add Rate',
    dashboard: dashboards.api,
    panel: 14,
    description: ''
  },
  workQueueLatency: {
    fullName: 'Work Queue Add Rate',
    dashboard: dashboards.api,
    panel: 15,
    description: ''
  },
  apiMemory: {
    fullName: 'Memory',
    dashboard: dashboards.api,
    panel: 16,
    description: ''
  },
  apiCpuUsage: {
    fullName: 'Memory',
    dashboard: dashboards.api,
    panel: 17,
    description: ''
  },
  apiGoroutines: {
    fullName: 'Go Routines',
    dashboard: dashboards.api,
    panel: 18,
    description: ''
  },
}

export default allMetrics;

// Sample reference: allMetrics.cpuUsage