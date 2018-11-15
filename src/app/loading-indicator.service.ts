import { Injectable } from '@angular/core';

@Injectable()
export class LoadingIndicatorService {

  private _loading = false;

  constructor() { }

  get loading(): boolean {
    return this._loading;
  }

  onRequestStarted(): void {
      this._loading = true;
  }

  onRequestFinished(): void {
      this._loading = false;
  }

}
