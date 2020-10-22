import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service'


@Component({
	selector: 'app-external',
	templateUrl: './external.component.html',
	styleUrls: ['./external.component.css'],
	providers: [PeticionesService]
})
export class ExternalComponent implements OnInit {

	public user: any
	public userID: number
	public fecha: any

	public new_user: any

	constructor(
		private _peticionesService: PeticionesService
	) {
		this.userID = 1
		this.new_user = {
			"name": "",
			"job": ""
		}
	}

	ngOnInit(){
		this.fecha = new Date()
		this.loadUser()
	}

	loadUser(){
		this.user = false
		this._peticionesService.getUser(this.userID).subscribe(
		result => {
			this.user = result.data
		},
		error => {
			console.log(error)
		}
		)
	}

	onSubmit(form){
		this._peticionesService.addUser(this.new_user).subscribe(
			response => {
				console.log(response)
				form.reset
			},
			error => {
				console.log(<any>error)
			}
		)
	}
}
