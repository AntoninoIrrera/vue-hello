

const {createApp} = Vue;

createApp({
    data(){
        return{
            message: "Ciao a tutti, questo e Vue3",
            srcImg: "https://res.cloudinary.com/practicaldev/image/fetch/s--vbEQHpsU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/vg0v5vm9a0c1ix6mdp9s.png"
        }
    }
}).mount("#app")

