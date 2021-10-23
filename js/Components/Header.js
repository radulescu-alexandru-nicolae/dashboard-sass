export default class Header{

    constructor(){
        this.container=document.querySelector('.container');
        this.setHeader();

    }

    setHeader=()=>{
        const header=document.createElement('header');
        header.innerHTML=
        `
        <h2><strong>Web</strong>App</h2>
        <section class="container-profile">
            <div class="bell">
                <i class="far fa-bell"></i>
            </div>
            <div class="container-name-img">
                <img src="images/member-1.jpg" alt="">
                <p>Student Name</p>
            </div>
        </section>
        `;
        this.container.appendChild(header);
    }
}