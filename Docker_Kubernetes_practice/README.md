# Express Server on Kubernetes

Dies ist ein einfaches Express-Server-Projekt, das auf Kubernetes läuft. Es zeigt, wie man eine Node.js-Anwendung mit Kubernetes in Minikube betreibt.

## Voraussetzungen
- Minikube
- kubectl
- Docker
- Ein GitHub-Account (optional)

## Setup

1. **Clone das Repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2. **Docker Image erstellen und auf Docker Hub pushen (falls nicht bereits vorhanden):**
    ```bash
    docker build -t <dockerhub-username>/express-server:latest .
    docker push <dockerhub-username>/express-server:latest
    ```

3. **Kubernetes Deployment und Service erstellen:**
    ```bash
    kubectl apply -f deployment.yaml
    ```

4. **Port-Forwarding (optional für lokale Tests):**
    ```bash
    kubectl port-forward svc/express-server-service 8080:80
    ```

5. **Zugriff auf den Server:**
    - Öffne deinen Browser und gehe zu [http://localhost:8080](http://localhost:8080).
    - Alternativ kannst du auch den NodePort (z.B. [http://<minikube-ip>:<node-port>](http://<minikube-ip>:<node-port>)) verwenden, wenn du von außerhalb von Minikube zugreifen möchtest.


