# OnoffApi

### local
```
ng serve --env=local
or
ng serve --env=dev-2.3
or
ng serve --env=dev
```

### deploy
```
ng build --env=dev-2.3 --base-href /onoffapi --deploy-url /onoffapi

or 

ng build --env=dev --base-href /onoffapi --deploy-url /onoffapi
```

### copy to server
```
cd dist
# iprofile
scp -r . indiv@10.254.112.195:/INDI_IPROFILESit/TOMCAT9/webapps/onoffapi/

# indi
scp -r . indiv@10.254.114.66:/INDI_Portal/TOMCAT7/webapps/onoffapi/
```