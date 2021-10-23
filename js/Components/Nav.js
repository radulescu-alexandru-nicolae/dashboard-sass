export default class Nav{
    constructor(){

this.container=document.querySelector('.container');
console.log(this.container);
this.setNav();
    }

    setNav=()=>{
        const nav=document.createElement('nav');
        nav.innerHTML=
        `
        <i class="fas fa-home"></i>
        <i class="fas fa-chart-bar"></i>
        <i class="fas fa-user-friends"></i>
        <i class="fas fa-cog"></i>
        `;
        this.container.appendChild(nav);

    }
}