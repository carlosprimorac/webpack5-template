import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';


export const helloWorld = (name = 'no name') => {
    
    console.log('creating h1 tag');
    
    const h1 = document.createElement('h1');
    h1.innerText = `hello ${ name }!!!`;

    document.body.append(h1);

    // img
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}
