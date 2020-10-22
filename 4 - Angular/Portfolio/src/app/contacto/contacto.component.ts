import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto-usuario'

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

	public user: ContactoUsuario

	constructor() {
		this.user = new ContactoUsuario('', '', '', '')
	}

	ngOnInit(): void {
	}

	onSubmit(form){
		form.reset()
		console.log('submit lanzado', this.user)
	}

}
