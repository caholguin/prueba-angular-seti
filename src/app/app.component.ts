import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MutanService } from '../services/Mutan.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private fb = inject(FormBuilder);
  private mutanService = inject(MutanService);

  dnaform = this.fb.group({
    dnaSequence: ['', [Validators.required,Validators.pattern(/^[ACGTacgt\n]+$/)]],
  })

  result = this.mutanService.isMutan;

  checkDna(): void {
    if(this.dnaform.valid){
      const dna = this.dnaform.value.dnaSequence!.split('\n').map((rouw) => rouw.trim()).filter(row => row.length >0);
      console.log(dna);
      
      
      this.mutanService.checkMutan(dna);
    }
  }
}
