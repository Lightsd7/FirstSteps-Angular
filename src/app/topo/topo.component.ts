import { Component } from '@angular/core'

@Component({
    selector: 'app-topo', //seletor baseado em rótulo
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css'] // Aqui como é um Array, podem ter vários arquivos declarados aqui
    // styles: [`.exemplo{ 
    //     color: aqua
    // }`] // mesma coisa do template
    // template: `<p>
    //               Esse é o componente topo
    //            </p>` // colocar o html da página por aqui tbm é possível
})
export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês'
}