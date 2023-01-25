export type DashboardUIds = {
  nodeExporterUId: {
    dashboardUIdKey: string,
    grafanaLinkDText: string,
  },
  prometheusUId: {
    dashboardUIdKey: string,
    grafanaLinkDText: string,
  },
  kubeletUId: {
    dashboardUIdKey: string,
    grafanaLinkDText: string,
  },
  apiServerUId: {
    dashboardUIdKey: string,
    grafanaLinkDText: string,
  },
}

export type DBUIds = {
  nodeExporterUId?: string,
  prometheusUId?: string,
  kubeletUId?: string,
  apiServerUId?: string,
}

