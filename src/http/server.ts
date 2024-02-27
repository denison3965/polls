import { build } from "./app";

build.listen({port: 3333}).then(() => {
    console.log('I am here');
});