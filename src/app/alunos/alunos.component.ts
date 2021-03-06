import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { AlunoModel } from './aluno.model';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  
  aluno: AlunoModel = new AlunoModel();
  alunos: Array<any> = new Array();

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.listarAlunos();
  }
  atualizar(id: number){
    this.alunosService.atualizarAluno(id,this.aluno).subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },err =>{
      console.log('Error ao atualizar os alunos', err)
    })
  }
  remover(id: number){
    this.alunosService.removerAluno(id).subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },err =>{
      console.log('Error ao Remover os alunos', err)
    })
  }
  cadastrar() {
    this.alunosService.cadastrarAluno(this.aluno).subscribe(aluno => {
      this.aluno = new AlunoModel();
      this.listarAlunos();
    },err =>{
      console.log('Error ao cadastrar os alunos', err)
    })
  }
  listarAlunos(){
    this.alunosService.listarAlunos().subscribe(aluno  => {
      this.aluno = this.aluno

    },err =>{
      console.log('Error ao Listar os alunos', err)
    })
  }

}
