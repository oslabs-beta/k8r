const dashboards = {
  nodes: 'node-exporter-nodes',
  prom: 'prometheus-overview',
  api: 'kubernetes-api-server',
  kubelet: 'kuberenetes-kubelet',
}

const kubeletMetrics = {
  runningKubelets: {
    name: 'Running Kubelets',
    dashboard: dashboards.kubelet,
    panel: 2,
    description: ''
  },
  runningPods: {
    name: 'Running Pods',
    dashboard: dashboards.kubelet,
    panel: 3,
    description: ''
  },
  runningContainers: {
    name: 'Running Containers',
    dashboard: dashboards.kubelet,
    panel: 4,
    description: ''
  },
  actualVolumeCount: {
    name: 'Actual Volume Count',
    dashboard: dashboards.kubelet,
    panel: 5,
    description: ''
  },
  desiredVolumeCount: {
    name: 'Desired Volume Count',
    dashboard: dashboards.kubelet,
    panel: 6,
    description: ''
  },
  configErrorCount: {
    name: 'Config Error Count',
    dashboard: dashboards.kubelet,
    panel: 7,
    description: ''
  },
  operationRate: {
    name: 'Operation Rate',
    dashboard: dashboards.kubelet,
    panel: 8,
    description: ''
  },
  operationErrorRate: {
    name: 'Operation Error Rate',
    dashboard: dashboards.kubelet,
    panel: 9,
    description: ''
  },
  operationDuration: {
    name: 'Operation duration 99th quantile',
    dashboard: dashboards.kubelet,
    panel: 10,
    description: ''
  },
  podStartRate: {
    name: 'Pod Start Rate',
    dashboard: dashboards.kubelet,
    panel: 11,
    description: ''
  },
  podStartDuration: {
    name: 'Pod Start Duration',
    dashboard: dashboards.kubelet,
    panel: 12,
    description: ''
  },
  storageOperationRate: {
    name: 'Storage Operation Rate',
    dashboard: dashboards.kubelet,
    panel: 13,
    description: ''
  },
  storageOperationError: {
    name: 'Storage Operation Error Rate',
    dashboard: dashboards.kubelet,
    panel: 14,
    description: ''
  },
  storageOperationDuration: {
    name: 'Storage Operation Duration 99th quantile',
    dashboard: dashboards.kubelet,
    panel: 15,
    description: ''
  },
  cGroupManagerOperationRate: {
    name: 'Cgroup manager operation rate',
    dashboard: dashboards.kubelet,
    panel: 16,
    description: ''
  },
  cGroupManagerQuantile: {
    name: 'Cgroup manager 99th quantile',
    dashboard: dashboards.kubelet,
    panel: 17,
    description: ''
  },
  plegRelistRate: {
    name: 'PLEG relist rate',
    dashboard: dashboards.kubelet,
    panel: 18,
    description: ''
  },
  plegRelistInterval: {
    name: 'PLEG relist interval',
    dashboard: dashboards.kubelet,
    panel: 19,
    description: ''
  },
  plegRelistDuration: {
    name: 'PLEG relist duration',
    dashboard: dashboards.kubelet,
    panel: 20,
    description: ''
  },
  rpcRate: {
    name: 'RPC Rate',
    dashboard: dashboards.kubelet,
    panel: 21,
    description: ''
  },
  requestDuration: {
    name: 'Request duration 99th quantile',
    dashboard: dashboards.kubelet,
    panel: 22,
    description: ''
  },
  memory: {
    name: 'Memory',
    dashboard: dashboards.kubelet,
    panel: 23,
    description: ''
  },
  cpuUsage: {
    name: 'Memory',
    dashboard: dashboards.kubelet,
    panel: 24,
    description: ''
  },
  goroutines: {
    name: 'Goroutines',
    dashboard: dashboards.kubelet,
    panel: 25,
    description: ''
  },
}

