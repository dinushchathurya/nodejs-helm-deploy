### Build Docker images in Minikube Deamon

```bash
eval $(minikube docker-env)
```

Then build the image:

```bash
docker build . -f nginx/Dockerfile -t app-nginx:v1
```

### Apply Deployments and Services

```bash
kubectl apply -f <deployment or service name>
```

### Dry run Helm 

```bash
helm install ./k8s --dry-run --generate-name
```

### Install Helm 

```bash
helm install ./k8s --generate-name
```