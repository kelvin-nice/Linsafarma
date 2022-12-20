
const template = document.createElement('template')
template.innerHTML = `
        <div class="container-cabecera" >
            <img src="./img/logo-color.png" alt="">
            <input id="buscar" type="text" placeholder="Buscar por nombre y marca">
            <div>
                <img src="img/icono-adress.png" alt="">
                <p id="text" >Av. Universitaria Nro. 7007 Urb. Santa Luzmila - Comas - Lima - Lima</p>
            </div>
        </div>
        `
        class cabecera extends HTMLElement{
            constructor(){
                super();
                this.attachShadow({ mode:"open" });
                this.buscar = document.getElementById('buscar')
                this.p = document.querySelector('#text')
            }
            connectedCallback(){
                 this.shadowRoot.appendChild(template.content.cloneNode(true));
                 
                 this.p.style.color= 'red'
            }
        }
        window.customElements.define('cabecera-template', cabecera)


   /*      class CabeceraTemplate extends HTMLElement{
            constructor(){
                super();
                this.importDocument = document.currentScript.ownerDocument;
            }

            connectedCallback(){
                let shadowRoot = this.attachShadow({ mode:"open"});
                const t = this.importDocument.querySelector("#cabecera-t");
                const instance = t.content.cloneNode(true);
                shadowRoot.appendChild(instance);
            }
        }

        window.customElements.define('cabecera-template', CabeceraTemplate) */