const prometheusMetrics = {
  prometheusStats: {
    name: 'Prometheus Stats',
    dashboard: dashboards.prom,
    panel: 1,
    description: ''
  },
  targetSync: {
    name: 'Target Sync',
    dashboard: dashboards.prom,
    panel: 2,
    description: ''
  },
  targets: {
    name: 'Targets',
    dashboard: dashboards.prom,
    panel: 4,
    description: ''
  },
  averageScrapeIntervalDuration: {
    name: 'Average Scrape Interval Duration',
    dashboard: dashboards.prom,
    panel: 0,
    description: ''
  },
  scrapeFailures: {
    name: 'Scrape Failures',
    dashboard: dashboards.prom,
    panel: 5,
    description: ''
  },
  appendedSamples: {
    name: 'Appended Samples',
    dashboard: dashboards.prom,
    panel: 6,
    description: ''
  },
  headSeries: {
    name: 'Head Series',
    dashboard: dashboards.prom,
    panel: 7,
    description: ''
  },
  headChunks: {
    name: 'Head Chunks',
    dashboard: dashboards.prom,
    panel: 8,
    description: ''
  },
  queryRate: {
    name: 'Query Rate',
    dashboard: dashboards.prom,
    panel: 9,
    description: ''
  },
  stageDuration: {
    name: 'Stage Duration',
    dashboard: dashboards.prom,
    panel: 10,
    description: ''
  },
}

const nodeMetrics = {
  cpuUsage: {
    name: 'CPU Usage',
    dashboard: dashboards.nodes,
    panel: 2,
    description: ''
  },
  loadAverage: {
    name: 'Load Average',
    dashboard: dashboards.nodes,
    panel: 3,
    description: ''
  },
  memoryUsageLine: {
    name: 'Memory Usage (Line Graph)',
    dashboard: dashboards.nodes,
    panel: 4,
    description: ''
  },
  memoryUsageGauge: {
    name: 'Memory Usage (Gauge)',
    dashboard: dashboards.nodes,
    panel: 5,
    description: ''
  },
  diskIO: {
    name: 'Disk I/O',
    dashboard: dashboards.nodes,
    panel: 6,
    description: ''
  },
  diskUsage: {
    name: 'Disk Usage',
    dashboard: dashboards.nodes,
    panel: 7,
    description: ''
  },
  networkReceived: {
    name: 'Network Received',
    dashboard: dashboards.nodes,
    panel: 8,
    description: ''
  },
  networkTransmitted: {
    name: 'Network Transmitted',
    dashboard: dashboards.nodes,
    panel: 9,
    description: ''
  },
}

const apiServerMetrics = {
  availability: {
    name: 'Availability',
    dashboard: dashboards.api,
    panel: 3,
    description: ''
  },
  errorBudget: {
    name: 'ErrorBudget (30>d) > 99.000%',
    dashboard: dashboards.api,
    panel: 4,
    description: ''
  },
  readAvailability: {
    name: 'Read Availiability (30d)',
    dashboard: dashboards.api,
    panel: 5,
    description: ''
  },
  readSliRequests: {
    name: 'Read SLI - Requests',
    dashboard: dashboards.api,
    panel: 6,
    description: ''
  },
  readSliErrors: {
    name: 'Read SLI - Errors',
    dashboard: dashboards.api,
    panel: 7,
    description: ''
  },
  readSliDuration: {
    name: 'Read SLI - Duration',
    dashboard: dashboards.api,
    panel: 8,
    description: ''
  },
  writeAvailability: {
    name: 'Availability',
    dashboard: dashboards.api,
    panel: 9,
    description: ''
  },
  writeSliRequests: {
    name: 'Write SLI - Requests',
    dashboard: dashboards.api,
    panel: 10,
    description: ''
  },
  writeSliErros: {
    name: 'Write SLI - Errors',
    dashboard: dashboards.api,
    panel: 11,
    description: ''
  },
  writeSliDuration: {
    name: 'Write SLI - Duration',
    dashboard: dashboards.api,
    panel: 12,
    description: ''
  },
  workQueueAddRate: {
    name: 'Work Queue Add Rate',
    dashboard: dashboards.api,
    panel: 13,
    description: ''
  },
  workQueueDepth: {
    name: 'Work Queue Add Rate',
    dashboard: dashboards.api,
    panel: 14,
    description: ''
  },
  workQueueLatency: {
    name: 'Work Queue Add Rate',
    dashboard: dashboards.api,
    panel: 15,
    description: ''
  },
  memory: {
    name: 'Memory',
    dashboard: dashboards.api,
    panel: 16,
    description: ''
  },
  cpuUsage: {
    name: 'Memory',
    dashboard: dashboards.api,
    panel: 17,
    description: ''
  },
  goroutines: {
    name: 'Goroutines',
    dashboard: dashboards.api,
    panel: 18,
    description: ''
  },
}

const metricDetails = {
  kubeletMetrics,
  prometheusMetrics,
  nodeMetrics,
  apiServerMetrics
}

export default metricDetails;

// Sample reference: metricDetails.nodeMetrics.cpuUsage