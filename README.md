# dev-nodejs-web-reactjs-express-api-basic-auth-ssl-axios-supabase

## Description
A reactjs that uses expressjs api that uses basic authentication
and self signed ssl. The api then connects to a supabase database.

| username | password |
| -------- | -------- |
| *maria* | *pass* |

Features: 
- component with parameters
- css grid
- axios
- promise
- cors
- basic authentication
- self signed ssl

## Tech stack
- reactjs
- axios
- expressjs
- dotenv
- webpack
- postgres

## Docker stack
- alpine:edge
- supabase/postgres
- node:latest
- bayesimpact/react-base:latest

## To run
`sudo ./install.sh -u`
- [Availble here](http://localhost/)

## To stop
`sudo ./install.sh -d`

## For help
`sudo ./install.sh -h`

## Credit
- [Dotenv tutorial](https://www.freecodecamp.org/news/how-to-use-node-environment-variables-with-a-dotenv-file-for-node-js-and-npm/)
- [Express setup](https://ryanm.hashnode.dev/building-a-restful-api-with-supabase-nodejs-and-expressjs-a-comprehensive-guide)
- [Express ssl code](https://dev.to/omergulen/step-by-step-node-express-ssl-certificate-run-https-server-from-scratch-in-5-steps-5b87)
- [Supabase crud operations](https://medium.com/@heshramsis/building-a-crud-app-with-supabase-and-express-a-step-by-step-guide-for-junior-developers-81456b850910)
- [Supabase github](https://supabase.com/docs/guides/self-hosting/docker)
- [Typescript example](https://supabase.com/docs/reference/javascript/typescript-support)