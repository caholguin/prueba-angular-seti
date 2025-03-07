import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutanService {

  isMutan = signal<boolean | null>(null);

  checkMutan(dna: string[]): boolean {
    const n = dna.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        count++;
        if (j + 3 < n && dna[i][j] === dna[i][j + 1] && dna[i][j] === dna[i][j + 2] && dna[i][j] === dna[i][j + 3]) {
          count++
        }
        if (i + 3 < n && dna[i][j] === dna[i][j + 1] && dna[i][j] === dna[i][j + 2] && dna[i][j] === dna[i][j + 3]) {
          count++
        }
        if (i + 3 < n && j + 3 < n && dna[i][j] === dna[i+1][j+1] && dna[i][j] === dna[i+2][j+2] && dna[i][j] === dna[i+3][j+3]) {
          count++
        }
        if (i + 3 < n && j - 3 >= 0 && dna[i][j] === dna[i+1][j-1] && dna[i][j] === dna[i+2][j-2] && dna[i][j] === dna[i+3][j-3]) {
          count++
        }
      }
    }
    this.isMutan.set(count > 1);
    return count > 1;
  } 

}
