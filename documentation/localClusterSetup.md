# Setup

<!-- SETUP TABLE OF CONTENTS -->
<details open="open">
  <summary>Setup Table of Contents</summary>
  <ol>
    <li>
      <a href="#initialize-minikube-cluster---mac-os">Initialize Minikube Cluster</a>
      <ul>
        <li><a href="#initialize-minikube-cluster---mac-os">Mac OS</a></li>
        <li><a href="#initialize-minikube-cluster---windows">Windows</a></li>
      </ul>
    </li>
    <li><a href="#edit-grafana-config-map">Edit Grafana Config Map</a></li>
    <li><a href="#expose-port-and-access-grafana">Expose Port and Access Grafana</a></li>
  </ol>
</details>


# Initialize Minikube Cluster - Mac OS
1. [Install Docker](https://www.docker.com/)

        Visit https://www.docker.com/ to install.



2. Install Minikube 

        brew install minikube
        
3. Install Helm 

        brew install helm

4. Start minikube

        minikube start 
    * This initiates a minikube cluster on your machine. Run the following in your terminal to see the cluster, pods, etc.:

            minikube dashboard

5. Add Repo for Prometheus Community Helm Chart

        helm repo add prometheus-community https://prometheus-community.github.io/helm-charts 

6. Update Repos

        helm repo update 

7. Install Prometheus Kube Stack

        helm install prometheus prometheus-community/kube-prometheus-stack 
    * Prometheus Kube Stack includes Grafana out of the box

# Initialize Minikube Cluster - Windows
1. [Install Docker](https://www.docker.com/)

        Visit https://www.docker.com/ to install.



2. Install Minikube 

        sudo install minikube
        
3. Install Helm 

        sudo install helm

4. Start minikube

        minikube start 
    * This initiates a minikube cluster on your machine. Run the following in your terminal to see the cluster, pods, etc.:

            minikube dashboard

5. Add Repo for Prometheus Community Helm Chart

        helm repo add prometheus-community https://prometheus-community.github.io/helm-charts 

6. Update Repos

        helm repo update 

7. Install Prometheus Kube Stack

        helm install prometheus prometheus-community/kube-prometheus-stack 
    * Prometheus Kube Stack includes Grafana out of the box


# Edit Grafana Config Map

1. Access config.ini within the minikube cluster.
    
        kubectl edit configmap prometheus-grafana

2. Insert the following parameters in grafana.ini within the Data Category:
    * This will enable embedding and authorization to view grafana panels and dashboards from outside sources.

          [security]
          allow_embedding: true
          [auth.anonymous]
          enabled: true
          [dataproxy]
          timeout: 600

3. Restart Minikube

        minikube stop 
        
        minikube start 
        
# Expose Port and Access Grafana

1. Forward the Prometheus Grafana port to expose it.
    * Grafana will now be accessible at localhost:3000

            kubectl port-forward deployment/prometheus-grafana 3000

2. Log in to Grafana with the default Prometheus Operator login.

        Username: admin
        Password: prom-operator