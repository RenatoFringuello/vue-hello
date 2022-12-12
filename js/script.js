const { createApp } = Vue

createApp({
    data(){
        return{
            helloWorldContent : 'Hello World',
            helloWorldClass : 'hello-world',
            imgSrc : './img/img.jpeg',
            imgClass : 'vue-img'
        }
    }
}).mount('#app');