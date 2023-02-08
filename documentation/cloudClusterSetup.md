# Setup

<!-- SETUP TABLE OF CONTENTS -->
<details open="open">
  <summary>Cloud Cluster Setup Table of Contents</summary>
  <ol>
    <li>
      <a href="#initialize-a-cloud-cluster-on-google-cloud-services">Initialize a Cluster on Google Cloud Services</a>
      <ul>
        <li><a href="#initialize-cloud-cluster">Initialize a Cluster</a></li>
        <li><a href="#initialize-cloud-cluster">Edit Config Map</a></li>
        <li><a href="#initialize-cloud-cluster">Expose Service</a></li>
      </ul>
    </li>
    <li><a href="#initialize-minikube-cluster---mac-os">Initialize a Cluster on Amazon Web Services</li>
      <ul>
        <li><a href="#initialize-cloud-cluster">Initialize a Cluster</a></li>
        <li><a href="#initialize-cloud-cluster">Edit Config Map</a></li>
        <li><a href="#initialize-cloud-cluster">Expose Service</a></li>
      </ul>
  </ol>
</details>


# Initialize a Cloud Cluster on Google Cloud Services
1. Visit [Google Cloud Services](https://console.cloud.google.com/kubernetes/) to create a project and initialize a standard cluster with your preferred resources.


2. Initialize Google Cloud Shell
        
3. Get cluster credentials & authorize cloud shell

        gcloud container clusters get-credentials [cluster name] --region=[region]

4. Install helm

        % curl -fsSL -o get_helm.sh https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3
      	% chmod 700 get_helm.sh
        % ./get_helm.sh


5. Add Repo for Prometheus Community Helm Chart

        helm repo add prometheus-community https://prometheus-community.github.io/helm-charts 

6. Update Repos

        helm repo update 

7. Install Prometheus Kube Stack

        helm install prometheus prometheus-community/kube-prometheus-stack 
    * Prometheus Kube Stack includes Grafana out of the box


# Edit Grafana Config Map

1. Under Secrets & ConfigMaps, select the Prometheus-Grafana Config Map and select the Edit button near the top of the screen to edit the config map.

2. Insert the following parameters in grafana.ini within the Data Category:
    * This will enable embedding and authorization to view grafana panels and dashboards from outside sources.

          [security]
          allow_embedding: true
          [auth.anonymous]
          enabled: true
          [dataproxy]
          timeout: 600
        
# Expose Service

1. Under Services & Ingress, select the Prometheus-Grafana service and select the Edit button near the top of the screen to edit the service's yaml file. 

2. Near the bottom of the file, under Spec, change type: from ClusterIP to LoadBalancer

3. In the Cloud Shell, delete the pod to restart it with the new configuration.
    * This will display the name of the current pods. Copy the full name of the prometheus-grafana pod.
    
          kubectl get pods
    * Delete the pod, inserting the full name.
    
          kubectl delete pod [pod name] -n default