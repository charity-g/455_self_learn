# docker
problem docker solves: standardization
- docker vs vm
- images vs containers

`docker ps`
`docker ps -a`

`docker images`

`docker pull nginx:1.23`
`docker pull nginx`

`docker run nginx:1.23`
`docker run --name web-app nginx:1.23` #detached in background thread
`docker run -d nginx:1.23` #detached in background thread
> 0864139b315b7fe0a013a4d715a072f37fae5bd75698b49a5f992e3914e8e71e #container_id

`docker logs {container_id}`

### docker port binding
- container port vs host port
- container runs on port, (standard ports for each application as default)
`docker run -d -p 9000:80 nginx:1.23` # expose container from 80 to 9000 > means type in localhost:9000

`docker start {stopped_container id}` # restart

`docker stop {container_id}`

# Dockerfile

 docker build   image_name    folder of Dockerfile
`docker build -t node-app:1.0 {relative_path}` # given a dockerfile, build the image

`docker run node-app:1.0` # runs the image