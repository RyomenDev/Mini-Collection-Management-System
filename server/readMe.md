#### To get the Elasticsearch username and password, follow these steps depending on your setup:

### 🔹 If Using Docker
If you set up Elasticsearch using **Docker Compose**, credentials are usually auto-generated.

#### 1️⃣ Check Logs for Auto-Generated Credentials
Run:

```sh
docker logs <elasticsearch_container_id>
```
or

```sh
docker-compose logs elasticsearch
```

Look for a line like:

```pgsql
Elastic user password: <some-password>
```
The default username is **elastic**.

