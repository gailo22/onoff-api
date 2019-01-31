import { Component, OnInit } from '@angular/core';
import { JmxService } from '../jmx.service';
import { OperationId } from '../operationid';
import { LoadingIndicatorService } from '../loading-indicator.service';
import { environment } from '../../environments/environment';
import { operationIds23 } from './operationIds-2.3';
import { operationIds } from './operationIds';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  operations: OperationId[];

  checkOperations: OperationId[] = [];
  submissionOperations: OperationId[] = [];

  selectedOperations: string[];
  selectedCheckOperations: string[];
  selectedSubmissionOperations: string[];

  constructor(private jmxService: JmxService, public loadingIndicatorService: LoadingIndicatorService) {
    this.initOperations();
    this.checkOperations = this.operations.filter(x => x.type === 'check');
    this.submissionOperations = this.operations.filter(x => x.type === 'submission');
    this.refresh();
  }

  initOperations() {
    if (environment.version === '2.3') {
      this.operations = operationIds23;
    } else {
      this.operations = operationIds;
    }
  }

  ngOnInit() {
  }

  onNgModelChange(event) {
    console.log(this.selectedCheckOperations);
    console.log(this.selectedSubmissionOperations);
  }

  save() {
    console.log('save..');
    this.loadingIndicatorService.onRequestStarted();
    this.reset();
    if (this.selectedCheckOperations) {
      this.jmxService.addOperations(this.selectedCheckOperations);
    }

    if (this.selectedSubmissionOperations) {
      this.jmxService.addOperations(this.selectedSubmissionOperations);
    }
    this.loadingIndicatorService.onRequestFinished();
  }

  reset() {
    console.log('reset..');
    this.loadingIndicatorService.onRequestStarted();
    this.jmxService.reset().subscribe(it => {
      console.log(it);
      this.loadingIndicatorService.onRequestFinished();
    });
  }

  refresh() {
    this.loadingIndicatorService.onRequestStarted();
    this.jmxService.getOperations()
      .subscribe(ops => {
        this.selectedOperations = ops;
        this.selectedCheckOperations = this.operations.filter(x => ops.includes(x.api)).filter(x => 'check' === x.type).map(x => x.api);
        this.selectedSubmissionOperations = this.operations.filter(x => ops.includes(x.api)).filter(x => 'submission' === x.type).map(x => x.api);
        this.loadingIndicatorService.onRequestFinished();
      });
  }

}
