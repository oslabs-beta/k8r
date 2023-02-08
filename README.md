<p align="center">
  <a href="https://github.com/oslabs-beta/k8r">
    <img src="client/assets/logoTransparent.png" alt="Logo" height="250">
  </a>

  <p align="center">
    K8R visualizes real-time Kubernetes cluster and hardware metrics with an emphasis on customization.
    <br />
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>

  1. [K8R](#k8r)
  2. [Tech Stack](#tech-stack)
  3. [Setup](#setup)
      * Getting Started - Initialize a Cluster of Your Choice
          * [Initialize a Local Minikube Cluster](https://github.com/oslabs-beta/k8r/blob/main/documentation/localClusterSetup.md#setup)
          * [Initialize a Cloud Cluster on Google Cloud Services](https://github.com/oslabs-beta/k8r/blob/main/documentation/cloudClusterSetup.md#initialize-a-cloud-cluster-on-google-cloud-services)
          * [Initialize a Cloud Cluster on Amazon Web Services](https://github.com/oslabs-beta/k8r/blob/main/documentation/cloudClusterSetup.md#initialize-a-cloud-cluster-on-amazon-web-services)
      * [Usage](#usage)
  4. [Contribution](#contribution)
  5. [License](#license)
  6. [Creators](#creators)
</details>

<hr>

# K8R
K8R is Purpose-built to deliver maximum out of the box productivity without the headaches of traditional solutions, K8R delivers at-a-glance insights into detailed and executive KPIs for your local and cloud based clusters. With K8Rs lightweight and unified user-experience, K8R works for you, not the other way around.


# Tech Stack
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) 
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) 
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)


# Setup
1. Getting Started - Initialize a Cluster of Your Choice
    * [Initialize a Local Minikube Cluster](https://github.com/oslabs-beta/k8r/blob/main/documentation/localClusterSetup.md#setup)
    * [Initialize a Cloud Cluster on Google Cloud Services](https://github.com/oslabs-beta/k8r/blob/main/documentation/cloudClusterSetup.md#initialize-a-cloud-cluster-on-google-cloud-services) 
    * [Initialize a Cloud Cluster on Amazon Web Services](https://github.com/oslabs-beta/k8r/blob/main/documentation/cloudClusterSetup.md#initialize-a-cloud-cluster-on-amazon-web-services)
2. Installation
    * Fork and Clone the Project
    * Run `node -v` to confirm your version of node. K8R requires node 18 or later.
        * To install latest version of node, run `nvm install --lts`
    * Run `npm i` to install all package dependencies.
    * Create a MongoDB database and Google OAuth credentials to use within your app.
    * Create a .env file and assign the following environment variables according to your MongoDB and Google OAuth setup.

          // MONGO
          MONGO_URL=
          MONGO_PORT=
          MONGO_USERNAME=
          MONGO_PASSWORD=

          // Google OAuth
          GOOGLE_CLIENT_SECRET=
          GOOGLE_CLIENT_ID=
          GOOGLE_CALLBACKURL='http://localhost:8888/auth/google/callback'
          SESSION_SECRET=[Randomized String for Express Sessions]
    * Run `npm run dev` to initialize the application on `http://localhost:8888/`
3. Usage

    * Log in from the landing page using Google OAuth.
        <br>
        <br>
        <img src="./client/assets/Login.gif" alt="Log In Video" width="800" height="380" />
    <br>
    <br>

    * Use the Cluster Editor to add or remove clusters to your account. 
        * Users can add additional clusters from any cluster source you prefer; including cloud hosted or local clusters. 
        * K8R allows users to see all of your clusters in one place regardless of their source, without having to switch to different windows for each cluster.

        <br>
        <br>
      <img src="./client/assets/Add Second Cluster - README.gif" alt="Cluster Editor Video" width="800" height="380" />
    <br>
    <br>

    * Use the Profile Editor to add or remove profiles. 
        * Users can add additional profiles for individual use cases and switch between profiles from the Profile Selector view. 
        * K8R allows users to create profiles with as few or as many cluster and hardware metrics as needed.

        <br>
        <br>
      <img src="./client/assets/Add Pod Lifecycle - README.gif" alt="Profile Editor Video" width="800" height="380" />        

# Contribution
Contributions are a great way to contribute to the open source community as a whole. If you'd like to contribute to K8R, please follow the steps below to get started.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/yourNewFeature`)
3. Commit your Changes (`git commit -m 'Add some a fantastic new feature'`)
4. Push to the Branch (`git push origin feature/yourNewFeature`)
5. Open a Pull Request

# License
Distributed under the MIT License. See [`LICENSE`](https://github.com/oslabs-beta/k8r/blob/master/LICENSE) for more information.

# Creators
| Developed By |    |    |
| :---:   | :---: | :---: |
| Josh Howard  | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JoshHowardDev)   | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/JoshHowardDev)   |
| Brian Jaber  | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Brian-Jaber)   | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brianjaber/)   |
| Anthony Cho  | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ayhcho)   | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anthony-cho-09a38a261/)   |
| Chris Oakes  | [![Github](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ckoakes)   | [![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/christopher-k-oakes/)   |