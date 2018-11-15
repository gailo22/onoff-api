# OnoffApi

### local
```
ng serve --env=dev
```

### deploy
```
ng build --env=dev --base-href /onoffapi --deploy-url /onoffapi
```

### copy to server
```
cd dist
scp -r . indiv@10.254.112.195:/INDI_IPROFILESit/TOMCAT9/webapps/onoffapi/
```