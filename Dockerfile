version '3'

service:
    backend:
        image:
            node: 12
        command: 'bash -c cd /frontend && yarn && yarn start'
    frontend:
        image:
            angular:9
        - volume:
            